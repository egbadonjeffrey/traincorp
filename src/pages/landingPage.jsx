import { Link } from "react-router-dom";
import TrainCorpLogo from "../images/trainImage.png";

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.LogoImageContainer}>
        <img
          src={TrainCorpLogo}
          alt="Train Corp Logo"
          className={styles.LogoImage}
        />
      </div>
      <h1 className={styles.LogoName}>TrainCorp</h1>

      <div className={styles.buttonContainer}>
        <Link to="/home">
          <button type="button" className={styles.button}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
        flex
        flex-col
        bg-primary
        h-[100vh]
    `,

  LogoImageContainer: `
        flex
        h-[50%]
        mt-[10rem]
        justify-center
        items-center
  `,

  LogoImage: `
    
  `,

  LogoName: `
    uppercase
    text-6xl
    font-bold
    text-white
    text-center
  `,

  buttonContainer: `
    flex
    justify-center
    items-end
    h-[100%]
    w-[100%]
    my-[5rem]
  `,

  button: `
    bg-white
    px-[4rem]
    py-[1rem]
    uppercase
    text-[#39B400]
    font-bold
    rounded
    w-[100%]
  `,
};

export default LandingPage;
