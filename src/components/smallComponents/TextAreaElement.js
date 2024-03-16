import WhiteTextLine from "./WhiteTextLine";

export default function TextAreaElement({ labelText, name, value, onChange }) {
    return (
      <>
        <label for={name}>
          <WhiteTextLine>{labelText}</WhiteTextLine>
        </label>
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required
          />
      </>
    );
}