document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        window.location.href = https://www.google.com/search?q=${query};
    }
});