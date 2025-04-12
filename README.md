 Bootstrap Portfolio - Showit-Inspired Website

This project is a simplified recreation of the website [Showit.com](https://showit.com), built with **HTML**, **CSS**, **Bootstrap**, and **JavaScript**.

It showcases responsive web design principles, Bootstrap components, and JavaScript logic to simulate future interactive features.

---

Live Website Features
 Navbar
- Responsive navigation bar with 3 links: Home, About, and Contact

Hero Section
- Large heading, subheading, and call-to-action button

About Section
- Highlights 3 features with icons (Drag & Drop Editor, Responsive Layout, Strong Community)

Contact Form
- Includes 3 fields: name (text), email (email), and date (date)

Plans Table
- Displays 3 pricing tiers (Basic, Pro, Business)

Bootstrap Components Used
1. **Carousel** - Showcases sample site designs or inspiration images
2. **Modal** - Reveals extra information about features
3. **Accordion** - FAQ section with collapsible answers

---

JavaScript Functions (Part 2)
These simulate future enhancements using functions, arrays, and strings. They’re not connected to the UI yet.

### 1. `validateEmail(email)`
Checks if the email includes `@` and `.`
```js
validateEmail("test@example.com") // true
```

### 2. `getRandomFeature()`
Returns a random feature from the About section.
```js
getRandomFeature() // "Responsive Layout"
```

### 3. `getTotalPrice()`
Adds prices of all plans and returns the total.
```js
getTotalPrice() // "59.97"
```

### 4. `addFeedback(message)`
Pushes feedback to a message array.
```js
addFeedback("Love this site!") // ["Love this site!"]
```

### 5. `isFormComplete(name, email, date)`
Returns true if all fields are filled.
```js
isFormComplete("Luis", "email@site.com", "04-10-2025") // true
```

---

Project Structure
```
project-folder/
│
├── index.html          # Main HTML file with Bootstrap layout
├── styles.css          # Custom styles
├── script.js           # JavaScript file (interactive + simulated features)
└── README.md           # This file
```

---
 How to Run
1. Clone the repo
2. Open `index.html` in your browser
3. Optional: host on GitHub Pages for deployment

---

 Inspiration
This project was inspired by the aesthetic and clean structure of **Showit.com**, adapted for learning purposes.

---
Contact
Created by **Luis** as part of a Software egnineer bootcamp. 
