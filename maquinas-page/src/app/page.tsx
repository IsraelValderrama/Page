'use client'

import Image from "next/image";
import Link from "next/link";
import { Map } from "./Maps/Map";
import Cards from "./Cartas/page";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Apuntes Hacking Ético</h1>
      </header>
      <main>
        <Cards />
      </main>
      <footer>

        <Link href={"https://Github.com/IsraelValderrama"}>GitHub</Link>
      </footer>
    </div>
  );
}
