export const insertAboutMeShort = (data) => {
  const aboutMeShort = document.querySelector(".about-me-short");

  if (aboutMeShort) {
    aboutMeShort.innerHTML = `
      <p class="cv-greeting-phrase" contenteditable="true" data-cvdatapath="me.greetingPhrase">${data.me.greetingPhrase}</p>
      <div class="cv-who-am-i">
        <h1 class="cv-name" contenteditable="true" data-cvdatapath="me.name">${data.me.name}</h1>
        <p class="cv-role" contenteditable="true" data-cvdatapath="me.role">${data.me.role}</p>
      </div>
    `;
  }
};
