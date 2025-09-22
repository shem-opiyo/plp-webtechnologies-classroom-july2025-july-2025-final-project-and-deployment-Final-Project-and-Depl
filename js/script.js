// Add to cart simulation
function addToCart() {
  alert("Product added to cart!");
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("All fields are required!");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
