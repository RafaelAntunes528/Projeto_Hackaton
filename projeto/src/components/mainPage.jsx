import { resolveHref } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import { startTransition, useEffect, useState } from "react";
import styles from "../../styles/MainPage.module.css";
import { fazPedido } from "../utils/rest";
import Cartoes from "./cartoes";
import { MyResponsivePie } from "./graficoPie";

/* const res = [
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },] */

export default function HomePage() {
  //dentro de um useEffect
  // let resposta = fazPedido("/api/", "GET")

  const getRes = async () => {
    let resposta = await fazPedido("/api/", "GET");
    setState(resposta.body);
  };

  useEffect(() => {
    getRes();
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [state, setState] = useState(Array);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    state.filter((e) => {
      return e.distrito.match(searchInput);
    });
  }

  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.logo}></div>
        <div className={styles.graph}>
          <MyResponsivePie
            data={[
              {
                id: "Pago",
                label: "Pago",
                value: 2500,
                color: "hsl(201, 100%, 61%)",
              },
              {
                id: "Não Pago",
                label: "Npago",
                value: 1000,
                color: "hsl(249, 68%, 52%)",
              },
            ]}
          />
        </div>
        <div className={styles.logout}>
          <button onClick={() => router.push("./login")}>Logout</button>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
          className={styles.searchInput}
        />
        <button onClick={() => router.push("./addConduminio")}>
          Adicionar novo
        </button>
      </div>

      <div className={styles.conduminios}>
        {state.map((r) => (
          <Cartoes
          {...r}
            // nome={r.nome}
            // distrito={r.distrito}
            // total={r.total}
            // data={r.data}
            // cor={r.cor}
          />
        ))}
      </div>
    </div>
  );
}
