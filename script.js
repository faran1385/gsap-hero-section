let tl = gsap.timeline();

tl.from(".js-animated-link", {
    y: -50,
    opacity: 0,
    stagger: .1,
    duration: .5
})

tl.from(".js-animated-title", {
    y: 50,
    opacity: 0,
    stagger: .2,
    duration: .5
})

tl.from(".js-animated-image", {
    scale: 0,
    stagger: .2,
    duration: .5
})

tl.from(".js-animated-scroll-down", {
    opacity: 0,
    duration: .5
})

tl.to(".scroll-down__arrow", {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: .5
})