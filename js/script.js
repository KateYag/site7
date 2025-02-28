document.querySelector(".wedding-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Останавливаем стандартную отправку формы

    // 🔹 ЗАМЕНИТЬ НА СВОИ ДАННЫЕ!
    const TOKEN = "7644603205:AAHP68FDVDVowQhLnkeCxdqOR0565Pggtns";
    const CHAT_ID = "390335723";
    const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    // Собираем данные из формы
    const formData = new FormData(this);
    let message = "<b>Новая заявка на свадьбу 🎉</b>\n\n";

    for (let [key, value] of formData.entries()) {
        message += `<b>${key}:</b> ${value}\n`;
    }

    // Отправляем запрос в Telegram
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        }),
    });

    if (response.ok) {
        alert("Форма успешно отправлена!");
        this.reset(); // Очистка формы
    } else {
        alert("Ошибка при отправке. Попробуйте еще раз.");
    }
});

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Событие началось!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Устанавливаем дату окончания
const targetDate = new Date("July 15, 2025 12:00:00").getTime();
startCountdown(targetDate);



document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hid");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.querySelector(".parallax-bg");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        parallax.style.transform = `scale(1.1) translateY(${scrollPosition * 0.2}px)`;
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const parallax = document.querySelector(".parallax-window");
//     const imageSrc = parallax.getAttribute("data-image-src");
//
//     // Добавляем фон через ::before
//     parallax.style.position = "relative";
//     parallax.style.overflow = "hidden";
//     parallax.style.background = "none";
//
//     const bg = document.createElement("div");
//     bg.style.position = "absolute";
//     bg.style.top = "0";
//     bg.style.left = "0";
//     bg.style.width = "100%";
//     bg.style.height = "130%"; // Чуть больше, чтобы плавно двигалось
//     bg.style.backgroundImage = ``;
//     bg.style.backgroundSize = "cover";
//     bg.style.backgroundPosition = "center";
//     bg.style.willChange = "transform";
//     parallax.appendChild(bg);
//
//     function updateParallax() {
//         let scrollTop = window.scrollY;
//         let parallaxSpeed = 0.3; // Чем меньше, тем медленнее
//
//         bg.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;
//     }
//
//     window.addEventListener("scroll", updateParallax);
// });
