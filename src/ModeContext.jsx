import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { canUseWebGL } from './city/capabilities';

const ModeContext = createContext(null);
const STORAGE_KEY = 'portfolio-view-mode';

function readStoredMode(webgl) {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'classic') return 'classic';
    if (stored === 'city' && webgl) return 'city';
  } catch (error) {
    return webgl ? 'city' : 'classic';
  }
  return webgl ? 'city' : 'classic';
}

export function ModeProvider({ children }) {
  const [webgl] = useState(() => canUseWebGL());
  const [mode, setModeState] = useState(() => readStoredMode(webgl));

  const setMode = useCallback((next) => {
    if (next !== 'city' && next !== 'classic') return;
    if (next === 'city' && !webgl) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      /* session storage can be blocked */
    }
    setModeState(next);
  }, [webgl]);

  const value = useMemo(() => ({
    mode, setMode, webgl,
  }), [mode, setMode, webgl]);

  return (
    <ModeContext.Provider value={value}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within ModeProvider');
  }
  return context;
}

ModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
