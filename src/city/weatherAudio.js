function noiseBuffer(ctx, seconds) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let brown = 0;
  for (let index = 0; index < length; index += 1) {
    const white = Math.random() * 2 - 1;
    brown = brown * 0.85 + white * 0.15;
    data[index] = brown;
  }
  return buffer;
}

export function startRainBed(ctx) {
  const source = ctx.createBufferSource();
  source.buffer = noiseBuffer(ctx, 2);
  source.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 780;
  const gain = ctx.createGain();
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.45);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();

  let stopped = false;
  return {
    stop() {
      if (stopped) return;
      stopped = true;
      const time = ctx.currentTime;
      const current = Math.max(gain.gain.value, 0.0001);
      gain.gain.cancelScheduledValues(time);
      gain.gain.setValueAtTime(current, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.3);
      source.stop(time + 0.32);
    },
  };
}

function burst(ctx, when, { seconds, peak, frequency }) {
  const source = ctx.createBufferSource();
  source.buffer = noiseBuffer(ctx, seconds);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(frequency, when);
  filter.frequency.exponentialRampToValueAtTime(Math.max(60, frequency * 0.45), when + seconds);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.exponentialRampToValueAtTime(peak, when + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + seconds);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start(when);
  source.stop(when + seconds + 0.02);
}

export function playThunder(ctx) {
  const now = ctx.currentTime;
  burst(ctx, now, { seconds: 0.18, peak: 0.12, frequency: 1400 });
  burst(ctx, now + 0.16 + Math.random() * 0.35, {
    seconds: 1.7,
    peak: 0.2,
    frequency: 160,
  });
}
