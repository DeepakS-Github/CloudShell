# CloudShell

CloudShell is a web-based terminal application built with Node.js and React.js. It allows you to execute shell commands from a web interface. The project is designed to be simple and easy to set up, with options for running in a Docker container using Docker Compose or manually.

## Features
- Interactive shell access through a web browser
- Supports Bash and other shell environments
- Real-time command execution and output display

## Architecture Overview

<p align="center">
  <img src="https://github.com/DeepakS-Github/CloudShell/assets/96366840/1d72c087-5ed9-49dc-8490-da8ab2a052ff" width="80%" alt="execution">
</p>

## Screenshots

<p align="center">
  <img src="https://github.com/DeepakS-Github/CloudShell/assets/96366840/991945e4-6bc9-4e3a-a309-577f8dc6d594" alt="Screenshot1" width="45%">
  <img src="https://github.com/DeepakS-Github/CloudShell/assets/96366840/0c2cb670-832c-4756-99df-314e28dd3a39" alt="Screenshot2" width="45%">
  <img src="https://github.com/DeepakS-Github/CloudShell/assets/96366840/c169c977-1aec-4cb4-9780-11f1e2073950" alt="Screenshot3" width="45%">
  <img src="https://github.com/DeepakS-Github/CloudShell/assets/96366840/253d88d4-53f5-43c0-bb57-af294a524b54" alt="Screenshot4" width="45%">
</p>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional, for Docker installation)

### Installation

#### Docker Compose Installation (may take some time)

1. **Clone the repository**

    ```sh
    git clone https://github.com/DeepakS-Github/CloudShell
    cd CloudShell
    ```

2. **Build and start the Docker containers**

    ```sh
    docker-compose up --build
    ```

3. **Access the web terminal**

    Open your browser and navigate to `http://localhost:3000`.

> **Note:** When you run the project in the Docker environment using Docker Compose, the server will run in an Ubuntu container which is independent from your computer environment.

#### Manual Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/DeepakS-Github/CloudShell
    cd CloudShell
    ```

2. **Install server dependencies**

    ```sh
    cd server
    npm install
    ```

3. **Install client dependencies**

    ```sh
    cd ../client
    npm install
    ```

4. **Build the client**

    ```sh
    npm run dev
    ```

5. **Start the server**

    ```sh
    cd ../server
    npm start
    ```

6. **Access the web terminal**

    Open your browser and navigate to `http://localhost:3000`.

> **Note:** When you use the manual installation and run the code, the shell will be linked to your computer's environment.

## Usage

- Open the web terminal in your browser.
- Type your commands and see the output in real time.

> **If you find this project helpful, we'd appreciate it if you could give it a star ⭐.**


