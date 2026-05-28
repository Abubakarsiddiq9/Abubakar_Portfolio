const themeButtons = document.querySelectorAll(".theme-toggle, .mobile-theme-toggle");
const themeIcons = document.querySelectorAll(".theme-toggle img, .mobile-theme-toggle img");
const themeLabels = document.querySelectorAll(".theme-toggle p, .mobile-theme-toggle p");

function setTheme(isDarkMode) {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");

    themeIcons.forEach((icon) => {
        icon.src = isDarkMode ? "../imgs/lightmode.png" : "../imgs/darkmode.png";
    });

    themeLabels.forEach((label) => {
        label.textContent = isDarkMode ? "Light mode" : "Dark mode";
    });
}

setTheme(localStorage.getItem("portfolio-theme") === "dark");

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setTheme(!document.body.classList.contains("dark-mode"));
    });
});
