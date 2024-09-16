import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our Deposito now!</h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ipsum, facilis atque numquam eligendi voluptatibus dignissimos, reiciendis vero eaque iure voluptate, sunt amet harum eos quidem cumque ratione nihil excepturi!</p>
    </div>

      
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA