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


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional, for Docker installation)

### Installation

#### Docker Compose Installation

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



