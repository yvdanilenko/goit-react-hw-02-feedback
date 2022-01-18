// import PropTypes from 'prop-types';
import Button from './Buttons.styled';

const Controls = ({ name, controlClick }) => {
  return (
    <Button name={name} type="button" onClick={controlClick}>
      {name}
    </Button>
  );
};

// Controls.PropTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Controls;
