export const insertAboutMeShort = (data) => {
  const aboutMeShort = document.querySelector(".about-me-short");

  if (aboutMeShort) {
    aboutMeShort.innerHTML = `
      <p class="cv-greeting-phrase">${data.me.greetingPhrase}</p>
      <div class="cv-who-am-i">
        <h1 class="cv-name">${data.me.name}</h1>
        <p class="cv-role">${data.me.role}</p>
      </div>
    `;
  }
};
