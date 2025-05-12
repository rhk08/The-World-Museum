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
          src="https://gsap.com/_img/codepen/gsap-white.svg"
          width="100"
          alt=""
        />
      </a>

      
      <ul>
        <li>
          <Link to="/">Boxes</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
      </ul>
    </header>
  );
}
