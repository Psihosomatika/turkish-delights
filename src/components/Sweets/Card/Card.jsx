import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ item }) => {
  const formatedPrice = item.price.toFixed(2);
  return (
    <li className={styles.card}>
      <img src={item.img} alt="сладости" className={styles.img} />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.text}>{`$${formatedPrice}`}</p>
      </div>
      <form className={styles.form}>
        <p htmlFor={item.id} className={styles.text}>
          количество
        </p>
        <div className={styles.bottom}>
          <button className={styles.button} type="button"></button>
          <label className={styles.label}>
            0
            <input
              type="number"
              className={styles.input}
              min="0"
              max="100"
              id={item.id}
            />
          </label>

          <button type="button" className={styles.button}></button>
        </div>
      </form>
    </li>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
