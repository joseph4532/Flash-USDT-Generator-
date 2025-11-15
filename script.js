// ---------- Smooth Fade Animation ----------
window.addEventListener("load", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// ---------- Scroll To Top Button ----------
const toTopButton = document.createElement("div");
toTopButton.id = "toTop";
toTopButton.innerHTML = "↑";
document.body.appendChild(toTopButton);

// Show button when page scrolls
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
});

// Scroll to top when clicked
toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Badge Hover Sound (Optional Fun Effect) ----------
const badgeImages = document.querySelectorAll(".badge img");

badgeImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
        const beep = new Audio("https://assets.mixkit.co/active_storage/sfx/997/997-preview.mp3");
        beep.volume = 0.2;
        beep.play();
    });
});
