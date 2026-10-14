
import { Component } from 'react';

export default class PresentationClasse extends Component {
  render() {
    const { nom, prenom } = this.props.personne;

    return (
      <div>
        <h2>Salut {nom} {prenom}</h2>
        <hr />

        <h3>Diplômes :</h3>
        <p>{this.props.diplomes[0]}</p>
        <p>{this.props.diplomes[1]}</p>
        <p>{this.props.diplomes[2]}</p>

        {this.props.children}
      </div>
    );
  }
}
