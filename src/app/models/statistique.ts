export class Statistique {
    identifiant?: string;
    nom?: string;
    chiffre?: string;

    constructor(identifiant: string, nom: string, chiffre: string){
        this.identifiant = identifiant;
        this.nom = nom;
        this.chiffre = chiffre;
    }
}
