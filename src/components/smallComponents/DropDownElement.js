import { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function DropDownElement({ text, name, options, selectedOption, eventHandler }) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Click outside the menu closes the menu
  // If the click target is not contained within dropdownRef.current, it's outside the menu
  useEffect(() => {
      const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      }

      // Bind the event listener, listens to clicks outside the menu
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [dropdownRef]);

  // Accessibility
  const handleKeyDown = (event) => {
    const items = Array.from(document.querySelectorAll('.selectable-item'));
    const currentIndex = items.indexOf(document.activeElement);
    
    if (event.key === 'ArrowDown') {
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex].focus();
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      items[prevIndex].focus();
      event.preventDefault();
    } else if (event.key === 'Enter') {
      // Ensure we have a focused item to select
      if (currentIndex !== -1) {
        const selectedItem = items[currentIndex];
        const option = selectedItem.getAttribute('data-option-value'); 
        const name = selectedItem.getAttribute('data-name');

        // Create a simulated event object
        const simulatedEvent = {
          target: { name: name, value: option },
        };

        // Call the eventHandler with the simulated event
        eventHandler(simulatedEvent);

        // Close the menu
        setIsOpen(false);

        event.preventDefault();
      }
    }
  };

  return (

    <div className="relative" ref={dropdownRef}>

    <Button buttonType="button" buttonOnClick={toggleDropdown}>{selectedOption ? text + ": " + selectedOption : text}</Button>

    {isOpen && (
      <div 
        tabIndex="0" 
        role="listbox" 
        className="fixed inset-0 md:inset-auto md:right-2 z-50 md:absolute md:z-10 md:mt-1 bg-white md:rounded-md shadow-lg w-screen md:w-32 h-fit">

        {options.map((option, index) => {
          // Simulate an event object
          const simulatedEvent = {
              target: {name: name, value: option,}
          };
          return <div
            // for screen readers
            role="option" 
            aria-selected={option === selectedOption ? "true" : "false"}
            tabIndex="0" 
            data-option-value={option}
            data-name={name}
            // Others
            key={index} 
            className={`selectable-item hover:bg-purple-800 hover:text-white md:first:hover:rounded-t md:first:rounded-t md:last:hover:rounded-b md:last:rounded-b px-4 py-2 h-20 md:h-12 flex justify-center items-center ${selectedOption === option && "bg-purple-800"}`} 
            onClick={() => {
                eventHandler(simulatedEvent);
                setIsOpen(false);
            }}
            onKeyDown={handleKeyDown}>
              {option}
            </div>
        })}
        
      </div>
    )}

    </div>

  );
}