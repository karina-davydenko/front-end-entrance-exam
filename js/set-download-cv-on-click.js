import { ripple } from "./ripple.js";

export const setDownloadCvOnClick = () => {
  const downloadCvButton = document.querySelector("#download-cv-button");

  downloadCvButton.addEventListener("click", ripple);

  downloadCvButton.addEventListener("click", () => {
    html2pdf().from(document.body).save("CV.pdf");
  });
};
