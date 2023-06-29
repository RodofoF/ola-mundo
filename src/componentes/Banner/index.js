import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import rodolfo from '../../assets/rodolfo.jpg'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
                Olá bem vindo ao espaço compatilhado
            </p>
        </div> 
        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                alt='Foto de um circulo colorido'
            />
                 <img 
                className={styles.minhaFoto}
                src={rodolfo}
                aria-hidden={true}
                alt='Foto do Rodolfo'
            />
        </div> 
    </div>
  )
}
