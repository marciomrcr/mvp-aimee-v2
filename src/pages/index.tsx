import Image from "next/image";
import SideBar from "../components/SideBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <SideBar />
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Marcinho{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
