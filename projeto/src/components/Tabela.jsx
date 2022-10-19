import styles from "../../styles/tabela.module.css"

export default function Tabela({ precoI, precoF }) {
    return (
        <div className={styles.preco}>
            <h1>{precoI}:{precoF}</h1>
        </div>
    )
}