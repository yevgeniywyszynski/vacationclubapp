import React from "react";
import styles from './Header.module.scss';
import {HiChevronRight} from "react-icons/hi";

const Header = () => {
    return(
        <div className={styles.offertsWrapper}>
            <h4 className={styles.ofertTitle}>Oferty Specjalne</h4>
            <button type="button" className={styles.btnAll}>
            Wszystkie
            <HiChevronRight />
            </button>
        </div>
    )
}

export default Header;