// Third-party components & modules
import { PropTypes } from "prop-types"

const TextArea = ({ inputValue, inputPlaceholder, changeFunc }) => {
  return (
    <>
      <textarea
        className="textarea-custom"
        style={basicStyles}
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={changeFunc}
      ></textarea>
    </>
  )
}

// Basic styling
const basicStyles = {
  backgroundColor: "#ffffff",
  minWidth: "200px",
  height: "80px",
  padding: "12px",
  margin: "5px",
  fontSize: "0.9rem",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  resize: "none",
  transition: "all 0.3s ease-in-out",
}

// Type checking
TextArea.propTypes = {
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
}

// Default values
TextArea.defaultProps = {
  inputType: "text",
  inputPlaceholder: "Enter...",
  changeFunc: () => console.log("Typing"),
}

export default TextArea
