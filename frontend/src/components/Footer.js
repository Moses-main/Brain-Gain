const Footer = () => {
  const date = new Date();

  return (
    <div style={{ color: "white" }}>
      <p>Copyright &copy;{date.getFullYear()}</p>
    </div>
  );
};

export default Footer;
