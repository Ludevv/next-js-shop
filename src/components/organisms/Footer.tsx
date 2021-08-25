import * as React from 'react';
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

const Footer: React.FC = () => {
    return ( 
        <footer className={styles.footer}>
            Powered by{" "}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Ludevv Logo" width={72} height={16} />
            </span>
        </footer>
     );
}
 
export default Footer;