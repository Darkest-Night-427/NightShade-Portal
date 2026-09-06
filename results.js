const params = new URLSearchParams(window.location.search);
const query = params.get("q") || "";

const box = document.getElementById("resultsBox");
const count = document.getElementById("resultCount");
const list = document.getElementById("resultsList");

box.value = query;

if (query) {
    count.textContent = `Results for "${query}"`;

    list.innerHTML = `
        <article class="result">
            <div class="result-url">nightshade.portal</div>
            <a href="https://www.google.com/search?q=${encodeURIComponent(query)}" target="_blank">
                Search the Web for ${escapeHTML(query)}
            </a>
            <p>Continue your search through the crossroads of the internet.</p>
        </article>
    `;
}

document.getElementById("resultsSearch").addEventListener("submit", (event) => {
    event.preventDefault();

    const newQuery = box.value.trim();

    if (newQuery) {
        window.location.href = "results.html?q=" + encodeURIComponent(newQuery);
    }
});

function escapeHTML(text) {
    return text.replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}
