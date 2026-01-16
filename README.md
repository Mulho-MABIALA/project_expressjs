# Application Web Express - Point de Contrôle

Application web Express avec trois pages (Accueil, Nos services, Nous contacter) disponible uniquement pendant les heures de travail.

## Description

Cette application web démontre l'utilisation d'Express.js avec un middleware personnalisé qui restreint l'accès aux heures de travail (lundi au vendredi, de 9h à 17h).

## Fonctionnalités

- **Page d'accueil** : Présentation de l'entreprise
- **Page Nos services** : Liste des services offerts
- **Page Nous contacter** : Informations de contact et formulaire
- **Middleware de vérification** : Bloque l'accès en dehors des heures de travail
- **Design moderne** : Interface responsive avec CSS personnalisé

## Technologies Utilisées

- Node.js
- Express.js 5.2.1
- EJS (moteur de template) 3.1.10
- CSS3

## Installation

1. Cloner le repository:
```bash
git clone https://github.com/Mulho-MABIALA/project_expressjs.git
cd project_expressjs
```

2. Installer les dépendances:
```bash
npm install
```

## Démarrage

Lancer l'application:
```bash
npm start
```

Le serveur sera accessible sur `http://localhost:3000`

## Structure du Projet

```
project_expressjs/
├── server.js              # Serveur Express principal
├── package.json           # Dépendances et scripts
├── views/                 # Vues EJS
│   ├── home.ejs          # Page d'accueil
│   ├── services.ejs      # Page des services
│   ├── contact.ejs       # Page de contact
│   └── closed.ejs        # Page d'indisponibilité
└── public/               # Fichiers statiques
    └── css/
        └── style.css     # Styles CSS
```

## Middleware de Vérification des Heures

Le middleware `checkWorkingHours` vérifie:
- Si c'est un jour de semaine (lundi à vendredi)
- Si l'heure actuelle est entre 9h et 17h

Si ces conditions ne sont pas remplies, l'utilisateur est redirigé vers une page d'indisponibilité.

## Horaires d'Ouverture

- **Lundi - Vendredi**: 9h00 - 17h00
- **Samedi - Dimanche**: Fermé

## Auteur

Développé dans le cadre d'un checkpoint GOMYCODE

## Licence

ISC
