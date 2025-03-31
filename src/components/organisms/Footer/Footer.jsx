import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>musimoOds ©{new Date().getFullYear()}</p>
      <a
        href="https://marugandev.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="main-footer-logo"
          src="/assets/LOGO.svg"
          alt="logo-marugandev"
        />
      </a>
    </footer>
  );
};

export default Footer;
