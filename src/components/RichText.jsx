import PropTypes from 'prop-types';

export default function RichText({ text }) {
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (!part) return null;
    if (index % 2 === 1) {
      return <strong key={`${index}-${part.slice(0, 12)}`}>{part}</strong>;
    }
    return <span key={`${index}-${part.slice(0, 12)}`}>{part}</span>;
  });
}

RichText.propTypes = {
  text: PropTypes.string.isRequired,
};
