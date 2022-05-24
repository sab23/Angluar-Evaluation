export classe Statistique = {
    identifiant?: string;
    nom?: string;
    valeur?: string;

    constructor(identifiant: string, nom: string, valeur: string){
        this.identifiant = identifiant;
        this.nom = nom;
        this.valeur = valeur;
    }
}
