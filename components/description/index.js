import styles from "./styles.module.scss";
import Link from "next/link";

export default function Description() {
  return (
    <div className={styles.desc}>
      <h1>Discover products suited to your needs.</h1>
      <p>
        Are you looking for a specific item? We got you covered with over 300
        solutions to cater to every industry.
      </p>
      <Link href="/browse">
        <button>Go to Store</button>
      </Link>
    </div>
  );
}
