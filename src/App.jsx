import { lazy, Suspense } from 'react';
import { ThemeProvider } from './ThemeContext';
import { ModeProvider, useMode } from './ModeContext';
import ModeSwitcher from './components/ModeSwitcher';
import ClassicMode from './components/ClassicMode';
import CityErrorBoundary from './components/CityErrorBoundary';
import './styles/cyberpunk.css';

const CityMode = lazy(() => import('./components/CityMode'));

function CityBoot() {
  const { setMode } = useMode();
  return (
    <div className="cp-boot" role="status">
      <div>
        <p>Kaung Myat Kyaw</p>
        <p>Entering the city…</p>
        <button type="button" onClick={() => setMode('classic')}>Use classic portfolio</button>
      </div>
    </div>
  );
}

function CityExperience() {
  const { setMode } = useMode();
  return (
    <CityErrorBoundary onClassic={() => setMode('classic')}>
      <Suspense fallback={<CityBoot />}>
        <CityMode />
      </Suspense>
    </CityErrorBoundary>
  );
}

function Portfolio() {
  const { mode, webgl } = useMode();
  if (mode === 'city' && webgl) return <CityExperience />;
  return (
    <>
      <div className="classic-shell">
        <ClassicMode />
      </div>
      <ModeSwitcher />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ModeProvider>
        <Portfolio />
      </ModeProvider>
    </ThemeProvider>
  );
}

export default App;
