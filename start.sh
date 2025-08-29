#!/bin/bash

echo "🚀 Démarrage de BusinessOS..."
echo "📱 Application de gestion d'entreprise moderne"
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier la version de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18+ est requis. Version actuelle: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) détecté"
echo ""

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo ""
fi

# Créer le fichier .env.local s'il n'existe pas
if [ ! -f ".env.local" ]; then
    echo "⚙️  Création du fichier de configuration..."
    cp env.example .env.local
    echo "✅ Fichier .env.local créé"
    echo ""
fi

echo "🌐 Démarrage du serveur de développement..."
echo "📍 URL: http://localhost:3000"
echo "🔑 Comptes de démonstration disponibles"
echo ""

# Démarrer l'application
npm run dev
