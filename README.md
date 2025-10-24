# 🌟 Profile Card, About Me & Contact Page

A fully responsive, accessible, and semantic multi-page frontend project built using HTML, CSS, and Vanilla JavaScript.
This project was developed as part of the Frontend Wizards Cohort — Stage 0 & 1 Tasks, showcasing attention to accessibility, responsive layouts, and clean UI design.

## 🚀 Live Demo

- 🔗 Live Site: https://alasesam-5484d8.netlify.app/

## 🧭 Table of Contents

- Overview
- Features
- Technologies Used
- Accessibility & Semantics
- Preview
- Pages Overview
- Technologies Used
- Responsiveness
- Project Structure
- How to Run Locally
- Author

## 📝 Overview

This project builds upon the Stage 0 Profile Card task by introducing two additional pages — a Contact Us page (with validation and accessibility features) and an About Me page (showcasing personal reflections).

The overall project demonstrates:

- Semantic and accessible HTML.

- Responsive design principles.

- Vanilla JavaScript form validation.

- Modular, readable, and maintainable codebase.

## ✨ Features

### ✅ Profile Card Page

Displays user name, avatar, bio, social links, current time (ms), hobbies, and dislikes.

Accessible and responsive layout using semantic HTML elements (<article>, <header>, <figure>, <nav>, <section>).

Dynamic time display using Date.now().

### ✅ Contact Us Page

Includes form fields for Full Name, Email, Subject, and Message.

Inline error and success messages using ARIA attributes for screen readers.

Validates:

- All fields are required.

- Email format is valid.

- Message must be at least 10 characters.

- Fully keyboard-navigable and responsive.

### ✅ About Me Page

Showcases bio, goals, areas of low confidence, a note to future self, and extra reflections.

Structured using semantic <main> and <section> elements.

Organized and readable layout with styled headings and lists.

## 🛠️ Technologies Used

- HTML5 — Semantic, accessible markup

- CSS3 — Responsive design with Flexbox and Grid

- Vanilla JavaScript — Form validation & real-time updates

- Google Fonts (Poppins, Roboto) — Modern typography

- Netlify — For hosting and deployment

## ♿ Accessibility & Semantics

This project follows accessibility best practices:

All interactive elements (links, buttons) are keyboard-focusable.

Inputs use <label> elements associated via for attributes.

Error messages linked using aria-describedby.

Semantic structure:

- <article> for the profile card.

- <main> for page content.

- <section> for logical groupings.

- <figure> for avatar and caption.

- <nav> for social links.

- Uses visible focus outlines (:focus-visible) for accessibility.


## 📸 Preview
### 🪪 Profile Card Page

A simple yet elegant responsive profile card with avatar, bio, hobbies, dislikes, and social links.

### 💬 Contact Us Page

A form with validation for name, email, subject, and message — complete with accessible labels, ARIA roles, and dynamic success/error messages.

### 👤 About Me Page

A reflective page where I share my bio, goals, areas of low confidence, and a note to my future self.

Open `index.html` in your browser to view the component. The design is mobile-first (stacked layout) and adapts at these breakpoints:

- Tablet enhancements: `@media (min-width: 600px)`
- Desktop layout: `@media (min-width: 1000px)`

## Project structure

- `index.html` — markup for the profile card
- `contact.html` — markup for the contact page
- `about.html` — markup for the about page
- `style.css` — mobile-first stylesheet with CSS variables and media queries
- `index.js` — script for dynamic content (e.g., current time)
- `contact.js` — script for contact validation
- `README.md` — this file

## Quick start

1. Clone or download this project folder.

- git clone https://github.com/hademidey/HNG-Profile-Card.git
- cd HNG-Profile-Card

2. Open `index.html` in a browser (double-click or use your editor's Live Server extension).

## 🧑‍💻 Author

### 👋 Alase Samuel Ayo-Oluwa

Frontend Developer passionate about creating responsive, accessible, and user-friendly interfaces.

🌍 Based in Lagos, Nigeria
JAVASCRIPT
