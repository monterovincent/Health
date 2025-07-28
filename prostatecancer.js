
const tips = [
  "Exercise regularly—aim for 150+ minutes/week.",
  "Eat more plant‑based foods: fruits, veggies, nuts.",
  "Avoid high‑fat dairy, processed meats, and sugar.",
  "Keep a healthy weight and avoid obesity.",
  "Discuss PSA screening and MRI with your doctor."
];

document.getElementById("tipBtn").addEventListener("click", () => {
  const idx = Math.floor(Math.random() * tips.length);
  document.getElementById("tip").innerText = tips[idx];
});
