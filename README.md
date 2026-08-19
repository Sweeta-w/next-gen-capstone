# NextGenLearners — Mini Applicant Dashboard

A frontend-only applicant dashboard that simulates a real internship portal experience.

This project allows users to sign up or log in, view a personalized dashboard, see their internship application status, and track their application progress.

The project uses `localStorage` to simulate authentication and user data without a backend.

---

## Features

- User Signup with Name, Email, and Password
- User Login with Email and Password
- Frontend-only authentication using `localStorage`
- Automatic redirect to the dashboard after successful login/signup
- Protected dashboard page
- Personalized welcome message using the logged-in user's name
- Applications list with:
  - Applied domain
  - Application date
  - Application status
- Status badges for:
  - Under Review
  - Selected
  - Rejected
- Application progress tracker:
  - Applied
  - Interview
  - Result
- Logout functionality
- Responsive design for desktop, tablet, and mobile
- Modular JavaScript structure
- Clean and consistent NextGenLearners color theme

---

## Tech Used

- HTML5
- CSS3
- JavaScript
- localStorage
- Responsive CSS
- CSS Flexbox
- CSS Grid

---

## Project Structure

```text
nextgen-week4-capstone/
│
├── login.html
├── dashboard.html
├── style.css
├── auth.js
├── dashboard.js
├── data.json
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
