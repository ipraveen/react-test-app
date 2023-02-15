import React, { useState } from 'react';
import ProgressSteps from './ProgressSteps';
import Step from './Step';
import styles from './progress-step.module.scss';

function App() {
    const [step, setStep] = useState(0);
    return (
        <div className={styles.app}>
            <ProgressSteps step={step}>
                <Step value={1}></Step>
                <Step value={2}></Step>
                <Step value={3}></Step>
                <Step value={4}></Step>
                <Step value={5}></Step>
            </ProgressSteps>

            <div className={styles.controls}>
                <button onClick={() => setStep((s) => s - 1)}>Prev</button>
                <button onClick={() => setStep((s) => s + 1)}>Next</button>
            </div>
        </div>
    );
}

export default App;
