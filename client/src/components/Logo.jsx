//import logo from "../assets/images/r.svg";
import logo from "../assets/images/untitled.svg";
function Logo() {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  //console.log(isDarkTheme);

  return (
    <img
      src={logo}
      alt="r-pharmacy"
      className={isDarkTheme ? "logo logo--nav dark-image" : "logo logo--nav"}
    />
  );
}

export default Logo;
