export default function BookDropDown({ selectedOption, handleYearChange }) {
  return (
    <div className="dropDownWrapper">
    <span>Show books from year:</span>
    <select className="selectYearMenu" value={selectedOption} onChange={handleYearChange}>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
    </select>
    </div>
  );
}
