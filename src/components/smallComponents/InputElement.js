import WhiteTextLine from "./WhiteTextLine";

export default function InputElement({ labelText, placeholder, name, value, onChange, handleKeyDown }) {
    return (
      <label>
        {labelText && <WhiteTextLine>{labelText}</WhiteTextLine>}
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onKeyDown={handleKeyDown} // Enter triggers a button if needed
          required
        />
      </label>
    );
}