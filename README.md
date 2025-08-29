# BusinessOS - Plateforme de Gestion d'Entreprise

BusinessOS est une plateforme tout-en-un qui permet aux entreprises de gérer leurs employés, leur logistique, leurs clients et leurs finances grâce à une seule interface moderne et intuitive.

## 🚀 Fonctionnalités

### 🔐 Authentification et Rôles
- **Système d'inscription/connexion** avec choix de rôle
- **5 rôles utilisateur** distincts :
  - **Chef d'entreprise** : Gestion complète de l'entreprise
  - **RH** : Gestion des ressources humaines
  - **Employé/Chauffeur** : Accès au planning et missions
  - **Client** : Suivi des commandes et livraisons
  - **Administrateur** : Gestion de la plateforme

### 📊 Tableau de Bord
- **Métriques clés** en temps réel
- **Navigation latérale** adaptée au rôle
- **Interface responsive** pour tous les appareils
- **Actions rapides** pour les tâches courantes

### 🏢 Gestion Logistique
- **Gestion des stocks** avec alertes automatiques
- **Suivi des produits** avec codes SKU
- **Gestion des emplacements** et inventaire
- **Rapports et analyses** de performance

### 👥 Gestion des Ressources
- **Gestion des employés** et contrats
- **Pointage et suivi des heures** (QR code/NFC)
- **Planning et tournées** de livraison
- **Gestion des véhicules** et maintenance

## 🛠️ Technologies Utilisées

- **Frontend** : Next.js 14 avec App Router
- **Styling** : Tailwind CSS
- **Icons** : Lucide React
- **TypeScript** : Typage strict pour la robustesse
- **Responsive Design** : Mobile-first approach

## 📁 Structure du Projet

```
businessos/
├── src/
│   ├── app/                    # Pages Next.js
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── login/             # Page de connexion
│   │   ├── register/          # Page d'inscription
│   │   └── dashboard/         # Interface de gestion
│   │       ├── layout.tsx     # Layout du tableau de bord
│   │       ├── page.tsx       # Page principale
│   │       └── logistics/     # Gestion logistique
│   ├── components/            # Composants réutilisables
│   │   ├── Sidebar.tsx        # Navigation latérale
│   │   └── Header.tsx         # En-tête du tableau de bord
│   └── types/                 # Types TypeScript
│       └── index.ts           # Interfaces et types
├── public/                    # Assets statiques
└── package.json              # Dépendances
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd businessos

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Accès
- **Page d'accueil** : http://localhost:3000
- **Connexion** : http://localhost:3000/login
- **Inscription** : http://localhost:3000/register
- **Tableau de bord** : http://localhost:3000/dashboard

## 👥 Comptes de Démonstration

Pour tester l'application, utilisez ces comptes de démonstration :

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| Admin | admin@businessos.com | demo123 |
| RH | rh@businessos.com | demo123 |
| Employé | employee@businessos.com | demo123 |
| Artisan | artisan@businessos.com | demo123 |
| Client | client@businessos.com | demo123 |

## 🎯 Phase 1 - Livrable Actuel

Cette première phase inclut :

✅ **Page d'accueil publique** avec présentation et formules d'abonnement
✅ **Système d'authentification** complet avec choix de rôles
✅ **Interface de gestion** avec tableau de bord et navigation
✅ **Gestion des rôles** selon les permissions
✅ **Design moderne et responsive** proche des captures d'écran
✅ **Page de logistique** avec gestion des stocks

## 🔮 Prochaines Phases

### Phase 2 (Fonctionnalités avancées)
- [ ] Gestion complète des employés et contrats
- [ ] Système de pointage QR code/NFC
- [ ] Gestion des tournées et planning
- [ ] Système de messagerie interne

### Phase 3 (Automatisation et intégrations)
- [ ] Paiements et facturation
- [ ] API d'intégration
- [ ] Rapports automatisés
- [ ] Notifications en temps réel

## 🎨 Design et UX

- **Interface moderne** inspirée d'Apple et des meilleures pratiques UX
- **Responsive design** pour tous les appareils
- **Navigation intuitive** avec menu latéral
- **Couleurs et typographie** cohérentes
- **Animations fluides** et transitions

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env.local` :
```env
NEXT_PUBLIC_APP_NAME=BusinessOS
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Personnalisation
- **Couleurs** : Modifiez les classes Tailwind dans `tailwind.config.js`
- **Logo** : Remplacez les icônes dans les composants
- **Données** : Adaptez les données mock dans les composants

## 📱 Responsive Design

L'application est entièrement responsive avec :
- **Mobile-first** approach
- **Navigation mobile** avec overlay
- **Tableaux adaptatifs** pour petits écrans
- **Grilles flexibles** qui s'adaptent à tous les formats

## 🚀 Déploiement

### Production
```bash
# Build de production
npm run build

# Démarrage en production
npm start
```

### Vercel (Recommandé)
```bash
# Déploiement automatique
vercel --prod
```

## 🤝 Contribution

Ce projet est développé pour un client freelance. Pour toute question ou amélioration :

1. **Issues** : Créez une issue pour les bugs
2. **Features** : Proposez de nouvelles fonctionnalités
3. **Code** : Soumettez des pull requests

## 📄 Licence

Projet développé pour un client freelance - Tous droits réservés.

## 🏗️ Architecture Technique

### Frontend
- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage strict et robustesse
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Icônes modernes et cohérentes

### État et Gestion
- **React Hooks** : Gestion d'état locale
- **Context API** : Gestion d'état globale (à implémenter)
- **Local Storage** : Persistance des données (à implémenter)

### Performance
- **Code splitting** automatique avec Next.js
- **Lazy loading** des composants
- **Optimisation des images** avec Next.js Image
- **Bundle analyzer** pour optimiser la taille

---

**Développé avec ❤️ pour BusinessOS**
