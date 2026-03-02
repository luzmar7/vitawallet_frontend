# 🟣 VitaWallet – Frontend

Frontend desarrollado como parte de la prueba técnica Fullstack VitaWallet.

Aplicación construida con React + TypeScript que permite autenticación, visualización de balances, cotización en tiempo real y ejecución de intercambios.

---

## 🚀 Stack

- React
- TypeScript
- Vite
- Context API
- Custom Hooks
- Axios
- CSS con variables globales

---

## ⚙️ Quick Start

Clonar repositorio:

```bash
git clone https://github.com/luzmar7/vitawallet_frontend.git
cd vitawallet_frontend
```

Usar versión de Node recomendada:

```
20.19.0
```

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor de desarrollo:

```bash
npm run dev
```

Disponible en:

http://localhost:5173

---

## 🔐 Autenticación

- Login basado en JWT
- Token almacenado en localStorage
- Rutas protegidas
- Redirección automática si no existe sesión

---

## 💰 Wallet

- Visualización de balances por moneda
- Actualización automática al realizar un exchange

---

## 🔄 Exchange

- Cotización en tiempo real
- Validación de monto
- Manejo de estados de carga
- Manejo básico de errores

---

## 📊 Transactions

- Listado de transacciones
- Visualización de estado
- Actualización luego de ejecutar exchange

---

## 🏗 Arquitectura

Estructura principal:

```
src/
├─ api/        # Servicios HTTP
├─ components/ # Componentes reutilizables
├─ context/    # Estado global
├─ hooks/      # Lógica desacoplada
├─ pages/      # Vistas principales
```

Principios aplicados:

- Separación de responsabilidades
- Lógica encapsulada en custom hooks
- Componentes reutilizables
- Arquitectura simple y escalable

---

## 🧠 Decisiones Técnicas

- Context API en lugar de Redux por el alcance del proyecto.
- Custom Hooks para separar lógica de UI.
- Axios centralizado en capa API.
- TypeScript para tipado seguro de datos.
- Manejo básico de loading y error states.

---

## 🔜 Mejoras Futuras

- Refresh token
- Manejo global de errores
- Internacionalización (i18n)