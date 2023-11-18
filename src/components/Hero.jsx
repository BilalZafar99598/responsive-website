import styles from "../style";
import { discount, robot } from "../assets";
import girl from '../assets/girl.png'
// import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className='flex md:flex-row flex-col'>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
          </p>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[30px] text-[52px] text-white ss:leading-[30px] leading-[75px] w-full">
        Welcome to Our Literature Review Services!
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={girl} alt="billing" className="w-[60%] h-[90%] relative z-[5]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
