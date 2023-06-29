import React from 'react'
import styles from './Post.module.css'

export default function Post({post}) {
  return (
    <div className={styles.post} >
        <img 
            className={styles.capa}
            // src={`/assets/post/${post.id}/capa.png`} 
            src={`C:/Users/rdf_8/OneDrive/Documentos/Cursos/React/ola-mundo/public/assets/post/${post.id}/capa.png`} 
            alt="Imagem da capa do post" />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
    </div>
  )
}