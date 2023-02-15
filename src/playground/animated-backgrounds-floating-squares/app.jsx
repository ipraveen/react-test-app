import React from 'react';
import styles from './style.module.scss';

function app() {
    return (
        <div className={styles.animationContainer}>
            <h1>Welcome!</h1>

            <div className={styles.animationArea}>
                <ul>
                    <li style={{ left: '10%', width: '50px', height: '50px', animationDelay: '0s' }}></li>
                    <li style={{ left: '20%', width: '90px', height: '90px', animationDelay: '1s' }}></li>
                    <li style={{ left: '25%', width: '75px', height: '75px', animationDelay: '2s' }}></li>
                    <li style={{ left: '40%', width: '60px', height: '60px', animationDelay: '2.5s' }}></li>
                    <li style={{ left: '66%', width: '80px', height: '80px', animationDelay: '3s' }}></li>
                    <li style={{ left: '70%', width: '50px', height: '50px', animationDelay: '4s' }}></li>
                    <li style={{ left: '80%', width: '100px', height: '100px', animationDelay: '5s' }}></li>
                   
                </ul>
            </div>
        </div>
    );
}

export default app;
