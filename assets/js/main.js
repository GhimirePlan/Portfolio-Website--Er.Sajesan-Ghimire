/* =============== Change Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* =============== Services Modal =============== */
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');

let openModal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        openModal(i);
    });
});

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        });
    });
});

/* =============== Mixitup Filter Portfolio =============== */
var mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestmonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

const images = [...document.querySelectorAll('.image')];
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const imageDescription = document.querySelector('.image-description'); // Add this line
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

// Descriptions for the images
const descriptions = [
    "Electrical Engineering student at Tribhuvan University, IOE, Pashchimanchal Campus, graduating in May 2025",
    "Description for image 2",
    "Description for image 3",
    "Description for image 4",
    "Description for image 5"
];

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.add('active');
    });
});

// Function to update the image and description
const updateImage = (i) => {
    let path = `/assets/img/Gallery/img${i + 1}.jpg`;
    largeImage.src = path;
    imageIndex.innerHTML = `0${i + 1}`;
    imageDescription.innerHTML = descriptions[i]; // Update the description
    index = i;
    // Show the large image
    largeImage.style.display = 'block'; // Show the currently displayed image
};

popupCloseBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        popup.classList.remove('active');
    }
});

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1);
    } else {
        updateImage(images.length - 1); // Go to the last image
    }
});

rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1);
    } else {
        updateImage(0); // Go back to the first image
    }
});

// Existing code...

// Add an event listener for keydown events
document.addEventListener('keydown', (e) => {
    if (popup.classList.contains('active')) { // Check if popup is active
        if (e.key === 'ArrowRight') { // Check for the right arrow key
            rightArrow.click(); // Simulate click on the right arrow
        } else if (e.key === 'ArrowLeft') { // Check for the left arrow key
            leftArrow.click(); // Simulate click on the left arrow
        } else if (e.key === 'Escape') { // Optional: close popup with Escape key
            popup.classList.remove('active'); // Close popup
        }
    }
});


// Show the first image on page load
updateImage(0);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Uncomment this if you want animations to reset when scrolling up
});

sr.reveal('.home__data');
sr.reveal('.home__handle', { delay: 700 });
sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' });

/*=============== Testimonial Modal (Renamed to avoid conflicts) ===============*/
const achievementModal = document.getElementById("achievementModal");  // Renamed modal to achievementModal
const achievementCloseBtn = document.querySelector(".close");  // Changed closeBtn to achievementCloseBtn

// Get all testimonial cards and add click event to open modal
const testimonialCards = document.querySelectorAll(".testimonial__card");
testimonialCards.forEach(card => {
    card.addEventListener("click", function () {
        achievementModal.style.display = "block"; // Show modal when card is clicked
    });
});

// Close modal when the close button is clicked
achievementCloseBtn.onclick = function () {
    achievementModal.style.display = "none"; // Hide modal
};

// Close modal if user clicks outside the modal content
window.onclick = function (event) {
    if (event.target == achievementModal) {
        achievementModal.style.display = "none"; // Hide modal
    }
};
