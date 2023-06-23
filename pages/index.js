import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Description from "../components/description";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "../components/home/main";
// import Try from "../components/home/try";
import FlashDeals from "../components/home/flashDeals";
import Categories from "../components/home/category";
import db from "../utils/db";
import {
  gamingSwiper,
  homeImprovSwiper,
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from "../data/home";
import { useMediaQuery } from "react-responsive";
import ProductsSwiper from "../components/productsSwiper";
import Product from "../models/Product";
import Category from "../models/Category";
import ProductCard from "../components/productCard";
import Testimonials from "../components/home/testimonial";

export default function Home({ country, products }) {
  console.log("products", products);
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <Description />
          <FlashDeals />
          <div className={styles.home__category}>
            <Categories categories={categories} />
          </div>
          <Testimonials />
          {/* <Try /> */}
          {/* <div className={styles.products}>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div> */}
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}
export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  let categories = await Category.find({}).sort({ updatedAt: -1 }).lean();
  let data = await axios
    .get("https://api.ipregistry.co/?key=r208izz0q0icseks")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
      country: {
        name: "India",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197551.png?w=360",
      },
    },
  };
}
