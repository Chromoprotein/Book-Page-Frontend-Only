import WhiteTextLine from "./WhiteTextLine";

export default function TextAreaElement({ labelText, name, value, onChange }) {
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