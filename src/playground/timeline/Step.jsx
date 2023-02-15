import React from 'react';
import styles from './progress-step.module.scss';

function Step({ value, active = false }) {
    return <div className={`${styles.step} ${active ? styles.active : ''}`}>{value}</div>;
}

export default Step;
