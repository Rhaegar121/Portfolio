import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import CyberpunkCity from '../city/CyberpunkCity';
import { getCityQuality, prefersReducedMotion } from '../city/capabilities';
import { playThunder, startRainBed } from '../city/weatherAudio';
import { getLocation, overviewCamera } from '../constants/cityLocations';
import CityNavigation from './CityNavigation';
import PortfolioPanel from './PortfolioPanel';
import style from './styles/city.module.css';

function readQuality() {
  try {
    const stored = sessionStorage.getItem('portfolio-city-quality');
    if (stored === 'lite' || stored === 'full') return stored;
  } catch (error) {
    return getCityQuality();
  }
  return getCityQuality();
}

const SCREEN_DROPS = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 53) % 100}%`,
  delay: `${(index % 10) * 0.14}s`,
  duration: `${1.2 + (index % 6) * 0.16}s`,
  height: `${14 + (index % 5) * 5}px`,
  opacity: 0.28 + (index % 4) * 0.08,
}));

function readHint() {
  try {
    return sessionStorage.getItem('portfolio-city-hint') !== 'dismissed';
  } catch (error) {
    return true;
  }
}

export default function CityMode() {
  const [quality, setQuality] = useState(readQuality);
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [hintOpen, setHintOpen] = useState(readHint);
  const [canvasReady, setCanvasReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [raining, setRaining] = useState(false);
  const [flashKey, setFlashKey] = useState(0);
  const returnFocus = useRef(null);
  const audioRef = useRef(null);
  const active = getLocation(activeId);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBody = body.style.overflow;
    const previousRoot = documentElement.style.overflow;
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    return () => {
      body.style.overflow = previousBody;
      documentElement.style.overflow = previousRoot;
      body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = hoveredId ? 'pointer' : 'auto';
  }, [hoveredId]);

  useEffect(() => () => {
    const ctx = audioRef.current;
    audioRef.current = null;
    if (ctx) ctx.close();
  }, []);

  useEffect(() => {
    const ctx = audioRef.current;
    if (!raining || !ctx) return undefined;
    let bed = null;
    let stopped = false;
    ctx.resume().then(() => {
      if (!stopped) bed = startRainBed(ctx);
    });
    return () => {
      stopped = true;
      if (bed) bed.stop();
    };
  }, [raining]);

  useEffect(() => {
    if (!canvasReady) return undefined;
    const delay = reducedMotion ? 0 : 360;
    const timer = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(timer);
  }, [canvasReady, reducedMotion]);

  const onSelect = useCallback((id) => {
    if (id) {
      returnFocus.current = document.getElementById(`destination-${id}`);
      setActiveId(id);
      return;
    }
    const node = returnFocus.current || document.getElementById('destination-overview');
    setActiveId(null);
    window.requestAnimationFrame(() => node?.focus());
  }, []);

  const onHover = useCallback((id, entering) => {
    setHoveredId((current) => {
      if (entering) return id;
      if (current === id) return null;
      return current;
    });
  }, []);

  const onClose = useCallback(() => onSelect(null), [onSelect]);

  const toggleQuality = () => {
    setQuality((current) => {
      const next = current === 'lite' ? 'full' : 'lite';
      try {
        sessionStorage.setItem('portfolio-city-quality', next);
      } catch (error) {
        /* ignore blocked storage */
      }
      return next;
    });
  };

  const toggleRain = () => {
    const next = !raining;
    if (next) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx && !audioRef.current) audioRef.current = new AudioCtx();
      if (audioRef.current) audioRef.current.resume();
    }
    setRaining(next);
  };

  const onStrike = useCallback(() => {
    const ctx = audioRef.current;
    if (ctx && ctx.state !== 'closed') playThunder(ctx);
    if (!reducedMotion) setFlashKey((key) => key + 1);
  }, [reducedMotion]);

  const dismissHint = () => {
    setHintOpen(false);
    try {
      sessionStorage.setItem('portfolio-city-hint', 'dismissed');
    } catch (error) {
      /* ignore blocked storage */
    }
  };

  const status = active
    ? `${active.name} open`
    : `City overview${raining ? ', light rain' : ''}`;

  return (
    <div className={style.root}>
      <a className={style.skip} href="#city-destinations">Skip to destinations</a>
      <div className={style.viewport}>
        <Canvas
          camera={{
            position: overviewCamera.position,
            fov: 38,
            near: 0.1,
            far: 200,
          }}
          dpr={quality === 'lite' ? 1 : [1, 1.5]}
          frameloop={reducedMotion && !raining ? 'demand' : 'always'}
          performance={{ min: quality === 'lite' ? 0.85 : 0.5 }}
          gl={{
            antialias: quality !== 'lite',
            alpha: false,
            stencil: false,
            powerPreference: quality === 'lite' ? 'low-power' : 'high-performance',
          }}
          onCreated={(state) => {
            const renderer = state.gl;
            renderer.setClearColor('#070b14');
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.05;
            setCanvasReady(true);
          }}
        >
          <CyberpunkCity
            quality={quality}
            activeId={activeId}
            hoveredId={hoveredId}
            reducedMotion={reducedMotion}
            raining={raining}
            onStrike={onStrike}
            onSelect={onSelect}
            onHover={onHover}
          />
        </Canvas>
        {!visible && (
          <div className={style.loading} role="status">
            <div>
              <p>Entering the city…</p>
              <div className={style.loadingBar} aria-hidden="true"><span /></div>
            </div>
          </div>
        )}
      </div>
      {!reducedMotion && <div className={style.scanlines} aria-hidden="true" />}
      {raining && !reducedMotion && (
        <div className={style.screenRain} aria-hidden="true">
          {SCREEN_DROPS.map((drop) => (
            <span
              key={drop.id}
              style={{
                left: drop.left,
                height: drop.height,
                opacity: drop.opacity,
                animationDelay: drop.delay,
                animationDuration: drop.duration,
              }}
            />
          ))}
        </div>
      )}
      {raining && flashKey > 0 && !reducedMotion && (
        <div key={flashKey} className={style.lightning} aria-hidden="true" />
      )}
      <div className={style.hud}>
        <header className={style.header}>
          <div>
            <p className={style.kicker}>Developer portfolio</p>
            <h1 className={style.brand}>Kaung Myat Kyaw</h1>
            <p className={style.role}>Full-stack software engineer</p>
            <div className={style.controls}>
              <button type="button" className={style.quality} aria-pressed={quality === 'lite'} onClick={toggleQuality}>
                {quality === 'lite' ? 'Richer city' : 'Lighter city'}
              </button>
              <button type="button" className={style.quality} aria-pressed={raining} onClick={toggleRain}>
                {raining ? 'Stop rain' : 'Light rain'}
              </button>
            </div>
          </div>
        </header>
        <p className="cp-sr" aria-live="polite">{status}</p>
        <div className={style.footerCluster}>
          {!active && hintOpen && (
            <div className={style.hint} role="status">
              <p>Explore the city or select a destination.</p>
              <button type="button" onClick={dismissHint}>Dismiss</button>
            </div>
          )}
          {/* {!active && !hintOpen && (
            <button type="button" className={style.hintRestore} onClick={() => setHintOpen(true)}>
              Show hint
            </button>
          )} */}
          <CityNavigation
            activeId={activeId}
            hoveredId={hoveredId}
            onSelect={onSelect}
            panelOpen={Boolean(active)}
          />
        </div>
        <AnimatePresence mode="wait">
          {active && (
            <PortfolioPanel key={active.id} location={active} onClose={onClose} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
