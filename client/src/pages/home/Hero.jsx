import { useTransform, motion } from 'framer-motion';
import Header from '../../components/header/Header';
import './Hero.css';
import HeroButton from './HeroButton';


const Hero = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div style={{scale, rotate}} className="relative sticky top-0 hero-home h-screen">

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
        
    </motion.div>
  )
}

export default Hero