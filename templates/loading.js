document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container-box");
    const loadingContainer = document.querySelector(".loading-container");
    const nameInput = document.getElementById("name");
    const startButton = document.getElementById("startButton");

    nameInput.addEventListener("input", function () {
        if (nameInput.value.trim() !== "") {
            startButton.removeAttribute("disabled");
            startButton.style.backgroundColor = "#180b61";
            startButton.style.cursor = "pointer";
        } else {
            startButton.setAttribute("disabled", true);
            startButton.style.backgroundColor = "#ccc";
            startButton.style.cursor = "not-allowed";
        }
    });

    startButton.addEventListener("click", function () {

        container.style.opacity = 0.8;
        loadingContainer.style.display = "flex";

        setTimeout(function () {
            window.location.href = "quiz.html";
        }, 2000);
    });

    setTimeout(function () {
        container.style.opacity = 1;
    }, 0);
});
