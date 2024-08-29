# Income.stream

Income.stream is a decentralized finance (DeFi) platform that simplifies the process of deploying and managing smart contracts. Built with React for the frontend and Express for the backend, it offers an intuitive web interface for users to create, manage, and monitor income streams using blockchain technology.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User-Friendly Interface**: Simple and intuitive web platform to interact with smart contracts.
- **MetaMask Integration**: Seamless integration with MetaMask for authentication and transaction signing.
- **Contract Deployment**: Deploy new smart contracts with customizable parameters like receiver address, amount, and duration.
- **Contract Management**: Manage existing contracts by extending duration, updating receiver details, and withdrawing funds.
- **Notifications**: Real-time updates and notifications on contract status and transactions.
- **Security**: Leverages blockchain technology to ensure secure, transparent, and immutable transactions.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MetaMask](https://metamask.io/) browser extension

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jishnu-baruah/Income.stream.git
   cd Income.stream
   ```

2. **Install Dependencies:**

   - **For the Backend**:
     ```bash
     cd backend
     npm install
     ```

   - **For the Client**:
     ```bash
     cd ../client
     npm install
     ```

### Running the Project

1. **Start the Backend Server:**

   Open a terminal and navigate to the `backend` directory, then start the server:

   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend (Client):**

   In a separate terminal, navigate to the `client` directory and start the React development server:

   ```bash
   cd client
   npm start
   ```

3. **Access the Application:**

   Open your browser and go to `http://localhost:3000` to see the application in action. The backend server will be running on `http://localhost:5000` by default.

## Usage

- **Connect MetaMask**: Ensure your MetaMask wallet is connected. Use the "Connect with MetaMask" button on the homepage.
- **Deploy Contract**: Navigate to the dashboard and fill in the necessary details to deploy a new smart contract.
- **Manage Contracts**: View existing contracts, extend durations, update receiver addresses, or withdraw funds directly from the dashboard.

## Project Structure

```plaintext
Income.stream/
├── backend/            # Backend (Express API)
│   ├── controllers/    # Controller files for handling API logic
│   ├── models/         # Models for database (if applicable)
│   ├── routes/         # API routes
│   ├── server.js       # Entry point for the backend server
│   └── ...             # Other backend files and configurations
│
├── client/             # Frontend (React)
│   ├── src/
│   │   ├── assets/          # Images, logos, etc.
│   │   ├── components/      # Reusable components (Header, Dashboard, etc.)
│   │   ├── pages/           # Main page components (Home, DashboardPage, etc.)
│   │   ├── services/        # API and utility functions (authService.js, web3Service.js, etc.)
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point of the application
│   │   └── styles.css       # Global and component-specific styles
│   └── public/              # Public assets like index.html
│
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── LICENSE              # License for the project
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch**: `git checkout -b feature-name`
3. **Commit your changes**: `git commit -m 'Add some feature'`
4. **Push to the branch**: `git push origin feature-name`
5. **Submit a pull request**

Please ensure your code follows the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Created by [Jishnu Baruah](https://github.com/jishnu-baruah) - feel free to reach out for collaboration or questions.

---

This README now reflects the structure of your project, with separate `backend` and `client` directories, and provides clear instructions for setting up and running the project.
