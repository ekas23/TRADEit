document.addEventListener("DOMContentLoaded", () => {
    // Profile Edit Button
    const editProfileBtn = document.getElementById("edit-profile-btn");
    if (editProfileBtn) {
        editProfileBtn.addEventListener("click", () => {
            alert("Edit Profile functionality coming soon!");
        });
    }

    // Change Password Button
    const changePasswordBtn = document.getElementById("change-password-btn");
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener("click", () => {
            alert("Change Password functionality coming soon!");
        });
    }

    // Search Bar Functionality
    const searchBar = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");
    if (searchBar && searchButton) {
        searchButton.addEventListener("click", () => {
            const query = searchBar.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
            }
        });
    }

    // Payment Button Functionality
    const paymentButton = document.querySelector(".payment-button");
    if (paymentButton) {
        paymentButton.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Redirecting to payment page...");
            window.location.href = "payment.html";
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll(".nav-menu a").forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            if (anchor.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = anchor.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
