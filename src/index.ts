import { HoverEffect } from "./hover-effect";

function initHoverEffect() {
  console.log("Initializing HoverEffect");

  const checkSettings = () => {
    if (window.upez__cart_settings) {
      console.log("UPEZ cart settings found:", window.upez__cart_settings);
      return true;
    }
    console.log("UPEZ cart settings not found, retrying...");
    return false;
  };

  const initializeEffect = () => {
    try {
      console.log("Creating HoverEffect instance");
      const hoverEffect = new HoverEffect();
      console.log("HoverEffect instance created successfully");

      console.log("Calling init method");
      hoverEffect.init();
      console.log("HoverEffect initialized successfully");
      console.log("You can now hover over the elements to see the effect");
    } catch (error) {
      console.error("Error initializing HoverEffect:", error);
    }
  };

  if (checkSettings()) {
    initializeEffect();
  } else {
    const maxAttempts = 10;
    let attempts = 0;
    const intervalId = setInterval(() => {
      attempts++;
      if (checkSettings()) {
        clearInterval(intervalId);
        initializeEffect();
      } else if (attempts >= maxAttempts) {
        clearInterval(intervalId);
        console.error(
          "Failed to find UPEZ cart settings after multiple attempts"
        );
      }
    }, 1000);
  }
}

console.log("HoverEffect script started");
if (document.readyState === "complete") {
  initHoverEffect();
} else {
  window.addEventListener("load", initHoverEffect);
}
console.log("HoverEffect script setup completed");
