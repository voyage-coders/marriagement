import Header from '../../components/header/Header';
import './Hero.css';
import HeroButton from './HeroButton';

const Hero = () => {
  return (
    <div className="hero-home">
        <Header/>
        <div className='home'>
            <div className='modal'>
                <p className='hero-text'>GET THE BEST SERVICES 
FOR YOUR WEDDING
UAE DESTINATION WEDDING A to Z 
PLANNING AND EXECUTION</p>
                <HeroButton/>
            </div>
            

        </div>
        
    </div>
  )
}

export default Hero