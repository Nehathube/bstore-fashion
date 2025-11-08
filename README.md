# BStore Fashion

A modern React-based eCommerce website clone inspired by the BStore template.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Product Catalog**: Browse products with images, prices, and ratings
- **Shopping Cart**: Add/remove items, update quantities, view total
- **Navigation**: Clean routing with React Router
- **Modern UI**: CSS variables, Google Fonts, and smooth animations

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS with CSS Variables
- **State Management**: React Context API
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bstore-fashion
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Start the development servers:
   ```bash
   # Start both client and server concurrently
   npm run start

   # Or start individually:
   # Client
   cd client && npm run dev

   # Server
   cd server && npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

### Root Directory
- `npm run start` - Start both client and server
- `npm run install-all` - Install dependencies for all workspaces

### Client Directory
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Server Directory
- `npm run dev` - Start server with nodemon
- `npm run start` - Start server

## Project Structure

```
bstore-fashion/
├── client/                 # React frontend
│   ├── public/
│   │   ├── assets/         # Images and static files
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React Context for state
│   │   ├── data/           # Mock data
│   │   ├── pages/          # Page components
│   │   ├── variables.css   # CSS variables
│   │   ├── styles.css      # Global styles
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── data/
│   ├── app.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Routes

- `/` - Home page with hero and featured products
- `/products` - Product catalog
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/login` - User login
- `/register` - User registration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only.