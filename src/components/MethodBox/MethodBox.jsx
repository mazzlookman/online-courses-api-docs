// src/components/MethodBox.js
import React from 'react';
import clsx from 'clsx';
import styles from './MethodBox.module.css'

const MethodBox = ({ method, endpoint, methodColor }) => (
    <div className={clsx(styles.methodBox)}>
        <div
            className={styles.method}
            style={{ backgroundColor: methodColor }}
        >
            {method}
        </div>
        <div className={styles.endpoint}>
            {endpoint}
        </div>
    </div>
);

export default MethodBox;
