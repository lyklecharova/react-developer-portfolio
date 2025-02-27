import './index.css';
import HomePage from './components/homepage/HomePage';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
    return (
        <div className="container">
            <section id="#home">
                <HomePage />
            </section>

            <section id="#about">
                <About />
            </section>

            <section id="#skills">
                <Skills />
            </section>

            <section id="#projects">
                <Projects />
            </section>

            <section id="#contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
