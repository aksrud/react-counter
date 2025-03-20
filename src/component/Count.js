import { useState } from "react";
import styles from "../styles/Count.module.css";

export default function Count() {
    let [count, setCount] = useState(0);
    return (
        <div className={styles.counter}>
            <div className={styles.count}>
                <h1>{count}</h1>
            </div>
            <div className={styles.count_btn}>
                <div className={styles.increse} onClick={()=>setCount(count+1)}>
                    증가
                </div>
                <div className={styles.decrese} onClick={()=>setCount(count-1)}>
                    감소
                </div>
            </div>
        </div>
    );
}