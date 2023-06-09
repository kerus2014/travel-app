import { PriceIcon } from "../../../assets/icons/Price";
import { TimeIcon } from "../../../assets/icons/Time";
import { IKitchenCard } from "../../../types";
import { FlagItem } from "../../FlagItem";
import styles from "./LittleMealTimeCard.module.scss";

interface IProps {
  title?: string;
  time?: string;
  price?: string;
}

export const LittleMealTimeCard = (props: IProps) => {
  const { time = "9:00", title = "Завтрак", price = 15 } = props;
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div>
        <div className={styles.time}>
          <div>
            <TimeIcon />
          </div>
          <p>{time}</p>
        </div>
        <div className={styles.price}>
          <div>
            <PriceIcon/>
          </div>
          <p>{price} <span>BYN</span></p>
        </div>
      </div>
      
    </div>
  );
};
