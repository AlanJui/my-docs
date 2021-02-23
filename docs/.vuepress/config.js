module.exports = {
  title: "Manjaro KDE 開發環境建置指引",
  description: "如何在 Manjaro KDE 電腦建置開發環境",
  base: "/",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "作業系統", link: "/D01_OS/" },
      { text: "終端機", link: "/D02_Terminal/" },
      { text: "開發環境", link: "/D03_DevEnvironments/" },
      { text: "開發工具", link: "/D04_DevTools/" },
    ],
    sidebar: [
      "/",
      "/D01_OS/",
      "/D02_Terminal/",
      "/D03_DevEnvironments/",
      "/D04_DevTools/",
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
