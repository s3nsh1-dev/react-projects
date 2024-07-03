export default function SearchBar({ onSubmit }) {
  const handleClick = () => {
    // Call the parent component's function when the button is clicked
    onSubmit("cars");
  };
  return (
    <div>
      <input />
      <button onClick={handleClick}>Search</button>;
    </div>
  );
}
