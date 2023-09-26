// Fonction pour créer une modale
function createModal(modalId, modalTitle, modalImage1, modalImage2, text1, text2) {
    const modalContainer = document.getElementById("modalContainer");

    // Créer la structure HTML de la modale
    const modal = document.createElement("div");
    modal.id = modalId;
    modal.className = "modal";

    const modalContent = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('${modalId}')">&times;</span>
            <h2>${modalTitle}</h2>
            <div class="modal-images">
                <img src="${modalImage1}" alt="${modalTitle} Image 1">
                <img src="${modalImage2}" alt="${modalTitle} Image 2">
            </div>
            <div class="modal-text">
                <p>${text1}</p>
                <p>${text2}</p>
            </div>
        </div>
    `;

    modal.innerHTML = modalContent;

    // Ajouter la modale au conteneur
    modalContainer.appendChild(modal);
}

// Appeler createModal pour chaque modale avec des données différentes
createModal("booki1", "Modale Booki", "booki-1.jpg", "booki-2.jpg", "Texte 1 pour Booki", "Texte 2 pour Booki");
createModal("sophie1", "Modale Sophie Bluel", "sophiebluel1.jpg", "sophiebluel2.jpg", "Texte 1 pour Sophie Bluel", "Texte 2 pour Sophie Bluel");
createModal("carducci1", "Modale Nina Carducci", "carducci-1.jpg", "carducci-2.jpg", "Texte 1 pour Nina Carducci", "Texte 2 pour Nina Carducci");
createModal("kasa1", "Modale Kasa", "kasa-1.jpg", "kasa-2.jpg", "Texte 1 pour Kasa", "Texte 2 pour Kasa");

// Fonction pour ouvrir une modale
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Fonction pour fermer une modale
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Associer la fonction openModal à chaque carte
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal-target");
        openModal(modalId);
    });
});