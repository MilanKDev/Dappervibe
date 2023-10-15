//Owl Main Query

const nextIcon = '<img src="Images/left-arrow.png" alt="right">';
const prevIcon = '<img src="Images/right-arrow.png" alt="left" >';
$('.owl-carousel').owlCarousel({
    loop: true,
    
    nav: true,
    autoplay: true,
    slideTransition: 'ease',
    autoplaySpeed: 2000,
    navText: [
        nextIcon,
        prevIcon,
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

