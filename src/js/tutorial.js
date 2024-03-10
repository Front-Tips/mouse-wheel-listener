function scrollDirection(e) {
  // Define the scroll direction
  // Based on `deltaY` value
  const direction = e.deltaY > 0 ? "down" : "up";

  document.getElementById("message").innerHTML =
    direction === "up"
      ? // When scrolling up
        `<span>👆</span> scroll ${direction}`
      : // When scrolling down
        `scroll ${direction} <span>👇</span>`;
}

// Add the `wheel` event listener
window.addEventListener("wheel", scrollDirection);
