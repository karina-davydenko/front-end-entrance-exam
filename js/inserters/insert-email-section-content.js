export const insertEmailSectionContent = (data) => {
  const sectionEmail = document.querySelector(".section-email");

  if (sectionEmail) {
    sectionEmail.innerHTML = `
      <h2 contenteditable="true" data-cvdatapath="emailBlock.phrase">${data.emailBlock.phrase}</h2>
      <p class="email" contenteditable="true" data-cvdatapath="emailBlock.email">${data.emailBlock.email}</p>
    `;
  }
};
