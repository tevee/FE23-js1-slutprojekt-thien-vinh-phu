export function playDotAnimation() {
    const searchFormInputEl = document.querySelector('#searchForm > input')
    const dotContainerEl = document.querySelector('.dotContainer')
    
    const dotAnimationTimeline = anime.timeline({
        easing: 'easeOutExpo',
        delay: 1000,
        loop: true
    })
    
    dotAnimationTimeline.add({
        targets: '.dot:nth-child(2), .dot:nth-child(3)',
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
    
    searchFormInputEl.addEventListener('focus', () => {
        dotContainerEl.style.display = 'none';
        dotAnimationTimeline.reset();
    })
    
    searchFormInputEl.addEventListener('blur', () => {
        dotContainerEl.style.display = 'flex';
        dotAnimationTimeline.play();
    })
}

const searchAnimation = {
    targets: '#contentContainer',
    translateY: ['100vh', 0],
    duration: 1000,
    easing: 'easeOutCubic',
}

export {searchAnimation}