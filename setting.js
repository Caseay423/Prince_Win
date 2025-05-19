const brightnessSlider = document.getElementById("brightness");

brightnessSlider.addEventListener("input", () => {
  document.body.style.filter = `brightness(${brightnessSlider.value})`;
});