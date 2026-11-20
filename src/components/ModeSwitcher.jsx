import PropTypes from 'prop-types';
import { useMode } from '../ModeContext';
import style from './styles/modeSwitcher.module.css';

export default function ModeSwitcher({ placement }) {
  const { mode, setMode, webgl } = useMode();
  const shell = placement === 'inline' ? style.inline : style.fixed;

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setMode('classic');
    }
    if (event.key === 'ArrowLeft' && webgl) {
      event.preventDefault();
      setMode('city');
    }
  };

  return (
    <div className={shell}>
      <div
        className={style.group}
        role="radiogroup"
        aria-label="Portfolio view"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <button
          type="button"
          role="radio"
          className={style.option}
          aria-checked={mode === 'city'}
          aria-describedby="city-mode-note"
          tabIndex={mode === 'city' ? 0 : -1}
          disabled={!webgl}
          onClick={() => setMode('city')}
        >
          City
        </button>
        <button
          type="button"
          role="radio"
          className={style.option}
          aria-checked={mode === 'classic'}
          tabIndex={mode === 'classic' ? 0 : -1}
          onClick={() => setMode('classic')}
        >
          Classic
        </button>
      </div>
      {webgl ? (
        <span id="city-mode-note" className="cp-sr">Interactive 3D city. Classic keeps the standard page.</span>
      ) : (
        <p id="city-mode-note" className={style.note}>
          City mode needs WebGL, so the classic portfolio stays available.
        </p>
      )}
    </div>
  );
}

ModeSwitcher.propTypes = {
  placement: PropTypes.oneOf(['fixed', 'inline']),
};

ModeSwitcher.defaultProps = {
  placement: 'fixed',
};
