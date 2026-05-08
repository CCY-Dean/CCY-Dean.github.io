const translations = {
  zh: {
    navEducation: "教育",
    navResearch: "方向",
    navPublications: "成果",
    navOpenSource: "开源",
    navContact: "联系",
    heroTitle: "什么也不知道",
    educationKicker: "Education",
    educationTitle: "教育经历",
    eduOneYear: "本科阶段",
    eduOneSchool: "华南师范大学",
    eduOneDegree: "电子信息工程",
    eduTwoYear: "研究生阶段",
    eduTwoSchool: "南方科技大学",
    eduTwoDegree: "电子信息（保研）",
    researchKicker: "Research Direction",
    researchTitle: "研究方向",
    topicOneTitle: "Embodied Intelligence",
    topicTwoTitle: "Vision-Language-Action",
    topicThreeTitle: "World Model",
    pubKicker: "Publications",
    pubTitle: "科研成果",
    pubBody: "Coming soon.",
    openSourceKicker: "Open Source",
    openSourceTitle: "开源项目",
    openSourceBody: "Projects will be updated soon.",
    contactKicker: "Contact",
    contactTitle: "联系方式",
    footerText: "© 2026 什么也不知道",
  },
  en: {
    navEducation: "Education",
    navResearch: "Focus",
    navPublications: "Work",
    navOpenSource: "Open Source",
    navContact: "Contact",
    heroTitle: "什么也不知道",
    educationKicker: "Education",
    educationTitle: "Education",
    eduOneYear: "Undergraduate",
    eduOneSchool: "South China Normal University",
    eduOneDegree: "Electronic Information Engineering",
    eduTwoYear: "Graduate",
    eduTwoSchool: "Southern University of Science and Technology",
    eduTwoDegree: "Electronic Information (Recommended Admission)",
    researchKicker: "Research Direction",
    researchTitle: "Research Direction",
    topicOneTitle: "Embodied Intelligence",
    topicTwoTitle: "Vision-Language-Action",
    topicThreeTitle: "World Model",
    pubKicker: "Publications",
    pubTitle: "Research Output",
    pubBody: "Coming soon.",
    openSourceKicker: "Open Source",
    openSourceTitle: "Open Source",
    openSourceBody: "Projects will be updated soon.",
    contactKicker: "Contact",
    contactTitle: "Contact",
    footerText: "© 2026 Knows Nothing",
  },
};

let currentLanguage = "zh";
const toggle = document.querySelector(".lang-toggle");
const label = document.querySelector("[data-lang-label]");
const fontOptions = document.querySelectorAll("[data-font-option]");

function applyFont(font) {
  document.body.dataset.font = font;
  localStorage.setItem("preferredChineseFont", font);
  fontOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.fontOption === font);
  });
}


function applyLanguage(language) {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key];
  });
  label.textContent = language === "zh" ? "EN" : "中";
  currentLanguage = language;
}

toggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

fontOptions.forEach((option) => {
  option.addEventListener("click", () => applyFont(option.dataset.fontOption));
});

applyFont(localStorage.getItem("preferredChineseFont") || "kai");
applyLanguage(currentLanguage);
