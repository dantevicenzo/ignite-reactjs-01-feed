import React, { createContext, useContext } from 'react';
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {

  const userLoggedIn = {
    name: "Dante Vicenzo",
    avatarUrl: "https://github.com/dantevicenzo.png",
    jobTitle: "React Developer",
    coverUrl: "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
  }
  
  const defaultComments = [
    {
      id: 1,
      commentAuthor: {
          name: "Chris Jatta", 
          avatarUrl: "https://xsgames.co/randomusers/assets/avatars/male/0.jpg",
      },
      createdAt: new Date('05-05-2023 18:00:00'),
      content: "Muito bom Dante, parabéns!! 👏👏",
      applauseCount: 3
    },
    {
      id: 2,
      commentAuthor: {
          name: "Jed Alic", 
          avatarUrl: "https://xsgames.co/randomusers/assets/avatars/male/65.jpg",
      },
      createdAt: new Date('05-05-2023 23:00:00'),
      content: "Adorei seu novo portifólio Dante!",
      applauseCount: 33
    },
    {
      id: 3,
      commentAuthor: {
          name: "Zack Verkamp", 
          avatarUrl: "https://xsgames.co/randomusers/assets/avatars/male/76.jpg",
      },
      createdAt: new Date('06-04-2023 18:00:00'),
      content: "💜💜",
      applauseCount: 9
    },
  ]

  const posts = [
    {
      id: 1,
      author: {
        name: 'Dante Vicenzo',
        jobTitle: 'React Developer',
        avatarUrl: 'https://github.com/dantevicenzo.png'
      },
      content: `Fala galeraa 👋

Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      
👉 dante.design/doctorcare
      
#novoprojeto #nlw #rocketseat`,
      createdAt: new Date('2021-01-01 00:12:00'),
      comments: []
    },
    {
      id: 2,
      author: {
        name: 'Dante Vicenzo',
        jobTitle: 'React Developer',
        avatarUrl: 'https://github.com/dantevicenzo.png'
      },
      content: `Fala pessoal 👋

Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 
      
Acesse e deixe seu feedback 👉 dantevicenzo.design
      
#uiux #userexperience`,
      createdAt: new Date('2021-01-01 00:00:00'),
      comments: defaultComments
    }
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar userLoggedIn={userLoggedIn} />

        <main>
          {posts.map(post => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content} 
              createdAt={post.createdAt} 
              comments={post.comments}
              userLoggedIn={userLoggedIn}
            />
          ))}
        </main>
        
      </div>
    </div>
  )
}

export default App
