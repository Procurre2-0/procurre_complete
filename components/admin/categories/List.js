import ListItem from "./ListItem";
import styles from "./styles.module.scss";

export default function List({ categories, setCategories }) {
  console.log("vategotr", categories);
  return (
    
    <ul className={styles.list}>
     
      {categories.map((category) => (
        <ListItem
          category={category}
          key={category._id}
          setCategories={setCategories}
        />
      ))}
    </ul>
  );
}
