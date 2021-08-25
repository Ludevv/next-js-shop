import * as React from 'react';
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

const Footer: React.FC = () => {
    return ( 
        <footer className={styles.footer}>
            <span>Created by</span>
                <Image src="/logoLudew.png" alt="Ludevv Logo" width={90} height={37} />
        </footer>
     );
}
 
export default Footer;