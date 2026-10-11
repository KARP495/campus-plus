// Données fictives — prototype Campus+ (aucune base de données réelle)

export type Formation = {
  id: string;
  titre: string;
  etablissement: string;
  niveau: "Licence" | "Master" | "BTS";
  domaine: string;
  prerequis: string;
  duree: string;
  debouches: string[];
};

export const formations: Formation[] = [
  { id: "licence-informatique", titre: "Licence en Informatique", etablissement: "Université d'Abomey-Calavi (UAC)", niveau: "Licence", domaine: "Informatique", prerequis: "Bac C, D ou E", duree: "3 ans", debouches: ["Développeur", "Administrateur systèmes", "Analyste de données"] },
  { id: "licence-communication", titre: "Licence en Communication", etablissement: "UAC", niveau: "Licence", domaine: "Communication", prerequis: "Bac toutes séries", duree: "3 ans", debouches: ["Chargé de communication", "Journaliste", "Community manager"] },
  { id: "licence-gestion", titre: "Licence en Gestion des Entreprises", etablissement: "UAC — FASEG", niveau: "Licence", domaine: "Gestion", prerequis: "Bac B, C, D ou G", duree: "3 ans", debouches: ["Gestionnaire", "Comptable", "Entrepreneur"] },
  { id: "master-data", titre: "Master en Science des données", etablissement: "Université de Parakou", niveau: "Master", domaine: "Informatique", prerequis: "Licence en informatique ou maths", duree: "2 ans", debouches: ["Data scientist", "Ingénieur IA"] },
  { id: "bts-secretariat", titre: "BTS Assistant de direction", etablissement: "ENEAM", niveau: "BTS", domaine: "Gestion", prerequis: "Bac toutes séries", duree: "2 ans", debouches: ["Assistant de direction", "Office manager"] },
  { id: "licence-droit", titre: "Licence en Droit", etablissement: "Université de Parakou", niveau: "Licence", domaine: "Droit", prerequis: "Bac toutes séries", duree: "3 ans", debouches: ["Juriste d'entreprise", "Avocat (après concours)", "Magistrat (après concours)"] },
];

export type Demarche = {
  slug: string;
  titre: string;
  etablissement: string;
  categorie: "Inscription" | "Bourse" | "Carte" | "Attestation";
  date: string;
  resume: string;
  ou: string;
  etapes: string[];
  pieces: string[];
  delais: string;
  frais: string;
  contact: string;
  verifiee: string;
};

export const demarches: Demarche[] = [
  {
    slug: "inscription-uac",
    titre: "Inscription à l'Université d'Abomey-Calavi",
    etablissement: "UAC",
    categorie: "Inscription",
    date: "Date limite : 30/09/2026",
    resume: "Pré-inscription en ligne puis finalisation sur place.",
    ou: "Service des inscriptions — campus d'Abomey-Calavi",
    etapes: ["Créer son compte sur le portail d'inscription", "Remplir le formulaire de pré-inscription", "Déposer les pièces justificatives", "Régler les frais", "Retirer sa carte d'étudiant"],
    pieces: ["Baccalauréat original (ou attestation de réussite)", "Acte de naissance", "Pièce d'identité", "4 photos d'identité", "Reçu de paiement des frais"],
    delais: "Du 15 juillet au 30 septembre",
    frais: "À confirmer auprès du service concerné",
    contact: "Service des inscriptions de l'établissement",
    verifiee: "Vérifiée le 02/10/2026",
  },
  {
    slug: "demande-bourse",
    titre: "Demande de bourse d'études",
    etablissement: "Ministère — Direction des bourses",
    categorie: "Bourse",
    date: "Ouverture : octobre",
    resume: "Dépôt du dossier de bourse pour les étudiants éligibles.",
    ou: "Direction des bourses (dépôt en ligne puis dossier papier)",
    etapes: ["Vérifier les critères d'éligibilité", "Constituer le dossier", "Déposer en ligne", "Suivre l'état de la demande"],
    pieces: ["Attestation d'inscription", "Relevé de notes", "Pièce d'identité", "Justificatif de résidence"],
    delais: "Selon le calendrier officiel annuel",
    frais: "Gratuit",
    contact: "Direction des bourses",
    verifiee: "Vérifiée le 28/09/2026",
  },
  {
    slug: "carte-etudiant",
    titre: "Carte d'étudiant",
    etablissement: "UAC",
    categorie: "Carte",
    date: "Délivrance : en continu",
    resume: "Retrait de la carte après validation de l'inscription.",
    ou: "Scolarité de ta faculté ou de ton école",
    etapes: ["Valider son inscription", "Faire la photo sur place", "Retirer la carte à la scolarité"],
    pieces: ["Reçu d'inscription", "Pièce d'identité"],
    delais: "Quelques semaines après l'inscription",
    frais: "Inclus dans l'inscription",
    contact: "Scolarité de ta faculté",
    verifiee: "Vérifiée le 25/09/2026",
  },
  {
    slug: "attestation-inscription",
    titre: "Attestation d'inscription",
    etablissement: "ENEAM",
    categorie: "Attestation",
    date: "Délivrance : sur demande",
    resume: "Document utile pour la bourse, un stage ou une mutuelle.",
    ou: "Secrétariat de ton établissement",
    etapes: ["Déposer la demande au secrétariat", "Attendre la signature", "Retirer le document"],
    pieces: ["Carte d'étudiant", "Reçu de paiement"],
    delais: "48 à 72 heures",
    frais: "À confirmer",
    contact: "Secrétariat de l'établissement",
    verifiee: "Vérifiée le 30/09/2026",
  },
];

export type Service = {
  id: string;
  titre: string;
  categorie: "Création" | "Numérique" | "Apprentissage" | "Événementiel";
  auteur: string;
  initiales: string;
  note: number;
  avis: number;
  prix: string;
  zone: string;
  description: string;
  dispo: string;
  competences: string[];
  seed: number;
};

export const services: Service[] = [
  { id: "affiches-logos", titre: "Création de visuels : affiches, logos, bannières", categorie: "Création", auteur: "Aïcha Houngnon", initiales: "AH", note: 4.8, avis: 12, prix: "5 000 FCFA / visuel", zone: "Cotonou et environs", description: "Je réalise des visuels professionnels pour vos affiches, logos, bannières, cartes de visite et plus. Je travaille sur Canva et Photoshop ; mes créations s'adaptent à vos besoins et à votre identité.", dispo: "Lun – Ven, 8h – 17h", competences: ["Photoshop", "Canva", "Illustrator"], seed: 1 },
  { id: "depannage-informatique", titre: "Dépannage informatique et installation de logiciels", categorie: "Numérique", auteur: "Issa Bani", initiales: "IB", note: 4.7, avis: 10, prix: "3 000 FCFA / intervention", zone: "Abomey-Calavi", description: "Je répare, nettoie et configure ton ordinateur : virus, lenteurs, installation de Windows et des logiciels dont tu as besoin.", dispo: "Tous les jours, après 16h", competences: ["Windows", "Bureautique", "Réseaux"], seed: 2 },
  { id: "soutien-scolaire", titre: "Soutien scolaire : maths et physique", categorie: "Apprentissage", auteur: "Mariam Tomanpé", initiales: "MT", note: 4.9, avis: 21, prix: "3 000 FCFA / heure", zone: "Cotonou — à domicile ou en ligne", description: "Cours particuliers pour le lycée et la première année de licence, avec des exercices corrigés et un suivi chaque semaine.", dispo: "Mer, Sam, Dim", competences: ["Mathématiques", "Physique", "Pédagogie"], seed: 3 },
  { id: "photo-evenement", titre: "Photographe pour événements", categorie: "Événementiel", auteur: "Koffi Akuénou", initiales: "KA", note: 4.7, avis: 16, prix: "15 000 FCFA / événement", zone: "Cotonou et Porto-Novo", description: "Couverture photo de tes anniversaires, soutenances, cérémonies et événements associatifs, avec livraison des photos retouchées sous 3 jours.", dispo: "Week-ends", competences: ["Photographie", "Lightroom", "Retouche"], seed: 4 },
  { id: "redaction", titre: "Rédaction et mise en forme de documents", categorie: "Création", auteur: "Sarah Gadjo", initiales: "SG", note: 4.5, avis: 8, prix: "5 000 FCFA / document", zone: "En ligne", description: "Mémoires, rapports de stage, CV et lettres de motivation : relecture, mise en page propre et respect des normes de ton établissement.", dispo: "Tous les jours", competences: ["Word", "Rédaction", "Normes APA"], seed: 5 },
  { id: "organisation-evenement", titre: "Organisation et accueil d'événements", categorie: "Événementiel", auteur: "Eugène Vodounon", initiales: "EV", note: 4.6, avis: 13, prix: "20 000 FCFA / événement", zone: "Cotonou", description: "Appui logistique, accueil des invités et animation pour les événements d'associations et de petites entreprises.", dispo: "Sur rendez-vous", competences: ["Logistique", "Accueil", "Animation"], seed: 6 },
  { id: "site-vitrine", titre: "Création d'un site vitrine simple", categorie: "Numérique", auteur: "Rodrigue Sèhouéto", initiales: "RS", note: 4.8, avis: 9, prix: "À partir de 60 000 FCFA", zone: "En ligne", description: "Un site simple et rapide pour ton association ou ta petite activité : présentation, contacts et réseaux sociaux.", dispo: "Sur rendez-vous", competences: ["Next.js", "Design", "SEO de base"], seed: 7 },
  { id: "montage-video", titre: "Montage vidéo pour réseaux sociaux", categorie: "Création", auteur: "Nadège Agbo", initiales: "NA", note: 4.6, avis: 7, prix: "7 000 FCFA / vidéo", zone: "En ligne", description: "Montage de vidéos courtes pour Instagram, TikTok et WhatsApp : sous-titres, musique et format vertical.", dispo: "Lun – Sam", competences: ["CapCut", "Premiere Pro", "Sous-titrage"], seed: 8 },
];

export type Stage = {
  id: string;
  titre: string;
  entreprise: string;
  secteur: "Marketing" | "Informatique" | "Événementiel" | "Communication";
  duree: string;
  ville: string;
  remuneration: string;
  niveau: string;
  publie: string;
  missions: string[];
  profil: string[];
  apropos: string;
  seed: number;
};

export const stages: Stage[] = [
  { id: "assistant-marketing", titre: "Assistant Marketing Digital", entreprise: "Orabank", secteur: "Marketing", duree: "3 mois", ville: "Cotonou", remuneration: "50 000 FCFA / mois", niveau: "Licence 2 ou 3", publie: "Publiée le 10/09/2026", missions: ["Gérer les réseaux sociaux de l'entreprise", "Créer du contenu digital (posts, vidéos courtes)", "Participer aux campagnes marketing"], profil: ["Bonne maîtrise des réseaux sociaux", "Créativité et esprit d'initiative", "Connaissances en graphisme (un atout)"], apropos: "Orabank est une banque panafricaine présente dans plusieurs pays d'Afrique. Elle accompagne les particuliers, les entreprises et les institutions.", seed: 11 },
  { id: "developpeur-web", titre: "Développeur Web (stage)", entreprise: "TechSolutions", secteur: "Informatique", duree: "6 mois", ville: "Cotonou", remuneration: "À convenir", niveau: "Licence 2, 3 ou Master", publie: "Publiée le 08/09/2026", missions: ["Développer des fonctionnalités d'une application web", "Corriger des anomalies et rédiger des tests", "Participer aux revues de code"], profil: ["HTML, CSS, JavaScript", "Notions de React ou Next.js", "Envie d'apprendre en équipe"], apropos: "TechSolutions conçoit des applications web et mobiles pour des clients en Afrique de l'Ouest.", seed: 12 },
  { id: "assistant-evenementiel", titre: "Assistant événementiel", entreprise: "Agence Horizon", secteur: "Événementiel", duree: "3 mois", ville: "Cotonou", remuneration: "30 000 FCFA / mois", niveau: "Licence 1 ou plus", publie: "Publiée le 05/09/2026", missions: ["Préparer la logistique des événements", "Accueillir les invités", "Assurer le suivi des prestataires"], profil: ["Sens de l'organisation", "Aisance à l'oral", "Disponibilité les week-ends"], apropos: "Agence Horizon organise conférences, concerts et événements d'entreprise à Cotonou.", seed: 13 },
  { id: "stagiaire-communication", titre: "Stagiaire en communication", entreprise: "ONG Jeunesse & Avenir", secteur: "Communication", duree: "3 mois", ville: "Abomey-Calavi", remuneration: "Indemnité de transport", niveau: "Licence 2 ou plus", publie: "Publiée le 01/09/2026", missions: ["Rédiger des communiqués et des articles", "Photographier et filmer les activités", "Mettre à jour le site et les réseaux"], profil: ["Bonne expression écrite", "Outils de montage (un atout)", "Intérêt pour le milieu associatif"], apropos: "Jeunesse & Avenir accompagne des jeunes vers l'emploi et l'entrepreneuriat.", seed: 14 },
];

export type Sujet = {
  id: string;
  titre: string;
  auteur: string;
  categorie: "Orientation" | "Vie étudiante" | "Emploi" | "Projets";
  reponses: number;
  vues: number;
  quand: string;
};

export const sujetsInitiaux: Sujet[] = [
  { id: "s1", titre: "Quel est le meilleur moment pour faire une demande de bourse ?", auteur: "Aïcha H.", categorie: "Orientation", reponses: 12, vues: 128, quand: "il y a 2 h" },
  { id: "s2", titre: "Conseils pour un stage en communication ?", auteur: "Moussa B.", categorie: "Emploi", reponses: 8, vues: 96, quand: "il y a 5 h" },
  { id: "s3", titre: "Comment bien préparer son dossier d'inscription ?", auteur: "Fatou N.", categorie: "Orientation", reponses: 16, vues: 210, quand: "hier" },
  { id: "s4", titre: "Recherche un(e) partenaire pour un projet événementiel", auteur: "Ibrahim B.", categorie: "Projets", reponses: 10, vues: 74, quand: "hier" },
  { id: "s5", titre: "Où réviser au calme près du campus ?", auteur: "Claudine A.", categorie: "Vie étudiante", reponses: 21, vues: 305, quand: "il y a 2 jours" },
];

export const actualites = [
  { titre: "Calendrier académique 2025-2026", resume: "Les dates importantes de l'année.", date: "12 sept. 2025", seed: 21 },
  { titre: "Bourses d'études : les opportunités", resume: "Pour les étudiants béninois.", date: "10 sept. 2025", seed: 22 },
  { titre: "Comment bien préparer son budget étudiant ?", resume: "Nos conseils pour la rentrée.", date: "8 sept. 2025", seed: 23 },
];
