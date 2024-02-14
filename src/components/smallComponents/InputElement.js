export function InputElement({ labelText, name, value, onChange }) {
    return (
      <label className="labelStyle">
        {labelText}
        <input
          className="inputStyle"
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    );
}

export function TextAreaElement({ labelText, name, value, onChange }) {
    return (
      <label className="labelStyle">
        {labelText}
        <textarea
          className="inputStyle"
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    );
}

export function DropDownElement({ text, name, options, selectedOption, eventHandler }) {
  return (
    <label>
      <span>{text}</span>
      <select name={name} value={selectedOption} onChange={eventHandler}>
            <option value="" disabled selected>
                Year
            </option>
            {options.map((option, index) => 
                <option key={index} value={option}>{option}</option>
            )}
      </select>
    </label>
  );
}