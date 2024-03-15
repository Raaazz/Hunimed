const languages = document.getElementById("languages");
languages.style.display = "none"
const select = document.getElementById("select");
select.addEventListener("click", () => {
    const currentDisplay = languages.style.display;

    if (currentDisplay === "none") {
        languages.style.display = "block"
    } else {
        languages.style.display = "none"
    }
});