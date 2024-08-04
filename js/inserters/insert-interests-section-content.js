export const insertInterestsSectionContent = (data) => {
  const sectionInterests = document.querySelector(".section-interests");

  if (sectionInterests) {
    const items = data.interests
      .map((int, index) => {
        return `
          <span class="int-tag">
            ${int}
          </span>
        `;
      })
      .join("");

    sectionInterests.innerHTML = `
      <h2>${data.sectionTitles.interests}</h2>
      <div class="int-tag-list">
        ${items}
      </div>
    `;
  }
};
