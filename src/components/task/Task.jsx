import React from 'react'
import styles from './Task.module.css'

const Task = ({ index, _id, doneFunc, remove, title, done, }) => {
    return (
        <div className={styles.task}>
            <div className={`${styles.text} ${done ? styles.active : ""}`}>
                <p>{index + 1}.</p>
                <p>{title}</p>
            </div>
            <div className={styles.btns}>
                <div onClick={() => doneFunc(_id)} className={`${styles.btn} ${styles.done}`}>+</div>
                <div onClick={() => remove(_id)} className={`${styles.btn} ${styles.delete}`}>-</div>
            </div>
        </div>
    );
};
export default Task