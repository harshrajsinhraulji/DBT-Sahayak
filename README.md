# 🩸 DBT Sahayak

A comprehensive web application dedicated to raising awareness about blood donation and facilitating the process of connecting donors with those in need.  
This project was built as part of a **Smart India Hackathon challenge** and focuses on **health, awareness, and DBT (Direct Benefit Transfer) scheme accessibility**.

---

## ✨ Features

| Category              | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **User Authentication** | Secure user registration and login system with Firebase.                  |
| **DBT Information**      | Detailed section about Direct Benefit Transfer (DBT) schemes.             |
| **Awareness & Education** | Myth-busting, awareness campaigns, and educational resources.             |
| **Request & Donate**     | Users can request blood donations or offer to donate directly.            |
| **Admin Dashboard**      | Secure admin dashboard to monitor and manage requests.                   |
| **Status Checker**       | Tool for users to track request/donation status.                         |
| **Scholarship Info**     | Information hub for government and private scholarships.                 |
| **AI Chatbot**           | Interactive AI-powered chatbot for instant user query resolution.        |
| **Language & Theme Switcher** | Multi-language support and dark/light mode.                          |

---

## 🛠️ Tech Stack

| Layer       | Technology Used                          |
|-------------|-------------------------------------------|
| **Frontend** | Next.js, React, TypeScript, Tailwind CSS |
| **Backend**  | Firebase (Auth + Firestore Database)     |
| **Deployment** | Firebase Hosting / Vercel               |

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) and npm (or yarn)
- [Firebase Account](https://firebase.google.com/) with a project configured

### 📥 Installation

1. **Clone the repository**
   ```
    git clone https://github.com/harshrajsinhraulji/DBT-Sahayak.git```

2. **Navigate to project folder**    
    ```
   cd DBT-Sahayak```


3. **Install dependencies**
  ```
npm install```


4. **Setup environment variables**

    -Create a file named .env.local in the root directory
    -Add your Firebase configuration:

        ```NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
        NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
        NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id```


5. **Run the development server**
```
    npm run dev```

6. **Access the app**

    Open your browser and go to:
    👉 ```http://localhost:3000```


## 📂 Project Structure
```
/DBT-Sahayak/
|-- src/
|   |-- app/                # Next.js app pages
|   |-- components/         # Reusable React components
|   |-- hooks/              # Custom React hooks
|   |-- lib/                # Utility functions and helpers
|-- public/                 # Static assets
|-- .env.local              # Environment variables
|-- next.config.ts          # Next.js configuration
|-- package.json            # Project dependencies
`-- README.md               # Documentation```

📊 Hackathon Deliverables
Deliverable	Status
Core Application	✅ Completed
Admin Dashboard	✅ Completed
Blood Donation System	✅ Completed
DBT Awareness Section	✅ Completed
AI Chatbot	⚡ Integrated
Multilingual Support	✅ Completed
Theme Switcher	✅ Completed
📄 License
⚠️ Proprietary License – All Rights Reserved

This project is NOT open source.

✅ You may view the code for evaluation or demonstration purposes.

❌ You may NOT copy, modify, redistribute, or use this project/code without explicit written permission from the authors.

❌ Commercial use, deployment, or redistribution is strictly prohibited.

🏆 Intended strictly for hackathon submission and demonstration purposes.

© 2025 DBT Sahayak Hackathon Team. All rights reserved.

📞 Contact

For queries regarding this project:

Author: Harshrajsinh Raulji

GitHub: harshrajsinhraulji

Email: h.raulji2005@gmail.com