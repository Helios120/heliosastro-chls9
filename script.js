const mintAddress = "REMPLACE_ICI_PAR_TON_ADRESSE_MINT";
const network = "devnet";

const mintAddressElement = document.getElementById("mintAddress");
const copyMintBtn = document.getElementById("copyMintBtn");
const explorerMintLink = document.getElementById("explorerMintLink");

if (mintAddressElement) {
  mintAddressElement.textContent = mintAddress;
}

if (explorerMintLink) {
  explorerMintLink.href = `https://explorer.solana.com/address/${mintAddress}?cluster=${network}`;
}

if (copyMintBtn) {
  copyMintBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(mintAddress);
      copyMintBtn.textContent = "Adresse copiée";
      setTimeout(() => {
        copyMintBtn.textContent = "Copier l’adresse";
      }, 1800);
    } catch (error) {
      copyMintBtn.textContent = "Copie impossible";
      setTimeout(() => {
        copyMintBtn.textContent = "Copier l’adresse";
      }, 1800);
    }
  });
}
