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
                    className="PwC-Icon"
                    src="../images/logos/PwC-logo.svg"
                    width="70"
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
                    className="The-World-Museum-Icon"
                    src="../images/logos/nml-rhodamine-large.svg"
                    width="120"
                    alt=""
                />
            </a>

        </footer>
    );
}
