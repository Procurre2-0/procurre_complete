import { ErrorMessage, useField } from "formik";
import { useRef } from "react";
import { FaStaylinked } from "react-icons/fa";
import { RiDeleteBin7Fill, RiShape2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showDialog } from "../../../../store/DialogSlice";
import styles from "./styles.module.scss";
import { GiExtractionOrb } from "react-icons/gi";
export default function Image({
  image,
  setImage,
  header,
  text,
  name,
  ...props
}) {
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [meta, field] = useField(props);
  const handleImages = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img, i) => {
      if (image.length == 1) {
        dispatch(
          showDialog({
            header: "Maximum 1 image is allowed.",
            msgs: [
              {
                msg: `Maximum of 1 imageis allowed.`,
                type: "error",
              },
            ],
          })
        );
        return;
      }
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp"
      ) {
        dispatch(
          showDialog({
            header: "Unsopported Format.",
            msgs: [
              {
                msg: `${img.name} format is unsupported ! only JPEG,PNG,WEBP are allowed.`,
                type: "error",
              },
            ],
          })
        );
        files = files.filter((item) => item !== img.name);
        return;
      } else if (img.size > 1024 * 1024 * 10) {
        dispatch(
          showDialog({
            header: "Unsopported Format.",
            msgs: [
              {
                msg: `${img.name} size is too large, maximum of 10mb allowed.`,
                type: "error",
              },
            ],
          })
        );
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          setImage((image) => [...image, e.target.result]);
        };
      }
    });
  };
  const handleRemove = (image) => {
    setImage((image) => image.filter((item) => item !== image));
  };
  return (
    <div className={styles.image}>
      <div
        className={`${styles.header} ${meta.error ? styles.header__error : ""}`}
      >
        <div className={styles.flex}>
          {meta.error && <img src="../../../image/warning.png" alt="" />}
          {header}
        </div>
        <span>
          {meta.touched && meta.error && (
            <div className={styles.error__msg}>
              <span></span>
              <ErrorMessage name={name} />
            </div>
          )}
        </span>
      </div>
      <input
        type="file"
        name={name}
        ref={fileInput}
        hidden
        multiple
        accept="image/jpeg,image/png,image/webp"
        onChange={handleImages}
      />
      <div className={styles.image__main}>
        <div
          className={`${styles.image__main_grid} ${
            image.length == 2
              ? styles.grid__two
              : image.length == 3
              ? styles.grid__three
              : image.length == 4
              ? styles.grid__foor
              : image.length == 5
              ? styles.grid__five
              : image.length == 6
              ? styles.grid__six
              : ""
          }`}
        >
          {!image.length ? (
            <img src="../../../image/no_image.png" alt="" />
          ) : (
            image.map((img, i) => (
              <div className={styles.image__main_grid_wrap} key={i}>
                <div className={styles.blur}></div>
                <img src={img} alt="" />
                <div className={styles.image__main_grid_actions}>
                  <button onClick={() => handleRemove(img)}>
                    <RiDeleteBin7Fill />
                  </button>
                  <button onClick={() => setColorImage(img)}>
                    <GiExtractionOrb />
                  </button>
                  <button>
                    <RiShape2Line />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <button
        type="reset"
        disabled={image.length == 1}
        style={{ opacity: `${image.length == 1 && "0.5"}` }}
        onClick={() => fileInput.current.click()}
        className={`${styles.btn} ${styles.btn__primary}`}
      >
        {text}
      </button>
    </div>
  );
}
