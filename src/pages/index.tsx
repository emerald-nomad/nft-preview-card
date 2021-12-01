import type { NextPage } from "next";
import Image from "next/image";
import styles from "styles/Home.module.scss";
import equilibriumImage from "images/image-equilibrium.jpg";
import clockIcon from "images/icon-clock.svg";
import ethIcon from "images/icon-ethereum.svg";
import viewIcon from "images/icon-view.svg";
import avatar from "images/image-avatar.png";

const Home: NextPage = () => {
  return (
    <main className={styles["container"]}>
      <section className={styles["card"]}>
        <div className={styles["card__image-container"]}>
          <Image src={equilibriumImage} layout="responsive" />
          <div className={styles["card__image-overlay"]}></div>
          <div className={styles["card__view-icon"]}>
            <Image src={viewIcon} />
          </div>
        </div>
        <h1 className={styles["card__title"]}>Equilibrium #3429</h1>
        <p className={styles["card__desc"]}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <section className={styles["card__info"]}>
          <span className={styles["card__value"]}>
            <Image src={ethIcon} layout="fixed" />
            &nbsp;.041 ETH
          </span>

          <span className={styles["card__time"]}>
            <Image src={clockIcon} layout="fixed" /> &nbsp; 3 days left
          </span>

          <div className={styles["card__divider"]} />

          <div className={styles["card__contact"]}>
            <div className={styles["card__contact-image"]}>
              <Image src={avatar} layout="responsive" />
            </div>
            Creation of &nbsp;
            <span className={styles["card__contact-name"]}>Jules Wyvern</span>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
