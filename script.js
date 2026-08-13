
const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


/

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});




const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();



        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("لطفاً تمام بخش‌های فورم را تکمیل کنید.");

            return;
        }



        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("لطفاً یک ایمیل معتبر وارد کنید.");

            return;
        }


        // پیام موفقیت

        alert(
            "تشکر " +
            name +
            " عزیز!\n\nپیام شما با موفقیت ثبت شد."
        );



        contactForm.reset();

    });

}



const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});




const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});




const galleryItems =
    document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (!image) return;



        const lightbox =
            document.createElement("div");

        lightbox.className = "lightbox";



        const largeImage =
            document.createElement("img");

        largeImage.src = image.src;

        largeImage.alt = image.alt;



        const closeButton =
            document.createElement("button");

        closeButton.className =
            "lightbox-close";

        closeButton.innerHTML = "✕";


        lightbox.appendChild(largeImage);

        lightbox.appendChild(closeButton);

        document.body.appendChild(lightbox);



        setTimeout(() => {

            lightbox.classList.add("show");

        }, 10);


        

        closeButton.addEventListener(
            "click",
            () => {

                lightbox.remove();

            }
        );


       

        lightbox.addEventListener(
            "click",
            event => {

                if (event.target === lightbox) {

                    lightbox.remove();

                }

            }
        );


     

        document.addEventListener(
            "keydown",
            function closeWithEscape(event) {

                if (event.key === "Escape") {

                    lightbox.remove();

                    document.removeEventListener(
                        "keydown",
                        closeWithEscape
                    );

                }

            }
        );

    });

});



const currentYear =
    new Date().getFullYear();

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} مکتب چراغ معارف - تمامی حقوق محفوظ است.`;

}



const animatedElements =
    document.querySelectorAll(
        ".section-title, .about-content, .teacher-card, .news-card, .gallery-item, .contact-box"
    );


const observer =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-animation"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});

.header.scrolled {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}



.navbar a.active {
    color: #0b2d4d;
}

.navbar a.active::after {
    width: 100%;
}



.section-title,
.about-content,
.teacher-card,
.news-card,
.gallery-item,
.contact-box {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease,
                transform 0.7s ease;
}

.show-animation {
    opacity: 1;
    transform: translateY(0);
}



.lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;

    background: rgba(0, 0, 0, 0.9);

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: opacity 0.3s ease;

    padding: 30px;
}

.lightbox.show {
    opacity: 1;
}

.lightbox img {
    max-width: 90%;
    max-height: 85vh;

    width: auto;

    object-fit: contain;

    border-radius: 8px;

    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
    position: absolute;

    top: 25px;
    left: 30px;

    width: 45px;
    height: 45px;

    border: none;
    border-radius: 50%;

    background: #ffffff;
    color: #0b2d4d;

    font-size: 20px;

    cursor: pointer;

    transition: 0.3s;
}

.lightbox-close:hover {
    background: #e3c15b;
    transform: rotate(90deg);
}



@media (max-width: 600px) {

    .lightbox {
        padding: 15px;
    }

    .lightbox img {
        max-width: 95%;
        max-height: 80vh;
    }

    .lightbox-close {
        top: 15px;
        left: 15px;
    }

}