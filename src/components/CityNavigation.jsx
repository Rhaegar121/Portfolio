import PropTypes from 'prop-types';
import { locations, toMapPoint } from '../constants/cityLocations';
import ModeSwitcher from './ModeSwitcher';
import style from './styles/city.module.css';

export default function CityNavigation({
  activeId,
  hoveredId,
  onSelect,
  panelOpen,
}) {
  const hovered = locations.find((location) => location.id === hoveredId);

  return (
    <>
      <div className={`${style.map} ${panelOpen ? style.mapHidden : ''}`} role="group" aria-label="City map">
        <span className={style.north} aria-hidden="true">North</span>
        {locations.map((location) => {
          const point = toMapPoint(location.position);
          return (
            <button
              key={location.id}
              type="button"
              className={style.mapPin}
              style={{ left: `${point.x}%`, top: `${point.y}%`, '--pin': location.color }}
              aria-label={`${location.name}. ${location.summary}`}
              aria-pressed={activeId === location.id}
              onClick={() => onSelect(location.id)}
            />
          );
        })}
        <span className={style.mapCaption}>Map</span>
      </div>
      <div className={style.bottom}>
        <p className={`${style.status} ${panelOpen ? style.statusQuiet : ''}`} aria-hidden="true">
          {hovered ? `${hovered.name}. ${hovered.summary}` : 'Drag to look around, or pick a district below.'}
        </p>
        <div className={style.dock}>
          <nav id="city-destinations" className={style.destinations} aria-label="Portfolio destinations">
            <button
              id="destination-overview"
              type="button"
              className={style.chip}
              aria-pressed={activeId === null}
              onClick={() => onSelect(null)}
            >
              Overview
            </button>
            {locations.map((location) => (
              <button
                id={`destination-${location.id}`}
                key={location.id}
                type="button"
                className={style.chip}
                style={{ '--chip': location.color }}
                aria-pressed={activeId === location.id}
                aria-label={`${location.name}. ${location.summary}`}
                onClick={() => onSelect(location.id)}
              >
                <span className={style.dot} aria-hidden="true" />
                {location.short}
              </button>
            ))}
          </nav>
          <ModeSwitcher placement="inline" />
        </div>
      </div>
    </>
  );
}

CityNavigation.propTypes = {
  activeId: PropTypes.string,
  hoveredId: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  panelOpen: PropTypes.bool.isRequired,
};

CityNavigation.defaultProps = {
  activeId: null,
  hoveredId: null,
};
