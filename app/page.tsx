'use client'

import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import styles from './page.module.css';
import socketIO from 'socket.io-client';

const socket = socketIO('http://localhost:4000');

function index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      socket.emit("newUser", { username: user.nickname, socketId: socket.id });
      router.push('/chat');
    }
  }, [user, isLoading, router])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
