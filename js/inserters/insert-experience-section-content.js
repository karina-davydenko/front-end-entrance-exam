export const insertExperienceSectionContent = (data) => {
  const sectionExperience = document.querySelector(".section-experience");

  if (sectionExperience) {
    const items = data.experience
      .map((job, index) => {
        const dutyItems = job.duties
          .map((duty, indexDuty) => {
            return `<li contenteditable="true" data-cvdatapath="experience.${index}.duties.${indexDuty}">${duty}</li>`;
          })
          .join("");

        return `
          <div class="exp-card ${job.mark ? "card-green" : ""}">
            <div class="exp-card-header">
              <p contenteditable="true" data-cvdatapath="experience.${index}.dateRange">
                ${job.dateRange}
              </p>
              ${
                job.mark
                  ? `
                    <div
                      class="exp-card-most-recent-badge"
                      contenteditable="true"
                      data-cvdatapath="experience.${index}.mark"
                    >
                      ${job.mark}
                    </div>
                  `
                  : ""
              } 
            </div>
            <div class="exp-card-main">
              <div class="exp-card-left">
                <span class="exp-card-role" contenteditable="true" data-cvdatapath="experience.${index}.role">
                  ${job.role}
                </span>
                <span contenteditable="true" data-cvdatapath="experience.${index}.comment">
                  ${job.comment}
                </span>
              </div>
              <div>
                <ul>
                  ${dutyItems}
                </ul>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    sectionExperience.innerHTML = `
      <h2 contenteditable="true" data-cvdatapath="sectionTitles.experience">${data.sectionTitles.experience}</h2>
      <div class="exp-card-list">
        ${items}
      </div>
    `;
  }
};
