
'use client'
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from './page.module.css'

function index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user);
    return (
      <>
       <h1> Welcome {user.name}! <a href="/api/auth/logout">Logout</a> </h1>
        <br></br>
        Your nickname is {user.nickname}.
      </>
    );
  }
  return (
    <>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <span className={styles.title}>
            Discover 'Y' Where People, Passions, and Possibilities Meet.
          </span>
          <br />
          <a href="/api/auth/login" className={styles.join_button}>Join Now !</a>
        </div>
      </div>
    </>
  )
}

export default index;
