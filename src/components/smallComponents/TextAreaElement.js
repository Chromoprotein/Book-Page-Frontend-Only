import WhiteTextLine from "./WhiteTextLine";

export default function TextAreaElement({ labelText, name, value, onChange, placeholder }) {
    return (
      <>
        <label for={name}>
          <WhiteTextLine>{labelText}</WhiteTextLine>
        </label>
          <textarea
            className="p-2 mb-2 block w-full rounded-lg bg-gray-600 border-0 text-gray-200"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
          />
      </>
    );
}