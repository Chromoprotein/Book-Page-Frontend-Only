import { WhiteTextLine } from "./TextLines";

export function InputElement({ labelText, placeholder, name, value, onChange, handleKeyDown }) {
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

export function TextAreaElement({ labelText, name, value, onChange }) {
    return (
      <label>
        <WhiteTextLine>{labelText}</WhiteTextLine>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    );
}