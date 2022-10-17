const sections = {
    pages: [document.querySelector('#page1'), document.querySelector('#page2'), document.querySelector('#page3'), document.querySelector('#page4')],
    hovers: [document.querySelector('#page1-hover'), document.querySelector('#page2-hover'), document.querySelector('#page3-hover'), document.querySelector('#page4-hover')],
    modals: [document.querySelector('#page1-modal'), document.querySelector('#page2-modal'), document.querySelector('#page3-modal'), document.querySelector('#page4-modal')],
    backpages: [document.querySelector('#page1-backpage'), document.querySelector('#page2-backpage'), document.querySelector('#page3-backpage'), document.querySelector('#page4-backpage')]
}

const modal_bg = document.querySelector('#modal-bg')
const modal_close = document.querySelector('#modal-close')
const footer = document.querySelector('footer')
const front_page = document.getElementById('frontpage')
const frontpage_hover = document.getElementById('frontpage-hover')
const frontpage_modal = document.getElementById('frontpage-modal')
const frontpage_modal_button = document.getElementById('frontpage-modal-button')
const frontpage_backpage = document.getElementById('frontpage-backpage')


const other_pages = document.getElementById('other-pages')


// STATES
let current_modal
let current_backpage
let opened

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

    sections.modals[i].addEventListener('click', () => {
        sections.modals[i].classList.add('hide')
        current_modal = null
        sections.backpages[i].classList.remove('hide')
        current_backpage = sections.backpages[i]
    })

    sections.backpages[i].addEventListener('click', () => {
        sections.modals[i].classList.remove('hide')
        current_modal = sections.modals[i]
        sections.backpages[i].classList.add('hide')
        current_backpage = null
    })
}

front_page.addEventListener("mouseover", () => {
    frontpage_hover.classList.add('hover')
})
front_page.addEventListener("mouseout", () => {
    frontpage_hover.classList.remove('hover')
})

frontpage_modal_button.addEventListener('click', () => {
    frontpage_modal.classList.remove('hide')
    footer.classList.add('hide')
    document.body.classList.add('stopScroll')
    modal_bg.classList.remove('hide')
    current_modal = frontpage_modal
})

frontpage_modal.addEventListener('click', () => {
    frontpage_modal.classList.add('hide')
    current_modal = null
    frontpage_backpage.classList.remove('hide')
    current_backpage = frontpage_backpage
})

frontpage_backpage.addEventListener('click', () => {
    frontpage_modal.classList.remove('hide')
    current_modal = frontpage_modal
    frontpage_backpage.classList.add('hide')
    current_backpage = null
})

modal_close.addEventListener('click', () => {
    footer.classList.remove('hide')
    document.body.classList.remove('stopScroll')
    current_modal?.classList.add('hide')
    current_backpage?.classList.add('hide')
    modal_bg.classList.add('hide')
    current_modal = null
    current_backpage = null
})

modal_bg.addEventListener('click', () => {
    footer.classList.remove('hide')
    document.body.classList.remove('stopScroll')
    current_modal?.classList.add('hide')
    current_backpage?.classList.add('hide')
    modal_bg.classList.add('hide')
    current_modal = null
    current_backpage = null
})

document.addEventListener('keyup', e => {
    footer.classList.remove('hide')
    document.body.classList.remove('stopScroll')
    if (!current_modal) return
    if (e.key === "Escape") {
        current_modal?.classList.add('hide')
        current_backpage?.classList.add('hide')
        modal_bg.classList.add('hide')
        current_modal = null
        current_backpage = null
    } else return
})

front_page.addEventListener('click', () => {
    if (opened) {
        front_page.classList.add('closed')
        other_pages.classList.add('fake-hide')
        opened = false
    } else {
        front_page.classList.remove('closed')
        opened = true
        other_pages.classList.remove('fake-hide')
        other_pages.classList.add('fade-right')
        other_pages.addEventListener('animationend', () => {
            other_pages.classList.remove('fade-right')
        }, { once: true })
    }

})





