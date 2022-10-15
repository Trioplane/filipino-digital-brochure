const sections = {
    pages: [document.querySelector('#page1'), document.querySelector('#page2'), document.querySelector('#page3'), document.querySelector('#page4')],
    hovers: [document.querySelector('#page1-hover'), document.querySelector('#page2-hover'), document.querySelector('#page3-hover'), document.querySelector('#page4-hover')],
    modals: [document.querySelector('#page1-modal'), document.querySelector('#page2-modal'), document.querySelector('#page3-modal'), document.querySelector('#page4-modal'),]
}

const modal_bg = document.querySelector('#modal-bg')
const modal_close = document.querySelector('#modal-close')
const footer = document.querySelector('footer')

let current_modal

for (let i = 0; i < 4; i++) {
    sections.pages[i].addEventListener("mouseover", () => {
        sections.hovers[i].classList.add('hover')
    })

    sections.pages[i].addEventListener('click', () => {
        sections.modals[i].classList.remove('hide')
        footer.classList.add('hide')
        document.body.classList.add('stopScroll')
        modal_bg.classList.remove('hide')
        current_modal = sections.modals[i]
    })

    sections.pages[i].addEventListener("mouseout", () => {
        sections.hovers[i].classList.remove('hover')
    })
}

modal_close.addEventListener('click', () => {
    footer.classList.remove('hide')
    document.body.classList.remove('stopScroll')
    current_modal?.classList.add('hide')
    modal_bg.classList.add('hide')
    current_modal = null
})

modal_bg.addEventListener('click', () => {
    footer.classList.remove('hide')
    document.body.classList.remove('stopScroll')
    current_modal?.classList.add('hide')
    modal_bg.classList.add('hide')
    current_modal = null
})

document.addEventListener('keyup', e => {
    footer.classList.remove('hide')
    document.body.classList.remove('stopScroll')
    if (!current_modal) return
    if (e.key === "Escape") {
        current_modal?.classList.add('hide')
        modal_bg.classList.add('hide')
        current_modal = null
    } else return
})







