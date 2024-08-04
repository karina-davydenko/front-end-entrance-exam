export const insertExperienceSectionContent = (data) => {
  const sectionExperience = document.querySelector(".section-experience");

  if (sectionExperience) {
    const items = data.experience
      .map((job, index) => {
        const dutyItems = job.duties
          .map((duty, indexDuty) => {
            return `<li>${duty}</li>`;
          })
          .join("");

        return `
          <div class="exp-card ${job.mark ? "card-green" : ""}">
            <div class="exp-card-header">
              <p>
                ${job.dateRange}
              </p>
              ${
                job.mark
                  ? `
                    <div
                      class="exp-card-most-recent-badge"
                    >
                      ${job.mark}
                    </div>
                  `
                  : ""
              } 
            </div>
            <div class="exp-card-main">
              <div class="exp-card-left">
                <span class="exp-card-role">
                  ${job.role}
                </span>
                <span>
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
      <h2>${data.sectionTitles.experience}</h2>
      <div class="exp-card-list">
        ${items}
      </div>
    `;
  }
};
