const mintAddress = "Hu1p8Yrmu7pUYTfhsiKowieLUUaWX6GyUW4iX8KWhFhJ";
const network = "devnet";
const metadataUrl =
  "https://helios120.github.io/heliosastro-chls9/assets/token-metadata.json";

const mintAddressElement = document.getElementById("mintAddress");
const copyMintBtn = document.getElementById("copyMintBtn");
const explorerMintLink = document.getElementById("explorerMintLink");
const metadataLink = document.getElementById("metadataLink");

if (mintAddressElement) {
  mintAddressElement.textContent = mintAddress;
}

if (explorerMintLink) {
  explorerMintLink.href =
    `https://explorer.solana.com/address/${mintAddress}?cluster=${network}`;
}

if (metadataLink) {
  metadataLink.href = metadataUrl;
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
