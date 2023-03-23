import styles from "./styles.module.scss";
import { Rating } from "@mui/material";
import Card from "@mui/material/Card";
export default function ReviewCard() {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__card}>
        <Card
          sx={{ minWidth: 250 }}
          style={{ boxShadow: "none", border: "none" }}
        >
          <div className={styles.reviews__card_single}>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              style={{ color: "green" }}
            />
            <p>Excellent</p>

            <h3>Nice product very useful </h3>
            {/* take caution and slice this */}
            <h4>name of </h4>
          </div>
        </Card>
      </div>
    </div>
  );
}
