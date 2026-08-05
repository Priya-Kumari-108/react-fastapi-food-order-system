# Foodie – Simple Food Ordering UI

Foodie is a simple and responsive food ordering web application built with **React.js, Vite, Tailwind CSS, React Router, and Axios**.

The project provides a clean UI where users can log in through a demo login screen, browse food items, select a food item, enter their customer details, and submit an order.

## Features

- Responsive and simple food ordering UI
- Demo Login page
- Food menu with:
  - Pizza
  - Burger
  - Sandwich
  - Pasta
  - Coffee
- Food prices and descriptions
- Order Now functionality
- Customer order form
- Name, email, and phone number fields
- Selected food display
- Loading state while submitting an order
- Success and error messages
- Navigation using React Router
- Logout navigation
- Responsive design using Tailwind CSS

## Technologies Used

- **React.js** – Frontend UI
- **Vite** – Development server and build tool
- **Tailwind CSS** – Styling and responsive design
- **React Router** – Page navigation
- **Axios** – Sending order data to the backend
- **JavaScript (JSX)** – Application logic and components

## Project Pages

### 1. Login Page

Route:

`/`

The login page contains email and password fields.

> Note: Login is currently a **demo login**. It does not authenticate users with a backend or database.

After submitting the login form, the user is redirected to the menu page.

### 2. Menu Page

Route:

`/menu`

The menu page displays available food items with their:

- Name
- Price
- Description
- Food icon
- Order Now button

Selecting **Order Now** opens the order page with the selected food item.

### 3. Order Page

Route:

`/order`

The order page allows the user to enter:

- Full Name
- Email Address
- Phone Number

The selected food item is displayed automatically.

When the user clicks **Place Order**, the application sends the order data to the backend.

## Backend API

The frontend currently sends orders to:

`POST http://localhost:5000/orders`

The request data has the following format:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "food": "Pizza"
}
```

A backend server must be running on **localhost:5000** with a `POST /orders` endpoint for order submission to work.

If the backend is unavailable, the application displays:

`Server unavailable. Please try again later.`

## Project Structure

```text
FoodOrderApp/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Login.jsx
│   ├── Menu.jsx
│   ├── Order.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Installation

### Step 1: Install Node.js

Make sure **Node.js** and **npm** are installed on your computer.

Check the installation using:

```bash
node -v
npm -v
```

### Step 2: Open the Project

Open the `FoodOrderApp` folder in **Visual Studio Code**.

### Step 3: Install Dependencies

Open the VS Code terminal and run:

```bash
npm install
```

This installs all required project dependencies.

### Step 4: Start the Development Server

Run:

```bash
npm run dev
```

Vite will provide a local URL, usually similar to:

```text
http://localhost:5173/
```

Open the URL in your browser.

## Available Commands

### Start Development Server

```bash
npm run dev
```

### Build the Project

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

## Application Flow

```text
Login Page
    ↓
Menu Page
    ↓
Select Food
    ↓
Order Page
    ↓
Enter Customer Details
    ↓
Place Order
    ↓
Backend API
    ↓
Order Success / Error Message
```

## Important Notes

- The login system is currently for UI/demo purposes only.
- No user authentication or database is connected to the login page.
- Order submission requires a backend API running on `http://localhost:5000`.
- The frontend uses Axios to communicate with the backend.
- Food items are currently stored as static data inside the React components.
- The project is mainly focused on the frontend UI and basic API integration.

## Future Improvements

The project can be extended by adding:

- User registration and real authentication
- PostgreSQL or MySQL database
- Backend using Node.js/Express or FastAPI
- Admin dashboard
- Order history
- Cart functionality
- Payment integration
- Food search and filtering
- Real food images
- User profile
- Order status tracking

## Author

**Foodie – Simple Food Ordering System**

Built as a frontend/full-stack learning project using React.js.
# react-fastapi-food-order-system
A simple food ordering application built with React, FastAPI, MongoDB, Docker, and Docker Compose.
