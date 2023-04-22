import Link from "next/link";
import styles from "./styles.module.scss";
export default function CategorySwiper({ category }) {
  console.log("cc",category);
  var imageLink = JSON.parse(category.image[0])

  console.log("sss",imageLink);
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Link href={`/browse?category=${category._id}`} >
          <img src={imageLink[0].url} alt="" />
        </Link>
        <div className={styles.flash}>
          <span>{category.name}</span>
        </div>
      </div>
    </div>
  );
}
