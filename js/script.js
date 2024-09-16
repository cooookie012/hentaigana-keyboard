const output = document.getElementById("output");

document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll(".keyboard span");
    spans.forEach(span => {
        span.addEventListener("click", () => {
            const output = document.getElementById("output");
            output.value += span.textContent;
            output.focus();
        });
    });
});
