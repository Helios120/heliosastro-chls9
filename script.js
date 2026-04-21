function copyTextFromElement(elementId, buttonId, successLabel = "Copié") {
  const el = document.getElementById(elementId);
  const btn = document.getElementById(buttonId);

  if (!el || !btn) return;

  btn.addEventListener("click", async () => {
    const text = el.textContent.trim();
    const original = btn.textContent;

    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = successLabel;
      setTimeout(() => {
        btn.textContent = original;
      }, 1500);
    } catch (error) {
      btn.textContent = "Erreur";
      setTimeout(() => {
        btn.textContent = original;
      }, 1500);
      console.error("Copie impossible :", error);
    }
  });
}

copyTextFromElement("mintAddress", "copyMintBtn");
copyTextFromElement("walletAddress", "copyWalletBtn");
