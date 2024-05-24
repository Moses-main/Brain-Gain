const Header = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Default Groceries",
};

export default Header;
