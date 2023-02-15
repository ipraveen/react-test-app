import React from 'react';
import styles from './progress-step.module.scss';

function TimeLine({ data }) {

    return (
        <div className={styles.container}>
            <div className={styles.steps}>
                <div className={styles.containerProgressBackground}></div>
            </div>
        </div>
    );
}

export default TimeLine;
