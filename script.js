const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = searchBox.value.trim();

    if (!query) return;

    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(query),
        "_blank"
    );
});
