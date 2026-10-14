
export default function Presentation(props) {
  const { nom, prenom } = props.personne;

  return (
    <div>
      <h2>Salut {nom} {prenom}</h2>
      <hr />

      <h3>Diplômes :</h3>
      <p>{props.diplomes[0]}</p>
      <p>{props.diplomes[1]}</p>
      <p>{props.diplomes[2]}</p>

      {props.children}
    </div>
  );
}
