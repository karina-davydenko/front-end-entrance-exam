export const insertEducationSectionContent = (data) => {
  const sectionEducation = document.querySelector(".section-education");

  if (sectionEducation) {
    const items = data.education
      .map((edu, index) => {
        return `
          <div class="edu-card ${edu.mark ? "card-green" : ""}">
            <div class="edu-card-header">
              <span class="edu-card-year" contenteditable="true" data-cvdatapath="education.${index}.date">
                ${edu.date}
              </span>
              ${
                edu.mark
                  ? '<img class="edu-card-heart" src="./public/heart.png" alt="heart">'
                  : ""
              }
            </div>
            <div class="edu-card-main">
              <span class="edu-card-title" contenteditable="true" data-cvdatapath="education.${index}.discipline">
                ${edu.discipline}
              </span>
              <span class="edu-card-tags" contenteditable="true" data-cvdatapath="education.${index}.tags">
                ${edu.tags}
              </span>
            </div>
            <div class="edu-card-footer" contenteditable="true" data-cvdatapath="education.${index}.place">
              ${edu.place}
            </div>
          </div>
        `;
      })
      .join("");

    sectionEducation.innerHTML = `
      <h2 contenteditable="true" data-cvdatapath="sectionTitles.education">${data.sectionTitles.education}</h2>
      <div class="edu-card-list">
        ${items}
      </div>
    `;
  }
};
