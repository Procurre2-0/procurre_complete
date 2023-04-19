import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../images/payment/razorpay.webp" alt="" />
        <img src="../../../images/payment/" alt="" />
        <img src="../../../images/payment/mastercard.webp" alt="" />
        <img src="../../../images/payment/paypal.webp" alt="" />
      </div>
    </div>
  );
}
