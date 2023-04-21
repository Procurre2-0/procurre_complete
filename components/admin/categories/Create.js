import { Form, Formik } from "formik";
import { useState } from "react";
import styles from "./styles.module.scss";
import * as Yup from "yup";
import AdminInput from "../../inputs/adminInput";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "./image";
import { uploadImages } from "../../../requests/upload";
import dataURItoBlob from "../../../utils/dataURItoBlob";
export default function Create({ setCategories }) {
  const [name, setName] = useState("");
  const [imagelink, setimagelink] = useState([]);
  const validate = Yup.object({
    name: Yup.string()
      .required("Category name is required.")
      .min(2, "Category name must be bewteen 2 and 30 characters.")
      .max(30, "Category name must be bewteen 2 and 30 characters."),
    imagelink: Yup.string()
      .required("Category img is required.")
      .min(2, "Category img must be bewteen 2 and 30 characters."),

    /*.matches(
        /^[a-zA-Z\s]*$/,
        "Numbers and special charcters are not allowed."
      ) */
  });
  var uploaded_image = [];
  const createProductHandler = async () => {
    if (imagelink) {
      let temp = imagelink.map((img) => {
        return dataURItoBlob(img);
      });
      const path = "product images";
      let formData = new FormData();
      formData.append("path", path);
      temp.forEach((imagelink) => {
        formData.append("file", imagelink);
      });
      uploaded_image = await uploadImages(formData);
      console.log("uploaded_image", uploaded_image);
    } else {
      alert("xxxxxx");
    }
  };
  const submitHandler = async () => {
    // alert("asdf");
    try {
      if (imagelink) {
        let temp = imagelink.map((img) => {
          return dataURItoBlob(img);
        });
        const path = "product images";
        let formData = new FormData();
        formData.append("path", path);
        temp.forEach((imagelink) => {
          formData.append("file", imagelink);
        });
        uploaded_image = await uploadImages(formData);
        console.log("uploaded_image", uploaded_image);
      }
      console.log("zzzzzzzzzzzzzzz", uploaded_image);
      const { data } = await axios.post("/api/admin/category", {
        name,
        image: uploaded_image,
      });
      setCategories(data.categories);
      setName("");
      setimagelink([]);

      // toast.success(data.message);
    } catch (error) {
      console.log("xxxxxxxxxxxxxxxxxxxxx", error);
      // toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ imagelink, name }}
        validationSchema={validate}
        onSubmit={() => {
          submitHandler();
        }}
      >
        {(formik) => (
          <Form>
            <div className={styles.header}>Create a Category</div>

            <AdminInput
              type="text"
              label="Name"
              name="name"
              placholder="Category name"
              onChange={(e) => setName(e.target.value)}
            />
            <Image
              name="imageInputFile"
              header="Product Carousel Images"
              text="Add image"
              image={imagelink}
              setImage={setimagelink}
            />

            <div className={styles.btnWrap}>
              <button
                type="submit"
                className={`${styles.btn} `}
                onClick={submitHandler}
              >
                <span>Add Category</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
