# Heymax Monorepo

Welcome to the Heymax Monorepo! This repository contains two applications:

1. **Web Application** - Built with Next.js
2. **Mobile Application** - Built with Expo (React Native)

This monorepo is designed to streamline development and ensure consistency across both platforms. Below are the instructions to set up and run the projects locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Yarn](https://yarnpkg.com/) (v1 or v2)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (for the mobile app)

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/heymax-monorepo.git
    cd heymax-monorepo
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

## Running the Applications

1. **Development Mode**

    To run both the web and mobile applications in development mode, use the following command:

    ```bash
    yarn dev
    ```

    This will start:
    - The Next.js web app on http://localhost:3000
    - The Expo mobile app (you can scan the QR code with the Expo Go app to view it on your device)

    **Note:** If QR Code exists, you can use your IP to connect with the following format: `exp://192.168.x.x:8081`

2. **Running Specific Apps**

    If you want to run only one of the applications, use the --filter flag:

    #### Web Application (Next.js)

    ```bash
    yarn dev --filter=web
    ```

    This will start the Next.js web app on http://localhost:3000

    #### Mobile Application (Expo)

    ```bash
    yarn dev --filter=mobile
    ```

    This will start the Expo mobile app (you can scan the QR code with the Expo Go app to view it on your device)

    **Note:** If QR Code exists, you can use your IP to connect with the following format: `exp://192.168.x.x:8081`

    ## Unit Test
    To run test, use the following command
    ```bash
    yarn test
    ```