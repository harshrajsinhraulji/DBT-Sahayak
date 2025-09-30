
<div align="center">
  <img src="https://github.com/harshrajsinhraulji/DBT-Sahayak/assets/96282159/e29a8a38-c0b9-4796-9049-5f111a8433a2" alt="DBT Sahayak Logo" width="150"/>
  # 🎓 DBT Sahayak
  <p>
    <b>A comprehensive platform to address the critical issue of scholarship payment delays due to confusion between Aadhaar-linked and DBT-seeded bank accounts.</b>
  </p>
  <p>
    <img src="https://img.shields.io/badge/license-Proprietary-red" alt="License"/>
    <img src="https://img.shields.io/badge/status-Completed-brightgreen" alt="Status"/>
    <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js"/>
    <img src="https://img.shields.io/badge/Firebase-10-orange?logo=firebase" alt="Firebase"/>
    <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript"/>
  </p>
</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [✅ Prerequisites](#-prerequisites)
  - [📥 Installation](#-installation)
  - [⚙️ Configuration](#️-configuration)
- [📂 Project Structure](#-project-structure)
- [📊 Key Deliverables Status](#-key-deliverables-status)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## 📍 About The Project

**DBT Sahayak** was built for the **Smart India Hackathon** to solve a pervasive problem faced by students across India: the delay or failure of scholarship payments. The root cause is often a misunderstanding between a simple Aadhaar-linked bank account and a **DBT-seeded** (Direct Benefit Transfer) account, which is mandatory for receiving government subsidies.

Our platform serves as a centralized hub for:
- **Awareness:** Educating students on the critical difference between linking and seeding.
- **Verification:** Providing a simple, guided tool to check their bank account's DBT status.
- **Support:** Offering on-site digital tools and resources to resolve issues when they arise at a bank or government office.

Our goal is to empower students, reduce administrative friction, and ensure that financial aid reaches them on time.

---

## ✨ Key Features

| Feature | Description | Status |
| :--- | :--- | :---: |
| **DBT Status Checker** | A 1-click guided tool that directs users to the official UIDAI portal to instantly check their bank's DBT seeding status. | ✅ |
| **Personalized Dashboard**| Secure user authentication via Firebase to track seeding status, quiz progress, and bookmark helpful resources. | ✅ |
| **Gamified Learning** | Interactive quizzes to teach the difference between Aadhaar Linking vs. Seeding. Users earn a "DBT Champion" certificate upon completion. | ✅ |
| **"Digital Advocate"** | An on-site tool providing official government circulars and audio guidance to help students advocate for themselves at a bank. | ✅ |
| **Multilingual Support** | Full internationalization for English and regional languages to ensure nationwide accessibility. | ✅ |
| **AI Chatbot "Aadhaar Dost"** | A 24/7 AI assistant trained to answer complex questions about the DBT process, scholarships, and required documentation. | ⚡ |
| **Resource Hub** | A centralized portal for official forms, step-by-step video guides, and scholarship information. | ✅ |
| **Admin "Issue Hotspot" Map** | A backend dashboard for visualizing a real-time, anonymized map of user-reported issues across different regions. | ✅ |

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js) ![React](https://img.shields.io/badge/React-18-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-cyan?logo=tailwind-css) |
| **Backend** | ![Firebase](https://img.shields.io/badge/Firebase-10-orange?logo=firebase) (Authentication + Firestore) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel) / ![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-orange?logo=firebase) |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- `npm` or `yarn`
- [Firebase Account](https://firebase.google.com/) with a project created.

### 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshrajsinhraulji/DBT-Sahayak.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd DBT-Sahayak
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### ⚙️ Configuration

1. **Create an environment file:**
   Create a file named `.env.local` in the root of your project.

2. **Add Firebase credentials:**
   You need to populate `.env.local` with your Firebase project's configuration keys.

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## 📂 Project Structure

Here is an overview of the key directories in the project:

```
/DBT-Sahayak/
|-- src/
|   |-- app/              # Next.js App Router pages and layouts
|   |-- components/       # Reusable React components (UI, forms, etc.)
|   |-- hooks/            # Custom React hooks for shared logic
|   |-- lib/              # Utility functions, Firebase config, and helpers
|-- public/               # Static assets (images, fonts)
|-- .env.local            # Local environment variables (untracked)
|-- next.config.ts        # Next.js configuration file
|-- package.json          # Project dependencies and scripts
`-- README.md             # This file
```

---

## 📊 Key Deliverables Status

| Deliverable | Status |
| :--- | :--- |
| Core Application | ✅ Completed |
| Admin Dashboard ("Hotspot Map") | ✅ Completed |
| On-Site "Digital Advocate" | ✅ Completed |
| DBT Awareness & Learning Hub | ✅ Completed |
| AI Chatbot Integration | ⚡ Integrated |
| Multilingual Support | ✅ Completed |
| UI/UX Theme Switcher | ✅ Completed |

---

## 📄 License

⚠️ **Proprietary License – All Rights Reserved**

This project is not open source and is protected under copyright law.

- ✅ You **may** view the code for evaluation or demonstration purposes.
- ❌ You **may NOT** copy, modify, redistribute, or use this project/code in any form without explicit written permission from the authors.
- ❌ Commercial use, public deployment, or redistribution is **strictly prohibited**.

This project was created for the Smart India Hackathon and is intended for demonstration purposes only.

© 2025 Code Technicians Hackathon Team. All rights reserved.

---

## 📞 Contact

For any questions or inquiries regarding this project, please feel free to reach out:

- **Author:** Harshrajsinh Raulji
- **GitHub:** [harshrajsinhraulji](https://github.com/harshrajsinhraulji)
- **Email:** [h.raulji2005@gmail.com](mailto:h.raulji2005@gmail.com)
