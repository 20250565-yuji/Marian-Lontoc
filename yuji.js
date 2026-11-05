var isDark = false;

function toggleTheme() {
    const styleBox = document.getElementById("themeStyle");
    const button = document.getElementById("themeBtn");

    if (isDark === false) {
        let darkCss = "<style>";
        darkCss += "body { background-color: #313d5a; color: #ebebf5; }";
        darkCss += ".card { background-color: #1a2338; border: 1px solid #2c3a5a; }";
        darkCss += "h2 { color: #9ecfff; }";
        darkCss += "a { color: #9ecfff; }";
        darkCss += ".item { background-color: #232f4a; }";
        darkCss += ".item:hover { background-color: #2d3b5c; }";
        darkCss += ".ph { background-color: #3a4a6b; color: #ebebf5; }";
        darkCss += "#navbar { background-color: #0a0f1c; }";
        darkCss += "#footer { background-color: #0a0f1c; }";
        darkCss += ".submenu { background-color: #16213a; }";
        darkCss += "#themeBtn { background-color: #f4f6fb; color: #222222; }";
        darkCss += "</style>";

        styleBox.innerHTML = darkCss;
        button.innerHTML = "&#9728;&#65039;"; // sun icon
        isDark = true;

    } else {
        styleBox.innerHTML = "";
        button.innerHTML = "&#127769;"; // moon icon
        isDark = false;
    }
}