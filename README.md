# BuyIt Project

# 🛒 MERN E-Commerce App

This is a full-stack **MERN (MongoDB, Express, React, Node.js)** e-commerce application with **user authentication, product management, order management, PayPal integration, and admin dashboards**.

---

![MongoDB](https://img.shields.io/badge/MongoDB-v.7-green)
![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-purple)
![React Bootstrap](https://img.shields.io/badge/Bootstrap-v.5.0-darkblue)
![Mongoose](https://img.shields.io/badge/Mongoose-v.7.5.3-brown)

+ Click [here](https://buyit-fehz.onrender.com/) to see the complete Application
## Table of content

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Routes Overview](#routes-overview)
- [Getting started](#getting-started)


## Introduction
This project is a full-stack project built with NodeJS for the backend and the React, Redux toolkit for the frontend, and MongoDB used for the database, while PayPal used as a means of transaction.
This project allowed me to get more detailed about online transactions, where authorized admin controls everything at the backend and has more access to control what is happening on the clients' side than regular users.

## Technologies 
### 📦 Tech Stack
- **Backend**
    + MongoDB
    + NodeJS
    + ExpressJS
    + Mongoose
    + dotenv
    + bcryptjs
    + jsonwebtoken
- **Frontend**
    + ReactJS
    + React-bootstrap(for design and styling)
    + Redux
    + react-router-dom
    + Redux toolkit
    + jwt-decode
    + React Stripe
    + Paypal

## Features
### 🚀 Features

### 👤 User Features
- User registration & login
- Browse products with pagination & keyword search
- Add/remove items from cart
- Checkout process (shipping, payment, order placement)
- PayPal payment integration
- View personal orders & profile

### 🛠 Admin Features
- Manage products (create, edit, delete)
- Manage users (update roles, edit details)
- Manage orders (mark as delivered, track status)
- Admin pagination for orders & products

---
## Project Structure
### 🗂 Project Structure

```
src/
│── Assets/                # Custom styles (Bootstrap override, global CSS)
│── Components/            # Reusable components (Auth, Pagination, etc.)
│── Pages/                 # Screens for users & admin
│   ├── HomeScreen.js
│   ├── ProductScreen.js
│   ├── CartScreen.js
│   ├── ShippingScreen.js
│   ├── PaymentScreen.js
│   ├── PlaceOrderScreen.js
│   ├── OrderScreen.js
│   ├── UserScreen/        # Login, Register, Profile
│   └── AdminPage/         # Product, Order, User admin pages
│── Redux/                 # Redux store, slices
│── App.js                 # Main layout wrapper
│── index.js               # Entry point
```

---

## Installation
### ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/FemiAdesola/BuyIt.git
cd BuyIt
```

### 2️⃣ Install dependencies
```bash
npm install
cd frontend && npm install
```

### 3️⃣ Create environment file  
Create a `.env` file in the **backend root**:

```
PORT=4000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

### 4️⃣ Run the app
```bash
# Run backend (Express server)
node backend/app.js 

# Run frontend (React app)
cd frontend
npm start
```

App will be available at:  
👉 `http://localhost:3000`

---
## Routes Overview
### 🔑 Routes Overview

### Public
- `/` → Home (Products)
- `/search/:keyword` → Search results
- `/page/:pageNumber` → Paginated results
- `/product/:id` → Product details
- `/cart` → Cart
- `/login` → Login
- `/register` → Register

### Private (User)
- `/shipping` → Shipping info
- `/payment` → Payment selection
- `/placeorder` → Place order
- `/order/:id` → Order details
- `/profile` → User profile

### Admin
- `/admin/productlist(/:pageNumber)` → Manage products
- `/admin/product/:id/edit` → Edit product
- `/admin/orderlist(/:pageNumber)` → Manage orders
- `/admin/userlist` → Manage users
- `/admin/user/:id/edit` → Edit user

---

## 💳 PayPal Integration
The app uses `@paypal/react-paypal-js` for handling payments.  
Make sure to set `PAYPAL_CLIENT_ID` in `.env`.

---

## Getting started
### Frontend (UI) page

![Front](./img/Front.png)

### Product details
![Productdetails](./img/SingleProduct.png)

### Cart page

![Cartpage](./img/Cart.png)
### Order Summary page


![usersummary](./img/OrderSummary.png)

### Payment  page

![Payment](./img/PaymentMethod.png)



