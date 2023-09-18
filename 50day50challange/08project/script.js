const labels = document.querySelectorAll("label");
console.log(labels);

labels.forEach((label) => {
  const text = label.innerText;
  label.innerHTML = "";
  for (i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.style.transitionDelay = `${i * 50}ms`;
    console.log(span);
    label.appendChild(span);
  }
});
console.log(labels[0]);

function lettermap(letter, index) {
  return `<span style="transition-delay:${index * 50}ms">${letter}</span>`;
}
