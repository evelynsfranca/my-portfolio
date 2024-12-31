import styles from "./index.module.css";

export default function AboutHistory() {
  return (
    <article id="history" className={styles.content}>

      <header>
        <h2>Sobre mim</h2>
      </header>

      <div className={styles.text}>
        <p>
          Atualmente, atuo como arquiteta de software no Grupo Marista, onde utilizo tecnologias de ponta, como Microsoft Azure, Java, Spring Boot e Kubernetes, para projetar soluções robustas e escaláveis no ambiente de cloud.
        </p>
        <p>
          Minha trajetória inclui experiência como desenvolvedora web, desenvolvendo APIs e páginas web com ferramentas como Java, Spring Framework, ReactJS, TypeScript, e bancos de dados como MySQL, Oracle DB e Microsoft SQL Server. Além disso, possuo conhecimentos em JUnit, AWS e práticas de desenvolvimento orientadas a performance e qualidade.
        </p>
        <p>
          Sou formada em Análise e Desenvolvimento de Sistemas pela PUC-PR e movida pela paixão por tecnologia, inovação e aprendizado contínuo. Adoro enfrentar novos desafios e me empenho constantemente para evoluir e entregar soluções de alta qualidade, com foco em resultados e impacto positivo.
        </p>
      </div>

    </article>
  );
}
