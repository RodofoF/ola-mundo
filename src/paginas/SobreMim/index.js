import React from 'react'
import PostModelo from '../../componentes/PostModelo'
import fotoSobreMim from '../../assets/sobre_mim_foto.png'
import fotoCapa from '../../assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo={`Sobre mim`}
    >
      <h3 className={styles.subtitulo}>
        Olá sou Rod
      </h3>
      <img src={fotoSobreMim} alt="Minha foto" className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}> Isso é um teste</p>
    </PostModelo>
  )
}
