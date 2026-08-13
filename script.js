function showMessage() {
  alert("Welcome to Natural Glow Up! 🍓");
}

function buyProduct(productName) {
  alert(
    "You selected: " +
    productName +
    "\n\nThank you for choosing Natural Glow Up! 🌸"
  );
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert(
    "Thank you, " +
    name +
    "! 💖 Your message has been received."
  );

  document.querySelector("form").reset();
                         }
