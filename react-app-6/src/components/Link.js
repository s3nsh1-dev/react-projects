import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { currentPath, navigate } = useNavigation();

  // adding extra class only to option who's path is active
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    // check if metaKey in map and ctrlKey in windows is pressed or not
    // if yes then open the link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    //prevent from refreshing the page when anchor tag make the navigation
    event.preventDefault();

    //this navigate function make the URL change
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
