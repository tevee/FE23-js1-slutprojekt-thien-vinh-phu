const searchFormInputEl = document.querySelector('#searchForm > input')
const dotContainerEl = document.querySelector('.dotContainer')
const searchFormInputLength = searchFormInputEl.clientWidth;
dotContainerEl.style.cssText = `left: calc(54px - ${searchFormInputLength}px);`

let dotAnimationTimeline = anime.timeline({
    easing: 'easeOutExpo',
    delay: 1000,
    
    loop: true
})

dotAnimationTimeline.add({
    targets: '.dot:nth-child(2)',
    translateX: 10,
    duration: 700
})
.add({
    targets: '.dot:nth-child(3)',
    keyframes: [
        {translateX: 20, duration: 700, delay: 1000},
        {translateX: 10, duration: 700, delay: 1000},
    ]
})

export {dotAnimationTimeline}