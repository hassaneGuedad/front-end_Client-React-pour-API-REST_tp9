TP9 : Client React pour API REST
Description

Ce projet consiste à créer un client React qui consomme une API REST Spring Boot. L'application permet de :

Afficher la liste des comptes disponibles

Ajouter un nouveau compte via un formulaire

Visualiser les informations d’un compte (ID, solde, date de création, type)

Le backend est exposé sur http://localhost:8083/banque et le frontend sur http://localhost:3000.

Prérequis

Node.js et npm installés

Java JDK 17 ou supérieur

Maven pour exécuter le backend Spring Boot

IDE ou éditeur de code (VS Code, IntelliJ, etc.)

Installation et exécution
Backend (Spring Boot)

Cloner le dépôt backend :

git clone <URL_DE_TON_BACKEND>
cd ms-banque


Lancer le projet avec Maven :

mvn spring-boot:run


Vérifier que l’API fonctionne :

Liste des comptes : http://localhost:8083/banque/comptes

Exemple de réponse JSON :

[
  {"id":1,"solde":8000.0,"dateCreation":"2025-11-06","type":"COURANT"},
  {"id":2,"solde":12500.0,"dateCreation":"2025-11-06","type":"EPARGNE"},
  {"id":3,"solde":9800.0,"dateCreation":"2025-11-06","type":"COURANT"}
]

Frontend (React)

Créer le projet React ou récupérer le dépôt :

npx create-react-app compte-client
cd compte-client


Installer les dépendances :

npm install axios bootstrap


Ajouter Bootstrap dans src/index.js :

import 'bootstrap/dist/css/bootstrap.min.css';


Créer src/config.js :

const API_BASE_URL = "http://localhost:8083/banque";
export default API_BASE_URL;


Créer les composants CompteList.js et CompteForm.js dans src/components/

CompteList.js : affichage de la liste des comptes

CompteForm.js : formulaire pour ajouter un compte

Modifier src/App.js :

import React from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  return (
    <div className="container mt-4">
      <CompteForm />
      <CompteList />
    </div>
  );
}

export default App;


Lancer le frontend :

npm start


L’application sera disponible sur http://localhost:3000.

Fonctionnalités

Liste des comptes : affichage dynamique via axios.get()

Ajout de compte : formulaire contrôlé avec useState et axios.post()

Consommation API : gestion JSON/XML selon les en-têtes HTTP Accept et Content-Type

Organisation du projet
compte-client/
├─ src/
│  ├─ components/
│  │  ├─ CompteList.js
│  │  └─ CompteForm.js
│  ├─ config.js
│  └─ App.js
├─ package.json
└─ README.md

Captures d’écran
Liste des comptes

Formulaire d’ajout

Notes

Vérifier que le backend est lancé avant le frontend pour éviter les erreurs CORS ou 404

Pour corriger les problèmes de CORS, ajouter dans Spring Boot :

@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**").allowedOrigins("http://localhost:3000");
        }
    };
}


Les dates sont automatiquement initialisées lors de la création des comptes
