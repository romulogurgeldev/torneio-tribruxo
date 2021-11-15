import "./style.css";
import imagemHarry from "../../assets/img/harrypotter.png";

function PaginaInicial({ setAtual, students, sortearCalice }) {
  setAtual(
    Math.floor(
      Math.random() * (Math.ceil(students.length - 1) - Math.floor(0) + 1)
    ) + Math.floor(0)
  );

  return (
    <div className="container-menu">
      <div className="pag-container">
        <img className="harry" src={imagemHarry} alt="" />
        <h1 className="gradient">Torneio Tribruxo</h1>
        <p className="gradient">Escolha seus Campeões</p>
        <button onClick={sortearCalice}>Começar!</button>
      </div>
    </div>
  );
}

export default PaginaInicial;
