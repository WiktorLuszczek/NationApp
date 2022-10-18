/* eslint-disable no-undef */
export const Nav = ({
  setTheme,
  theme,
}: {
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  theme: "light" | "dark";
}) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeButton = () => {
    if (theme === "dark") {
      return (
        <>
          <i className="fa-regular fa-sun"></i>
          <p>Light mood</p>
        </>
      );
    } else {
      return (
        <>
          <i className="fa-regular fa-moon"></i>
          <p>Dark mood</p>
        </>
      );
    }
  };

  return (
    <nav>
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme} className="theme-button">
        {themeButton()}
      </button>
    </nav>
  );
};
