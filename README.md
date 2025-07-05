## 💸 Expense Tracker App - Mindly

A full-stack **Expense Tracker** application that helps users manage their income and expenses in real-time, with a sleek dashboard, JWT-based authentication, and downloadable reports in spreadsheet format.

## 🚀 Features

- 🔐 **Secure JWT Authentication**
  - Signup/Login with token-based authentication
  - Protected routes & user sessions

- 📊 **Real-time Dashboard**
  - Dynamic charts for income & expense trends
  - Live balance calculation
  - Monthly breakdowns by category

- 📤 **Downloadable Reports**
  - Export transactions to `.xlsx` or `.csv`
  - Structured spreadsheets with auto-formatting

- ✍️ **Transaction Management**
  - Add/Edit/Delete income or expense entries
  - Categorization and tagging
  - Pagination and search

- 📱 **Responsive UI**
  - Clean modern design with mobile-first responsiveness
  - Dark mode (optional)

---

## 🧠 Tech Stack

### 🔧 Backend

- **Node.js** + **Express**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Multer** (optional) for file handling
- **ExcelJS** for spreadsheet export

### 🎨 Frontend

- **React.js** (Vite-based setup)
- **TailwindCSS** for styling
- **Axios** for API calls
- **Recharts / Chart.js** for graphs
- **React Hook Form / Formik**

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js >= 18.x
- MongoDB
- npm / yarn

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
````

### 2️⃣ Backend Setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

#### `.env` Example:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_jwt_secret
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 📂 Project Structure

```
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── utils
│   └── index.js
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── utils
│   └── main.jsx
```

---

## 📥 API Overview

### Auth

* `POST /api/auth/register` – Register a new user
* `POST /api/auth/login` – Login and receive JWT

### Transactions

* `GET /api/transactions` – Get all user transactions
* `POST /api/transactions` – Add a new income/expense
* `PUT /api/transactions/:id` – Edit a transaction
* `DELETE /api/transactions/:id` – Delete a transaction

### Reports

* `GET /api/reports/export` – Download `.xlsx` report

---

## 📈 Future Enhancements

* 🔔 Push notifications for overspending
* 📱 PWA support
* 🏦 Bank API integrations
* 🔐 2FA with email/OTP
* 🌐 Multi-language support

---

## 🧑‍💻 Author

* **Prethika S**
  [GitHub](https://github.com/prethika-s) • [LinkedIn](https://www.linkedin.com/in/prethika-s)

---

## 🪪 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

