function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', '/assets/Images/icons/IconLight.png')
        img.setAttribute('alt', 'Foto do Venom com a boca aberta mostarndo os dentes e a língua')

    } else {
        img.setAttribute('src', '/assets/Images/icons/Icon.png')
        img.setAttribute('alt', 'Foto do Venom com a boca aberta mostarndo os dentes')
    }

}

