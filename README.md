# Lit with Navigo Example

This is a simple example project that demonstrates how to use Navigo for client-side routing in a LitElement-based web application.

## Overview

This project showcases the integration of Navigo, a lightweight client-side router, with LitElement, a simple and lightweight web component library. It provides a basic setup for handling different routes within a single-page application.

## Installation

To run this example locally, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/example-lit-with-navigo.git
    ```

2. Navigate into the project directory:

    ```bash
    cd example-lit-with-navigo
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your web browser and navigate to `http://localhost:8080` to view the example application.

## Usage

The example application consists of three routes:

- `/` (Home): Displays a welcome message.
- `/about`: Provides information about the application.
- `/contact`: Displays contact information.

You can navigate between these routes using the navigation links in the application header.

## Structure

The project structure is as follows:

- `index.html`: The main HTML file that imports and renders the LitWithNavigo component.
- `src/LitWithNavigo.js`: The main LitElement component where routing logic is implemented.
- `demo/index.html`: A working demo.

## Technologies Used

- [LitElement](https://lit.dev/docs/): A simple base class for creating fast, lightweight web components.
- [Navigo](https://github.com/krasimir/navigo): A lightweight and simple JavaScript router.
- [npm](https://www.npmjs.com/): Node package manager used for managing project dependencies and scripts.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[Horacio Gonzalez](https://github.com/LostInBrittany)
