// Third-party components & modules
import { PropTypes } from 'prop-types'

const MainButton = ({ buttonText, clickFunc }) => {
  return (
    <>
      <div
        className="main-button-custom"
        style={basicStyles}
        onClick={() => clickFunc()}
      >
        {buttonText}
      </div>
    </>
  )
}

// Basic styling
const basicStyles = {
  display: 'inline',
  backgroundColor: '#303952',
  color: '#ffffff',
  padding: '10px 20px',
  margin: '5px',
  fontSize: '0.9rem',
  textAlign: 'center',
  outline: 'none',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
}

// Type checking
MainButton.propTypes = {
  buttonText: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  clickFunc: PropTypes.func.isRequired,
}

// Default values
MainButton.defaultProps = {
  buttonText: 'Click Me',
  clickFunc: () => console.log('Button Clicked!'),
}

export default MainButton
