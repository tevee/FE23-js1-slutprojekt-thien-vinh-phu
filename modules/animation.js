let dotAnimationTimeline = anime.timeline({
    easing: 'easeOutExpo',
    delay: 1000,
    loop: true
})

dotAnimationTimeline.add({
    targets: '.dot:nth-child(2)',
    translateX: 10,
    duration: 700,
    delay: 1000
})
.add({
    targets: '.dot:nth-child(3)',
    keyframes: [
        {translateX: 20, duration: 700, delay: 1000},
        {translateX: 10, duration: 700, delay: 1000},
    ]
})
.add({
    targets: '.dot',
    translateX: 0,
    duration: 700,
    delay: 1000,
})

export {dotAnimationTimeline}