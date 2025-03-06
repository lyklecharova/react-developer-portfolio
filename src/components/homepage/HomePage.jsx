import './HomePage.module.css';
import Speech from './Speech';

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="hSection left">
                <h1 className="hTitle">
                    Hey, There, <br />
                    <span>I am Lily!</span>
                </h1>
            </div>
            <div className="hSection right">
                {/* FOLLOW */}
                <div className="follow">
                    <a
                        href="https://github.com/lyklecharova"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={`/icons8-github-48.png`} alt="GitHub" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lilyana-klecharova-183311227/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={`/icons8-linkedin-48.png`} alt="LinkedIn" />
                    </a>
                </div>
                {/* BUBBLE */}
                <Speech />
                {/* CONTACT BUTTON */}
                <a href="/#contact" className="contactLink">
                    <div className="contactButton">
                        <svg viewBox="0 0 200 200" width="150" height="150">
                            <circle cx="100" cy="100" r="90" fill="pink" />
                            <path
                                id="innerCirclePath"
                                fill="none"
                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                            <text className="circleText">
                                <textPath href="#innerCirclePath">
                                    Hire Now •
                                </textPath>
                            </text>
                            <text className="circleText">
                                <textPath
                                    href="#innerCirclePath"
                                    startOffset="44%"
                                >
                                    Contact Me •
                                </textPath>
                            </text>
                        </svg>
                        <div className="arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="50"
                                height="50"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                            >
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default HomePage;
