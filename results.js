const params = new URLSearchParams(window.location.search);
const query = params.get("q") || "";

const box = document.getElementById("resultsBox");
const count = document.getElementById("resultCount");
const list = document.getElementById("resultsList");

box.value = query;

const sampleResults = [
    {
        title: "Percy Jackson - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Percy_Jackson",
        description: "Learn about Percy Jackson, the demigod hero from the Percy Jackson & the Olympians series."
    },
    {
        title: "The Official Percy Jackson Website",
        url: "https://rickriordan.com/",
        description: "Explore Rick Riordan's books, characters, mythology, and the world of Percy Jackson."
    },
    {
        title: "Greek Mythology - World History Encyclopedia",
        url: "https://www.worldhistory.org/Greek_Mythology/",
        description: "Explore the gods, heroes, stories, and mythology of ancient Greece."
    },
    {
        title: "GitHub",
        url: "https://github.com/",
        description: "Build, share, and explore software projects from around the world."
    }
];

if (query) {
    count.textContent = `Results for "${query}"`;

    list.innerHTML = sampleResults.map(result => `
        <article class="result">
            <div class="result-url">${result.url}</div>

            <a
                href="${result.url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${escapeHTML(result.title)}
            </a>

            <p>${escapeHTML(result.description)}</p>
        </article>
    `).join("");
} else {
    count.textContent = "Enter something to search.";
}

document.getElementById("resultsSearch").addEventListener("submit", (event) => {
    event.preventDefault();

    const newQuery = box.value.trim();

    if (!newQuery) return;

    window.location.href =
        "results.html?q=" + encodeURIComponent(newQuery);
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
