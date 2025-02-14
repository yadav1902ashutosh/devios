document.addEventListener("DOMContentLoaded", function () {
    let markdownInput = document.getElementById("markdown-input");
    let preview = document.getElementById("preview");

    if (markdownInput && preview) {
        markdownInput.addEventListener("input", function () {
            preview.innerHTML = marked.parse(markdownInput.value);
        });

        // Load saved blog content
        let savedBlog = localStorage.getItem("savedBlog");
        if (savedBlog) {
            preview.innerHTML = savedBlog;
        }
    }
});

function saveBlog() {
    let markdownText = document.getElementById("markdown-input").value;
    let htmlContent = marked.parse(markdownText);
    localStorage.setItem("savedBlog", htmlContent);
    alert("Blog saved!");
}
