export const insertLanguagesSectionContent = (data) => {
  const sectionLanguages = document.querySelector(".section-languages");

  if (sectionLanguages) {
    const items = data.languages
      .map((language, index) => {
        return `
          <li>
            <span class="lang-skill-title" contenteditable="true" data-cvdatapath="languages.${index}.title">${language.title}</span>
            <span class="lang-skill-container">
              <span class="lang-skill lang-skill-${language.score}"></span>
            </span>
          </li>
        `;
      })
      .join("");

    sectionLanguages.innerHTML = `
      <h2 contenteditable="true" data-cvdatapath="sectionTitles.languages">${data.sectionTitles.languages}</h2>
      <ul class="lang-skill-list">
        ${items}
      </ul>
    `;
  }
};
