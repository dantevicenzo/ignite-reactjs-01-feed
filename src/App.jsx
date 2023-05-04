import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post 
            author="Dante Vicenzo" 
            job="React Developer"
            content={`Fala galeraa 👋

Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`}
          />
          <Post 
            author="Dante Vicenzo" 
            content="Lorem ipsum dolor sit amet, consectetur adipis occ tempor inv"
          />
          <Post 
            author="Dante Vicenzo" 
            content="Lorem ipsum dolor sit amet, consectetur adipis occ tempor inv"
          />
        </main>
        
      </div>
    </div>
  )
}

export default App
