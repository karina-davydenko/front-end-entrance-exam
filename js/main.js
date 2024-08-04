import {
  insertAboutMeShort,
  insertLanguagesSectionContent,
  insertExperienceSectionContent,
  insertToolsSectionContent,
  insertEducationSectionContent,
  insertInterestsSectionContent,
  insertEmailSectionContent,
} from "./inserters";
import { removeLinebreaks } from "./utils/remove-linebreaks";
import { setDownloadCvOnClick } from "./set-download-cv-on-click";
import { ripple } from "./ripple";

import { defaultCvData } from "./default-cv-data";

const LS_CV_DATA_KEY = "cv-data";

document.addEventListener("DOMContentLoaded", () => {
  let cvData;

  const cvDataFromLs = localStorage.getItem(LS_CV_DATA_KEY);

  if (cvDataFromLs) {
    cvData = JSON.parse(cvDataFromLs);
  } else {
    cvData = defaultCvData;
    localStorage.setItem(LS_CV_DATA_KEY, JSON.stringify(defaultCvData));
  }

  insertAboutMeShort(cvData);
  insertLanguagesSectionContent(cvData);
  insertExperienceSectionContent(cvData);
  insertToolsSectionContent(cvData);
  insertEducationSectionContent(cvData);
  insertInterestsSectionContent(cvData);
  insertEmailSectionContent(cvData);

  setDownloadCvOnClick();

  const allEditable = document.querySelectorAll('[contenteditable="true"]');

  allEditable.forEach((ed) => {
    ed.addEventListener("blur", (e) => {
      const newValue = removeLinebreaks(e.target.textContent).trim();

      const cvDataPath = e.target.dataset.cvdatapath.split(".");

      let isUpdated = false;

      cvDataPath.reduce((acc, value, index) => {
        if (index === cvDataPath.length - 1) {
          if (newValue !== acc[value]) {
            acc[value] = newValue;
            isUpdated = true;
          }
        }

        return acc[value];
      }, cvData);

      if (isUpdated) {
        localStorage.setItem(LS_CV_DATA_KEY, JSON.stringify(cvData));

        e.target.animate(
          [
            { transform: "translateY(0px)" },
            { transform: "translateY(-3px)" },
            { transform: "translateY(0px)" },
          ],
          {
            duration: 150,
            iterations: 2,
          },
        );
      }
    });
  });

  const aboutMeShort = document.querySelector(".about-me-short");

  aboutMeShort.addEventListener("mouseenter", ripple);
});
