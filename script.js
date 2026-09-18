/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    menuButton.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


/* ========================================
   CLOSE MENU AFTER NAVIGATION
======================================== */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});



/* ========================================
   CERTIFICATE MODAL
======================================== */

const certificates = document.querySelectorAll(".certificate");
const certificateModal = document.querySelector(".certificate-modal");
const modalCertificate = document.querySelector(".modal-certificate");
const modalClose = document.querySelector(".modal-close");

certificates.forEach(function (certificate) {

    certificate.addEventListener("click", function () {

        const certificateImage = certificate.querySelector("img");

        modalCertificate.src = certificateImage.src;
        modalCertificate.alt = certificateImage.alt;

        certificateModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* ========================================
   CLOSE CERTIFICATE MODAL
======================================== */

function closeCertificateModal() {

    certificateModal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeCertificateModal);


certificateModal.addEventListener("click", function (event) {

    if (event.target === certificateModal) {
        closeCertificateModal();
    }

});


/* ========================================
   CLOSE MODAL WITH ESCAPE KEY
======================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeCertificateModal();
    }

});
