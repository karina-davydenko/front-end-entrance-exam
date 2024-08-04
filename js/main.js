import {
  insertAboutMeShort,
  insertLanguagesSectionContent,
  insertExperienceSectionContent,
  insertToolsSectionContent,
  insertEducationSectionContent,
  insertInterestsSectionContent,
  insertEmailSectionContent,
} from "./inserters";

import { defaultCvData } from "./default-cv-data";

document.addEventListener("DOMContentLoaded", () => {
  insertAboutMeShort(defaultCvData);
  insertLanguagesSectionContent(defaultCvData);
  insertExperienceSectionContent(defaultCvData);
  insertToolsSectionContent(defaultCvData);
  insertEducationSectionContent(defaultCvData);
  insertInterestsSectionContent(defaultCvData);
  insertEmailSectionContent(defaultCvData);
});
