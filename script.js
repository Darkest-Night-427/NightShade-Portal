const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = searchBox.value.trim();

    if (query === "") return;

    const url = "https://www.google.com/search?q=" + encodeURIComponent(query);

    window.open(url, "_blank");
});
