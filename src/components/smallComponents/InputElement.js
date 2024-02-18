import { WhiteTextLine } from "./TextLines";

export function InputElement({ labelText, name, value, onChange }) {
    return (
      <label className="labelStyle">
        <WhiteTextLine>{labelText}</WhiteTextLine>
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
        <WhiteTextLine>{labelText}</WhiteTextLine>
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