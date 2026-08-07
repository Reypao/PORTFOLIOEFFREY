const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const textToCopy = button.dataset.copy;
    const originalText = button.textContent;

    try {
      await navigator.clipboard.writeText(textToCopy);

      button.textContent = "Copiado ✓";

      setTimeout(() => {
        button.textContent = originalText;
      }, 1800);
    } catch (error) {
      console.error("No se pudo copiar el correo:", error);
    }
  });
});