import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus repudiandae dolore itaque eum, incidunt eaque? Aperiam quam sed atque repellat molestiae reprehenderit quibusdam, esse dolores mollitia minus facere praesentium adipisci!</p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
   
  </section>
)
export default CardDeal