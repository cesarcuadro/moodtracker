import { useState } from "react";

const Lists = () => {
  // eslint-disable-next-line no-unused-vars
  const [gratitudeList, setGratitudeList] = useState([]);
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");

  function handleValueChange(e) {
    e.preventDefault();

    // Create a new array with the current values
    const newGratitudeList = [firstValue, secondValue, thirdValue];

    // Update the state to include the new array
    setGratitudeList(newGratitudeList);

    // Clear the textareas
    setFirstValue("");
    setSecondValue("");
    setThirdValue("");

    // Log the updated array
    console.log("Gratitude List:", newGratitudeList);
  }

  return (
    <div>
      <h1>Gratitude List</h1>
      <form onSubmit={handleValueChange}>
        <p>List three things you are grateful for today:</p>
        <textarea
          type="text"
          placeholder="first"
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="second"
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="third"
          value={thirdValue}
          onChange={(e) => setThirdValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Lists;
