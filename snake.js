const pages = ["frog.html", "page2.html", "page3.html"];
// 吃到果子时：
window.location.href = pages[Math.floor(Math.random() * pages.length)];