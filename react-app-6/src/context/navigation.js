import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Update the current path when the user navigates back or forward in the browser history
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    // popstate is triggered when user make the changes in URL with f/b buttons
    window.addEventListener("popstate", handler);

    // Clean up the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  // function to navigate to a new path
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
