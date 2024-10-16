import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  // toggle option Panel
  const [isOpen, setIsOpen] = useState(false);

  // useRef is used to make sure that we take extact tag coz taking based on className
  // will cause confusion as multiple we use Tailwind and CSS is applied with classes
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      //check if referred div exist or not
      if (!divEl.current) {
        return;
      }
      // if click event target is not inside the div, close the dropdown
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // add event listener when component mounts, true makes sure
    // the action happens in upper most parent not immediate parent
    document.addEventListener("click", handler, true);

    // cleanup function as even if we hide the div the event maybe still be listening
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    // updates the content on Dropdown div
    onChange(option);
  };

  // render multiple option and data is coming from DropdownPage.js
  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
