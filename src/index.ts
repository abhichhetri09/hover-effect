import { HoverEffect } from "./hover-effect";

function initHoverEffect() {
  try {
    console.log("Attempting to create HoverEffect instance");
    const hoverEffect = new HoverEffect();
    console.log("HoverEffect instance created successfully");
    console.log("Calling init method");
    hoverEffect
      .init()
      .then(() => {
        console.log("HoverEffect initialized successfully");
        console.log("You can now hover over the elements to see the effect");
      })
      .catch((error) => {
        console.error("Error initializing HoverEffect:", error);
      });
  } catch (error) {
    console.error("Error creating HoverEffect instance:", error);
  }
}

console.log("Script started");
if (document.readyState === "complete") {
  initHoverEffect();
} else {
  window.addEventListener("load", initHoverEffect);
}
console.log("Script ended");
