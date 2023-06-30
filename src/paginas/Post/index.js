import { useParams } from 'react-router-dom'
import posts from '../../json/posts.json'
import PostModelo from '../../componentes/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'
import NaoEncontrado from '../../componentes/NaoEncontrado'

export default function Post() {
    const parametros = useParams()

// o metodo find encontra a primeira informação que for verdadeira e retorna ela
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })
    if(!post){
        return <NaoEncontrado />
    }
    
  return (
    <PostModelo 
        fotoCapa={`posts/${post.id}/capa.png`}
        titulo={post.titulo}
    >
        <div className='post-markdown-container'>
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
        </div>
    </PostModelo>
  )
}
