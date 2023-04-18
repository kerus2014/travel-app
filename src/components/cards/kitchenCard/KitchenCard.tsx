import styles from "./KitchenCard.module.scss";

interface IKitchenCard {
  image: string;
  title: string;
  description: string;
}

const KitchenCard = (props: IKitchenCard) => {
  const { image, title, description } = props;
  return (
    <div className={styles.card}>
      <div className={styles["card__image-container"]}>
        <img src={image} alt={image} />
      </div>
      <div className={styles["card__info"]}>
        <div className={styles["card__info-wrapper"]}>
          <h3 className={styles["card__title"]}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default KitchenCard;