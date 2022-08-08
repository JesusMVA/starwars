import './App.css';
import CarouselFadeExample from './components/SliderApp.js'
import NavScrollExample from './components/NavbarApp.js' 
import Text from './components/Text.js' 
import FooterApp from './components/FooterApp.js'
import CardsApp from './components/CadsApp.js'


function Home() {
  return (
    <div className="Home">
    <NavScrollExample/>
    <CarouselFadeExample/>
    <Text/>
    <CardsApp/>
    <FooterApp/>
    </div>
  );
}

export default Home;