# Medication Support Record System

This project is a web application designed to record the value of medication support. It was developed to help pharmacists and medical personnel quickly log data, featuring a modern, user-friendly design that is responsive across all devices.

## 🎉 Features

-   **Easy-to-Use Form Interface:** Designed for convenient and rapid data entry.
-   **Real-time Data Saving:** Connects to a Supabase database, ensuring immediate data persistence.
-   **Engaging Animations:** The save button includes animations for an enhanced user experience.
-   **Mobile-First Responsiveness:** The design adapts perfectly to various screen sizes, whether accessed on mobile, tablet, or desktop.
-   **Notifications:** Utilizes SweetAlert2 to provide users with feedback on data saving results (success/failure).

## 🛠️ Tech Stack

-   **Frontend:** HTML5, CSS3 (Flexbox, Media Queries), JavaScript (ES6+)
-   **Backend:** [Supabase](https://supabase.io/) (Database & Instant APIs)
-   **Deployment:** [Firebase Hosting](https://firebase.google.com/docs/hosting)
-   **Libraries:** [SweetAlert2](https://sweetalert2.github.io/)

## 🏁 Getting Started (for Developers)

If you wish to further develop this project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pharmacist-sabot/med-support-record-app.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd med-support-record-app
    ```

3.  **Supabase Setup:**
    -   This project requires a Supabase API Key and a private URL for connection.
    -   You must create a project on [Supabase](https://supabase.io/) and insert your `SUPABASE_URL` and `SUPABASE_ANON_KEY` into the `config.js` file (or whichever file you use for connection management) to enable data saving.

4.  **Open `index.html` in your browser to start using the application.**

## ✍️ Author

-   Pharm. Suradet Prathomsak

## 📄 License

This project is licensed under the MIT License.
