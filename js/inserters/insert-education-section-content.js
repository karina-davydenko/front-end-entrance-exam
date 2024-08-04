export const insertEducationSectionContent = (data) => {
  const sectionEducation = document.querySelector(".section-education");

  if (sectionEducation) {
    const items = data.education
      .map((edu, index) => {
        return `
          <div class="edu-card ${edu.mark ? "card-green" : ""}">
            <div class="edu-card-header">
              <span class="edu-card-year">
                ${edu.date}
              </span>
              ${
                edu.mark
                  ? '<img class="edu-card-heart" src="./public/heart.png" alt="heart">'
                  : ""
              }
            </div>
            <div class="edu-card-main">
              <span class="edu-card-title">
                ${edu.discipline}
              </span>
              <span class="edu-card-tags">
                ${edu.tags}
              </span>
            </div>
            <div class="edu-card-footer">
              ${edu.place}
            </div>
          </div>
        `;
      })
      .join("");

    sectionEducation.innerHTML = `
      <h2>${data.sectionTitles.education}</h2>
      <div class="edu-card-list">
        ${items}
      </div>
    `;
  }
};
