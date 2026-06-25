document.querySelectorAll("[data-href]").forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.getAttribute("data-href");
    if (target) {
      window.location.href = target;
    }
  });
});
