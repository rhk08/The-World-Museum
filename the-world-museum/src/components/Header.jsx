import { Link } from 'react-router';
import '../styles/header.css';

export default function Header() {
  return (
    <header>
      <div className='text-logo'>      <a
        href="https://www.adelaide.edu.au/learning/ua/media/2923/pwc-australia-client-briefing-pack-the-world-museum-002.pdf"
        className="icon font-inria-serif-bold font-size-64 black invert"
        target="_blank"
        rel="noreferrer"
      >
        UofA.  
      </a><a href="https://www.adelaide.edu.au/learning/ua/media/2923/pwc-australia-client-briefing-pack-the-world-museum-002.pdf" className='subtext font-size-12 font-instrument-sans black invert'>Student proprosal</a></div>

     

      
      <ul className='font-instrument-sans font-size-20 invert'>
        <li>
          <Link to="/"><p className='hover-underline-animation left invert'>PROBLEM.</p></Link>
        </li>
        <li>
          <Link to="/solutionpage" style={{ paddingRight: '0.5rem' }}><p  className='hover-underline-animation left invert'>SOLUTION.</p></Link>
        </li>
        <li>
          <Link to="/timelinepage"><p className='hover-underline-animation left invert'>TIMELINE.</p></Link>
        </li>
      </ul>
    </header>
  );
}
