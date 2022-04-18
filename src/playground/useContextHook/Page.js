import React, { useContext } from 'react';
import { Context } from './Context';
import styles from './style.module.scss';

function Page({ setTheme }) {
    const { theme } = useContext(Context);
    return (
        <div className={styles.page} style={{ background: theme.background, color: theme.foreground }}>
            <section>
                <button onClick={() => setTheme('light')}>Light</button>{' '}
                <button onClick={() => setTheme('dark')}>Dark</button>
            </section>
            <h2>Styled by theme context!</h2>
        </div>
    );
}

export default Page;
