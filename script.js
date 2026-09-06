const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = searchBox.value.trim();

    if (!query) return;

    window.location.href =
        "results.html?q=" + encodeURIComponent(query);
});
