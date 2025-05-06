document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to My Site!";
  let index = 0;

  function type() {
    document.getElementById("typing-text").textContent = text.slice(0, index++);
    if (index <= text.length) {
      setTimeout(type, 100);
    }
    // Removed else block to prevent repeating
  }

  type();
});
