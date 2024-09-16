import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} cursor-pointer w-[100px] h-[60px] rounded-full bg-blue-gradient p-[2px] mr-[70px]`}
  >
    <div
      className={`${styles.flexCenter}
    flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          className="w-[23px] h-[23px] object-contain"
          alt="arrow"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
