import WhiteTextLine from "./WhiteTextLine";

export default function InputElement({ labelText, placeholder, name, value, onChange, handleKeyDown, testId }) {
    return (
      <>
        <label htmlFor={name}>
          {labelText && <WhiteTextLine>{labelText}</WhiteTextLine>}
        </label>
          <input
            data-testid={testId}
            className="my-1 p-3 block w-full rounded-lg bg-gray-600 border-0 text-gray-900 text-gray-200 mx-auto"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onKeyDown={handleKeyDown} // Enter triggers a button if needed
            required
          />
      </>
    );
}