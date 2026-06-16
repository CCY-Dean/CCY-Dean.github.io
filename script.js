const translations = {
  zh: {
    navEducation: "教育",
    navResearch: "方向",
    navPublications: "成果",
    navOpenSource: "开源",
    navContact: "联系",
    heroTitle: "Canyang Chen",
    educationKicker: "Education",
    educationTitle: "教育经历",
    eduOneYear: "本科阶段",
    eduOneSchool: "华南师范大学",
    eduOnePeriod: "2022-2026",
    eduOneDegree: "电子信息工程",
    eduOneLink: "本科经历",
    linkHint: "点击查看详情",
    eduTwoYear: "研究生阶段",
    eduTwoSchool: "南方科技大学",
    eduTwoPeriod: "2026-2029",
    eduTwoDegree: "电子信息（保研）",
    researchKicker: "Research Direction",
    researchTitle: "研究方向",
    topicOneTitle: "Vision-Language-Action",
    topicTwoTitle: "World Model",
    pubKicker: "Publications",
    pubTitle: "科研成果",
    pubBody: "Coming soon.",
    paperBody:
      "CCF-A 在投二作，参与 World Action Model 方向论文工作。",
    paperLinkHint: "查看论文",
    paperDocLink: "查看详情",
    paperDocHint: "飞书文档",
    openSourceKicker: "Open Source",
    openSourceTitle: "开源项目",
    openSourceBody: "已整理 FastWAM、Motus、lingbot-va 的复现记录。",
    openSourceLink: "FastWAM · Motus · lingbot-va",
    openSourceHint: "项目复现详情",
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
    heroTitle: "Canyang Chen",
    educationKicker: "Education",
    educationTitle: "Education",
    eduOneYear: "Undergraduate",
    eduOneSchool: "South China Normal University",
    eduOnePeriod: "2022-2026",
    eduOneDegree: "Electronic Information Engineering",
    eduOneLink: "Undergraduate",
    linkHint: "View details",
    eduTwoYear: "Graduate",
    eduTwoSchool: "Southern University of Science and Technology",
    eduTwoPeriod: "2026-2029",
    eduTwoDegree: "Electronic Information (Recommended Admission)",
    researchKicker: "Research Direction",
    researchTitle: "Research Direction",
    topicOneTitle: "Vision-Language-Action",
    topicTwoTitle: "World Model",
    pubKicker: "Publications",
    pubTitle: "Research Output",
    pubBody: "Coming soon.",
    paperBody:
      "Submitted to a CCF-A venue as second author. Participated in a World Action Model paper.",
    paperLinkHint: "Paper",
    paperDocLink: "Details",
    paperDocHint: "Feishu doc",
    openSourceKicker: "Open Source",
    openSourceTitle: "Open Source",
    openSourceBody: "Reproduction notes for FastWAM, Motus, and lingbot-va.",
    openSourceLink: "FastWAM · Motus · lingbot-va",
    openSourceHint: "View reproductions",
    contactKicker: "Contact",
    contactTitle: "Contact",
    footerText: "© 2026 Knows Nothing",
  },
};

let currentLanguage = "zh";
const toggle = document.querySelector(".lang-toggle");
const label = document.querySelector("[data-lang-label]");
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

applyLanguage(currentLanguage);
