import React from 'react';
import TimeLine from './TimeLine';
import styles from './timeline.module.scss';

const data = [
    {
        year: 2007,
        label: 'Nokia',
        icon: '',
    },
];

function App() {
    return (
        <div className={styles.app}>
            <TimeLine startYear={2007} endYear={2022} data={data} />
        </div>
    );
}

export default App;
