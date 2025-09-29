# 🎓 DBT Sahayak

A comprehensive platform built for the **Smart India Hackathon** to solve a critical issue for students: the delay in scholarship payments due to confusion between Aadhaar-linked and DBT-seeded bank accounts. DBT Sahayak serves as a centralized awareness, verification, and support tool to empower students and ensure they receive their Direct Benefit Transfer (DBT) funds on time.

---

## ✨ Features

Our platform is packed with innovative features designed to guide students from confusion to resolution.

| Category | Description |
| :--- | :--- |
| **DBT Status Checker** | A guided, 1-click tool that directs users to the official UIDAI portal to instantly check their bank's DBT seeding status. |
| **Personalized Dashboard**| Secure user accounts (Firebase Auth) to track seeding status, quiz progress, and save helpful resources. |
| **Gamified Learning** | Interactive quizzes to educate students on the difference between Aadhaar Linking vs. Seeding, awarding certificates to "DBT Champions." |
| **"Digital Advocate"** | An innovative on-site tool that provides official government circulars and audio guidance when a student faces issues at a bank. |
| **Multilingual Support** | Full internationalization for English and regional languages to ensure accessibility for all students. |
| **AI Chatbot "Aadhaar Dost"** | A 24/7 AI assistant to answer complex questions about the DBT process, scholarships, and documentation. |
| **Resource Hub** | A one-stop portal for official forms, step-by-step video guides, and scholarship information. |
| **Admin Dashboard** | A backend dashboard for visualizing a real-time, anonymized map of user-reported issues (The "Issue Hotspot Map"). |

---

## 🛠️ Tech Stack

| Layer | Technology Used |
| :--- | :--- |
| **Frontend** | Next.js, React, TypeScript, Tailwind CSS |
| **Backend** | Firebase (Auth + Firestore Database) |
| **Deployment** | Vercel / Firebase Hosting |

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) and npm (or yarn)
- [Firebase Account](https://firebase.google.com/) with a project configured

### 📥 Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/harshrajsinhraulji/DBT-Sahayak.git](https://github.com/harshrajsinhraulji/DBT-Sahayak.git)
    ```

2.  **Navigate to project folder**
    ```bash
    cd DBT-Sahayak
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Setup environment variables**
    - Create a file named `.env.local` in the root directory.
    - Add your Firebase configuration:
      ```
      NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
      NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
      ```

5.  **Run the development server**
    ```bash
    npm run dev
    ```

6.  **Access the app**
    Open your browser and go to:
    👉 `http://localhost:3000`

## 📂 Project Structure
/DBT-Sahayak/
|-- src/
|   |-- app/              # Next.js app pages
|   |-- components/       # Reusable React components
|   |-- hooks/            # Custom React hooks
|   |-- lib/              # Utility functions and helpers
|-- public/               # Static assets
|-- .env.local            # Environment variables
|-- next.config.ts        # Next.js configuration
|-- package.json          # Project dependencies
`-- README.md             # Documentation

## 📊 Key Features Status
| Deliverable | Status |
| :--- | :--- |
| Core Application | ✅ Completed |
| Admin Dashboard ("Hotspot Map") | ✅ Completed |
| On-Site "Digital Advocate" | ✅ Completed |
| DBT Awareness & Learning Hub | ✅ Completed |
| AI Chatbot | ⚡ Integrated |
| Multilingual Support | ✅ Completed |
| Theme Switcher | ✅ Completed |

## 📄 License
⚠️ **Proprietary License – All Rights Reserved**

This project is NOT open source.

✅ You may view the code for evaluation or demonstration purposes.

❌ You may NOT copy, modify, redistribute, or use this project/code without explicit written permission from the authors.

❌ Commercial use, deployment, or redistribution is strictly prohibited.

🏆 Intended strictly for hackathon submission and demonstration purposes.

© 2025 Code Technicians Hackathon Team. All rights reserved.

## 📞 Contact

For queries regarding this project:

- **Author:** Harshrajsinh Raulji
- **GitHub:** [harshrajsinhraulji](https://github.com/harshrajsinhraulji)
- **Email:** h.raulji2005@gmail.com
