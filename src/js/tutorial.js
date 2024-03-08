/* ------------------------ */
/*      scrollDirection     */
/* ------------------------ */
function scrollDirection(e) {
  // Define the scroll direction
  // based on deltaY value
  const direction =
    e.deltaY > 0 ? "down" : "up";

  // Choose the appropriate emoji
  // for the direction
  const emoji =
    direction === "down" ? "👇" : "👆";

  // Update `innetHTML`
  document.getElementById(
    "message"
  ).innerHTML = `<span>${emoji}</span> ${direction}`;
}

/* ------------------------ */
/*          Events          */
/* ------------------------ */
// Add the `wheel` event listener
window.addEventListener(
  "wheel",
  scrollDirection
);
