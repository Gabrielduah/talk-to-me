//Sidebar
const menuItems = document.querySelectorAll('.menu-items');
let notification = document.querySelector('#notifications')
let notificationsPup = document.querySelector('.notification-popup')
let messagesNotification = document.querySelector('#messages')
let message = document.querySelector('.messages')
let theme = document.querySelector('#theme')
let customization = document.querySelector('.customize-theme')
const FontSizes = document.querySelectorAll('.choose-size span')
const root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')


//declaring a fucntion to remove the active
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}


menuItems.forEach(item  => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications') {
            notificationsPup.style.display = 'none'
        }else {
            notificationsPup.style.display = 'block';
        }
    })
})

// messages box
messagesNotification.addEventListener('click', () => {
    message.style.boxShadow = '0 0 2rem var(--color-primary)';
   setTimeout(() => {
    message.style.boxShadow = 'none'
   }, 2000)
})

const oepenThemeModal = () => {
    customization.style.display= 'grid'
}

const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        customization.style.display= 'none';
    }
}
customization .addEventListener('click', closeThemeModel)

theme.addEventListener('click', oepenThemeModal)


const removeSizeSelector = () => {
    FontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

FontSizes.forEach(size => {
    let FontSize;
    size.addEventListener('click', () => {
        removeSizeSelector();
        size.classList.toggle('active')
        if(size.classList.contains('font-size-1')) {
            FontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        }else if(size.classList.contains('font-size-2')) {
            FontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        }else if(size.classList.contains('font-size-3')){
            FontSize = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        }else if(size.classList.contains('font-size-4')) {
            FontSize = '19px'
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        }else if (size.classList.contains('font-size-5')) {
            FontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        } 
         //changing the main html elements
        document.querySelector('html').style.fontSize = FontSize;
    })
   
   
})

//looping through for each color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        if(color.classList.contains('color-1')) {
            primaryHue =252;
        }else if(color.classList.contains('color-2')) {
            primaryHue = 52
        }else if(color.classList.contains('color-3')) {
            primaryHue = 352
        }else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        }else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})