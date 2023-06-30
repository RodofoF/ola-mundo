import React from 'react'
import Post from '../../componentes/PostCard'
import styles from './Inicio.module.css'
import posts from '../../json/posts.json'


export default function Inicio() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              < Post post={post}/>
            </li>
          )
        })}
      </ul>
  )
}
