class EmploiService {
    listeEmplois: any ;
    constructor(){
        this.listeEmplois = [
            {
                id: 1,
                titre: "Développeur Front-end",
                description: "Nous sommes à la recherche d'un développeur Front-end qui aura comme mission de transformer des maquettes en un site web fonctionnel.",
                type: "CDD",
                image: "uploads/posts/front.jpg",
                entreprise: "Ingenosya"
            },
            {
                id: 2,
                titre: "Développeur Back-end",
                description: "E-Tech recrute 1 développeur back-end Senior ayant au minimum 2ans d'expérience.\nMissions: -Développer une application serveur NodeJs\n-Relier des applications web à un serveur.",
                type: "CDD",
                image: "uploads/posts/back.png",
                entreprise: "E-Tech"
            },
            {
                id: 3,
                titre: "Directeur Administratif et Financier",
                description: "Nous recrutons 1 Directeur Administratif et Financier, expert en la matiere, pour un contrat à durée indeterminée.",
                type: "CDI",
                image: "uploads/posts/finance.jpg",
                entreprise: "E-Tech"
            }
        ] ;
    }

    getEmplois(){
        return this.listeEmplois ;
    }
}

export default EmploiService ;