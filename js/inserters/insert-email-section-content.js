export const insertEmailSectionContent = (data) => {
  const sectionEmail = document.querySelector(".section-email");

  if (sectionEmail) {
    sectionEmail.innerHTML = `
      <h2>${data.emailBlock.phrase}</h2>
      <p class="email">${data.emailBlock.email}</p>
    `;
  }
};
