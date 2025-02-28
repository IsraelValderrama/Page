'use client'
import Link from "next/link";
import { Map } from "../Maps/Map";
import Image from 'next/image';
import { useState } from "react";
import styles from "./Cards.module.css";
export default function Cards() {
    const [idMostrado, setIdMostrado] = useState<number | null>(null);

    const mostrarContenido = (id: number) => {
        setIdMostrado(prevId => (prevId === id ? null : id));
    };

    return (
        <div className={styles.container}>
            {Map.map((maquina: any) => (
                <div key={maquina.id} className={styles.card}>

                    <Image
                        src={maquina.logo.startsWith('/') ? maquina.logo : '/default-image.png'}
                        alt={maquina.name}
                        width={100}
                        height={100}
                    />
                    <h1 onClick={() => mostrarContenido(maquina.id)}>{maquina.name}</h1>
                    <div>
                        {idMostrado === maquina.id ? <Link href={maquina.contenido} className={styles.link}>Ver más</Link> : null}
                    </div>
                </div>
            ))}
        </div>
    );
}
