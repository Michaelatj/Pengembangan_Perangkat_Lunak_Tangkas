document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent = "Terima kasih! Pesan Anda telah dikirim.";
  this.reset();
});
