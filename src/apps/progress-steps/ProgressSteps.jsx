import React from 'react';
import styles from './progress-step.module.scss';

function ProgressSteps({ children, step }) {
    const childCount = React.Children.count(children);
    let activeStep;
    if (step >= childCount) {
        activeStep = childCount;
    } else if (step <= 0) {
        activeStep = 0;
    } else {
        activeStep = step;
    }

    const progress = (activeStep / (childCount - 1)) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.steps}>
                <div className={styles.containerProgressBackground}></div>
                <div style={{ width: `${progress}%` }} className={styles.containerProgress}></div>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { active: index <= activeStep });
                })}
            </div>
        </div>
    );
}

export default ProgressSteps;
