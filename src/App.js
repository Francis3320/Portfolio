import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/About/About';
import Skills from './components/experience/Skils';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
