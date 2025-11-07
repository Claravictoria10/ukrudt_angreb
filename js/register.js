console.log("loaded..");

const form = document.querySelector("form");
const infoBox = document.querySelector(".info-box");

// Stop refresh og sæt fokus på første ugyldige felt
function cancelPopup(event) {
  event.preventDefault();
  const firstInvalid = form.querySelector(":invalid");
  if (firstInvalid) firstInvalid.focus();
}
form.addEventListener("invalid", cancelPopup, true);

// Håndter 'submit'
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Hent data fra formularen
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const time = formData.get("time");
  const tekst = formData.get("text") || "";
  const accept = formData.get("accept_terms");

  // Erstat info-box med oplysninger og knapper
  infoBox.innerHTML = `
  <div class="user-data">
    <h3>Dine oplysninger:</h3>
    <p><strong>Navn:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Tidspunkt:</strong> ${time}</p>
    <p><strong>Yderligere info:</strong> ${tekst}</p>
    <div>
      <button id="approveBtn">Godkend</button>
      <button id="deleteBtn" class="delete">Slet</button>
    </div>
    <p class="approval-message" style="color: green; font-weight: bold; display: none;"></p>
  </div>
`;

  // Find knapper og besked **efter DOM er opdateret**
  const approveBtn = document.getElementById("approveBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const approvalMessage = infoBox.querySelector(".approval-message");

  // Godkend-knap: vis besked på siden
  approveBtn.addEventListener("click", () => {
    approvalMessage.textContent = "Dine oplysninger er godkendt!";
    approvalMessage.style.display = "block";
  });

  // Tilføj funktion til Slet-knap
  document.getElementById("deleteBtn").addEventListener("click", () => {
    form.reset();
    infoBox.innerHTML = `
      <h3>Information:</h3>
      <br>
      <p>
        Vi benytter dine oplysninger til at finde og dræbe det farlige ukrudt, du modtager en mail, når vi har læst din indberetning og igen en mail, når indberetningen er undersøgt og løst.
      </p>
      <br>
      <br>
      <p>
        Dine oplysninger bliver i vores system i 2 måneder, hvor efter det slettes. Vi beholder yderligere dine informationer, hvis sagen ikke er lukket inde for 2 måneder, her vil du modtage en mail, om hvorvidt vi må beholde dine oplysninger, hvis du her siger nej, slettes din sag også.
      </p>
    `;
  });
});
