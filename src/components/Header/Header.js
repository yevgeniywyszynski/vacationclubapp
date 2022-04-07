import React from "react";
import styles from './Header.module.scss';
import {HiChevronRight} from "react-icons/hi";


export default class Header extends React.Component {
    render() {
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
}