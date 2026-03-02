# VitaWallet (Frontend)

## 🚀 Stack

- React
- TypeScript
- Vite
- Context API
- Custom Hooks

## 📦 Setup

### 1️⃣ Clone repository

git clone https://github.com/TU_USUARIO/vitawallet_frontend.git
cd vitawallet_frontend

### 2️⃣ Use Node version

Recommended:

20.19.0

nvm install 20.19.0
nvm use 20.19.0

### 3️⃣ Install dependencies

npm install

### 4️⃣ Run project

npm run dev

Runs on:
http://localhost:5173

## 🧠 Architecture

- api/ → Axios services
- hooks/ → Custom hooks (useWallet, useTransactions, useExchangeQuote)
- components/ → Reusable UI components
- pages/ → Screens
- context/ → Auth management

## 🔐 Authentication

JWT stored in localStorage.
Protected routes implemented.

## 💰 Features

- Login
- Wallet balances
- Real-time exchange quote
- Exchange execution
- Transaction history
- Error and loading states

## 🎨 Design

- Custom CSS variables
- Design system based on Figma
- Open Sans typography
- Reusable components
