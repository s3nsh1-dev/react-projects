import useNavigation from "../hooks/use-navigation";

// path is changed by Link component, monitor that and change the screen content
function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
