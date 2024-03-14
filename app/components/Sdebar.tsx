import React from "react";
import styles from "./styles.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.side__navbar}>
      <div className={styles.navbar__logo}>
        <h1>Y</h1>
      </div>
      <div className={styles.navbar__items}>
        <ul className={styles.navbar__menu1}>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="home"></i>
              <span>Discover</span>
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="message-square"></i>
              <span>Chat</span>
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="users"></i>
              <span>Streaming</span>
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="folder"></i>
              <span>Playlist</span>
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="archive"></i>
              <span>Bookmark</span>
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="help-circle"></i>
              <span>Help</span>
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="settings"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.navbar__setting}>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="log-out"></i>
              <span>Darkmode</span>
            </a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#" className={styles.navbar__link}>
              <i data-feather="log-out"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
