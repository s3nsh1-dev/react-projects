import ReactDOM from "react-dom";
import { useEffect } from "react";

// actionBar section is for the button action
// shown at the bottom on modal div
function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    // when Modal is shown the scrolling is stopped
    document.body.classList.add("overflow-hidden");

    // if scrolling not stopped then modal will take 100vw and
    // 100vh but the content below have not modal effect
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // createPortal to render modal outside of the DOM tree
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-gray-300 opacity-80'
      ></div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>{actionBar}</div>
        </div>
      </div>
    </div>,
    // append modal to the body
    document.querySelector(".modal-container")
  );
}

export default Modal;
