import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <a
        href="https://gsap.com"
        className="icon"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="greensock-icon"
          src="../images/logos/nml-rhodamine-large.svg"
          width="150"
          alt=""
        />

        <img
          className="greensock-icon"
          src="../images/logos/pwc_logo2x.png"
          width="80"
          alt=""
        />
      </a>

      
      <ul>
        <li>
          <Link to="/">Boxes</Link>
        </li>
        <li>
          <Link to="/custom">Custom</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
      </ul>
    </header>
  );
}
