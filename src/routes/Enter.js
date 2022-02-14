import { useState, useEffect } from "react";
import styles from "./Enter.module.css";
import { Link } from "react-router-dom";

function Enter() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>MOVIEFLEX</p>
        </div>
        <div className={styles.article}>
          <div className={styles.square}>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.text}>
              <p>로맨스 (Romance)</p>
            </div>
          </div>

          <div className={styles.square}>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.text}>
              <p>　스릴러　 (Thriller)</p>
            </div>
          </div>

          <div className={styles.square}>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.text}>
              <p>애니메이션 (Animation)</p>
            </div>
          </div>
        </div>
        <div className={styles.allMovie}>
          <Link to={"/AllMovie"}>전체영화보기</Link>
        </div>
      </div>
    </div>
  );
}

export default Enter;
