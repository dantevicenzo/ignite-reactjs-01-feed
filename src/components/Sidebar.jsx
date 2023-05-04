import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.userInfo}>
                <img 
                    className={styles.avatar} 
                    src='https://github.com/dantevicenzo.png' 
                />
                <strong>Dante Vicenzo</strong>
                <span>React Developer</span>
            </div>

            <footer>
                <button><PencilLine size={20} />Editar seu perfil</button>
            </footer>
        </aside>
    )
}