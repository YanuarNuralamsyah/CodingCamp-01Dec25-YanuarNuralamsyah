// INITIALIZE ALL FUNCTIONS ON DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
    replaceName();
    startClock();
    startBannerSlider();
    initMobileMenu();
});

//  WELCOME NAME FUNCTIONALITY
        window.onload = function() {
            replaceName();
            startClock();
            startBannerSlider();
        };

        function replaceName() {
            let user = prompt("Please enter your name:", "");
            if (user != null && user != "") {
                document.getElementById("user-name-display").innerText = user;
            } else {
                document.getElementById("user-name-display").innerText = "Guest";
            }
        }

        //  BANNER SLIDER LOGIC
        let slideIndex = 0;
        function startBannerSlider() {
            const slides = document.getElementsByClassName("slide-image");
            
            setInterval(() => {
                slides[slideIndex].classList.remove("active");
                slideIndex++;
                if (slideIndex >= slides.length) {
                    slideIndex = 0;
                }
                slides[slideIndex].classList.add("active");
            }, 3000);
        }

        //  FORM VALIDATION & DISPLAY
        function validateForm() {
            // Get form values
            const name = document.forms["message-form"]["name"].value.trim();
            const email = document.forms["message-form"]["email"].value.trim();
            const phone = document.forms["message-form"]["phone"].value.trim();
            const message = document.forms["message-form"]["message"].value.trim();

            // Get Error Elements
            const errorName = document.getElementById("error-name");
            const errorEmail = document.getElementById("error-email");
            const errorPhone = document.getElementById("error-phone");
            const errorMessage = document.getElementById("error-message");

            // Reset Errors (Hide all)
            errorName.classList.add("hidden");
            errorEmail.classList.add("hidden");
            errorPhone.classList.add("hidden");
            errorMessage.classList.add("hidden");

            let isValid = true;

            // Validate Name
            if (name === "") {
                errorName.classList.remove("hidden");
                isValid = false;
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorEmail.classList.remove("hidden");
                isValid = false;
            }

            // Validate Phone 
            const phonePattern = /^[0-9]+$/;
            if (phone === "" || !phonePattern.test(phone)) {
                errorPhone.classList.remove("hidden");
                isValid = false;
            }

            // Validate Message (At least 5 chars)
            if (message.length < 5) {
                errorMessage.classList.remove("hidden");
                isValid = false;
            }

            // If any validation failed, stop here
            if (!isValid) {
                return false;
            }

            // If Valid, Display Values in the Right Box
            document.getElementById("res-name").innerText = name;
            document.getElementById("res-email").innerText = email;
            document.getElementById("res-phone").innerText = phone;
            document.getElementById("res-message").innerText = message;

            // Show result container, hide empty state
            document.getElementById("result-container").classList.remove("hidden");
            document.getElementById("empty-state").classList.add("hidden");

            // Update time immediately on submit
            updateTime();

            // Prevent actual server submission
            return false;
        }

        //  CLOCK FUNCTIONALITY
        function startClock() {
            updateTime();
            setInterval(updateTime, 1000);
        }

        function updateTime() {
            const now = new Date();
            document.getElementById("current-time").innerText = now.toString();
        }

        //  MOBILE MENU TOGGLE
        const btn = document.getElementById("mobile-menu-btn");
        const menu = document.getElementById("mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });