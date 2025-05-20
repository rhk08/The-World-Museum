import { Link } from 'react-router';
import '../styles/footer.css';

export default function footer() {
    return (
        <footer>


            <a
                href="https://www.pwc.com.au/"
                className="icon"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="PwC-Icon image"
                    src="../images/logos/PwC-logo.svg"
                    width="65"
                    alt=""
                />
            </a>

            <a
                href="https://www.liverpoolmuseums.org.uk/world-museum"
                className="icon"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="The-World-Museum-Icon image"
                    src="../images/logos/nml-rhodamine-large.svg"
                    width="110"
                    alt=""
                />
            </a>

        </footer>
    );
}
