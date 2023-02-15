import React, { useLayoutEffect, useState } from 'react';
import qbCardImage from './assets/qb-card.png';
import qbMobileImage from './assets/qb-mobile.png';
import styles from './style.module.scss';

function CardAnimation(props) {
    const [animate, setAnimate] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => setAnimate(true), 1000);
    }, []);

    return (
        <div className={styles.container}>
            <div className={`${styles.imageContainer} ${animate ? styles.animate : ''}`}>
                <img className={styles.mobileImage} src={qbMobileImage} alt="" srcset="" />
                <img className={styles.cardImage} src={qbCardImage} alt="" srcset="" />
            </div>
        </div>
    );
}

export default CardAnimation;
