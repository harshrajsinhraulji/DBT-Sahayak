# Next.js Project

This project is a web application built with Next.js, focusing on providing information and resources related to education and awareness.

## Features

*   **Informational Sections:** About, Awareness, Education, FAQ, Myth Busters, and Videos sections.
*   **Interactive Features:** A chatbot, scholarship information, and a status checker.
*   **User Authentication:** Login and signup pages.
*   **Dashboard:** A user dashboard.
*   **Organizational Chart:** A component to display an organizational chart.
*   **Print Kit:** A page for a print kit.
*   **UI Components:** A rich set of UI components for building the user interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/get-npm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/harshrajsinhraulji/DBT-Sahayak.git
    cd DBT-Sahayak
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    _or if you use yarn:_
    ```bash
    yarn install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the necessary environment variables. You will need to add your Firebase configuration here.

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Runs the linter.
*   `npm run typecheck`: Runs the TypeScript type checker.

## Deployment

To deploy this project, you can use any platform that supports Next.js applications, such as Vercel or Netlify. You will need to configure your environment variables on the deployment platform.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
