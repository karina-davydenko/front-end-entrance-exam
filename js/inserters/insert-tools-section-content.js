export const insertToolsSectionContent = (data) => {
  const sectionTools = document.querySelector(".section-tools");

  if (sectionTools) {
    sectionTools.innerHTML = `
    <h2>${data.sectionTitles.tools.title}</h2>
    <div class="tool-card-list">
      <div class="tool-card">
        <div class="tool-card-title">
          ${data.sectionTitles.tools.groups[0]}
        </div>
        <img src="./public/logos/figma.png" alt="figma logo">
        <img src="./public/logos/photoshop.png" alt="photoshop logo">
        <img src="./public/logos/illustrator.png" alt="illustrator logo">
        <img src="./public/logos/premiere.png" alt="premier logo">
        <img src="./public/logos/notion.png" alt="notion logo">
        <img src="./public/logos/meet.png" alt="meet logo">
      </div>
      <div class="tool-card">
        <div class="tool-card-title">
          ${data.sectionTitles.tools.groups[1]}
        </div>
        <img src="./public/logos/zapier.png" alt="zapier logo">
        <img src="./public/logos/webflow.png" alt="webflow logo">
        <img src="./public/logos/framer.png" alt="framer logo">
        <img src="./public/logos/wordpress.png" alt="wordpress logo">
      </div>
      <div class="tool-card">
        <div class="tool-card-title">
          ${data.sectionTitles.tools.groups[2]}
        </div>
        <img src="./public/logos/chatGPT.png" alt="chatGPT logo">
        <img src="./public/logos/copilot.png" alt="copilot logo">
        <img src="./public/logos/midjourney.png" alt="midjourney logo">
      </div>
    </div>
  `;
  }
};
