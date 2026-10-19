import { Component } from "react";

export default class CompteurVisites extends Component {
  constructor() {
    super();
    // Règle 5 : Initialisation de state à la création
    this.state = { compteur: 0 };
  }

  ajouter() {
    // Règle 6 : Mise à jour uniquement via this.setState()
    this.setState({ compteur: this.state.compteur + 1 });
  }

  reinitialiser() {
    this.setState({ compteur: 0 });
  }

  render() {
    return (
      <div>
        <h2>Nombre de stagiaires présents : {this.state.compteur}</h2>
        <button onClick={() => this.ajouter()}>+ Ajouter un stagiaire</button>
        <button onClick={() => this.reinitialiser()}>Réinitialiser</button>
      </div>
    );
  }
}