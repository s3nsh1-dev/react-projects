import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    // prevent FORM from submitting automatically
    event.preventDefault();
    // Call the parent component's function when the button is clicked
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      {/* using form because its default behaviour is getting submitted after ENTER key press */}
      <form onSubmit={handleFormSubmit}>
        {/* every single time user make change into the input box handleChange is gonna call and event will help taking values of input field and fill in into the term state */}
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
