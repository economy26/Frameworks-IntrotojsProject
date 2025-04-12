// script.js

// 1. Validate email address input
function validateEmail(email) {
    // Returns true if email includes both "@" and "."
    return email.includes("@") && email.includes(".");
  }
  console.log(validateEmail("test@example.com")); // true
  
  // 2. Simulate picking a random feature (from the About section)
  const features = ["Drag & Drop Editor", "Responsive Layout", "Strong Community"];
  
  function getRandomFeature() {
    const index = Math.floor(Math.random() * features.length);
    return features[index];
  }
  console.log(`Today's spotlight feature: ${getRandomFeature()}`);
  
  // 3. Calculate total of a cart with selected plans
  const planPrices = [9.99, 19.99, 29.99];
  
  function getTotalPrice() {
    return planPrices.reduce((total, price) => total + price, 0).toFixed(2);
  }
  console.log(`Total cost of all plans: $${getTotalPrice()}`);
  
  // 4. Simulate saving user feedback
  let feedbackMessages = [];
  
  function addFeedback(message) {
    feedbackMessages.push(message);
    return feedbackMessages;
  }
  console.log(addFeedback("This site is beautiful and easy to use!"));
  
  // 5. Simulate checking form completion
  function isFormComplete(name, email, date) {
    return name !== "" && email !== "" && date !== "";
  }
  console.log(isFormComplete("Luis", "luis@example.com", "2025-04-10")); // true
  