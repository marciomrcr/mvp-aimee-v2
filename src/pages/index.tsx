import { Card } from "@mui/material";
import Image from "next/image";
import SideNavbar from "../components/SideBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" ">
      {/* mobile menu bar */}
      <SideNavbar />
      <div className="flex items-center justify-center">
        <Card className="bg-green-200" />
      </div>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Marcinho{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
