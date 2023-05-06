import React, { useContext } from 'react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar({userLoggedIn}){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={userLoggedIn.coverUrl}
            />

            <div className={styles.userInfo}>
                <Avatar avatarUrl={userLoggedIn.avatarUrl} hasBorder />
                <strong>{userLoggedIn.name}</strong>
                <span>{userLoggedIn.jobTitle}</span>
            </div>

            <footer>
                <button><PencilLine size={20} />Editar seu perfil</button>
            </footer>
        </aside>
    )
}