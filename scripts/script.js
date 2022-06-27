addEventListener('DOMContentLoaded', () => {
    const images = ['/assets/images/fiesta_en_discoteca.jpg','/assets/images/dos_jovenes_escuchando_musica_bailando.jpg', '/assets/images/manos_con_copas_celebrando.jpg', '/assets/images/manos_sobre_consola_dj.jpg', '/assets/images/mujer_bailando_discoteca.jpg', '/assets/images/varios_jovenes_bailando_en_discoteca.jpg']
    let i = 1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const progressBar = document.querySelector('#progress-bar')
    const divIndicators = document.querySelector('#indicadores')

    let basePercentage = 100 / images.length
    let currentPercentage = basePercentage
    for (let index = 0; index < images.length; index++) {
        const div = document.createElement('div')
        div.classList.add('circles')
        div.id = index
        divIndicators.appendChild(div)
    }

    progressBar.style.width = `${basePercentage}%`
    img1.src = images[0]

    const circles = document.querySelectorAll('.circles')
    circles[0].classList.add('highlighted')

    const slideshow = () => {
        img2.src = images[i]
        const currentCircle = Array.from(circles).find(el => el.id == i)
        Array.from(circles).forEach(circle => circle.classList.remove('highlighted'))
        currentCircle.classList.add('highlighted')

        img2.classList.add('active')
        i++
        currentPercentage += basePercentage
        progressBar.style.width = `${currentPercentage}%`
        if (i == images.length) {
            i = 0
            currentPercentage = basePercentage - basePercentage
        }

        setTimeout(() => {
            img1.src = img2.src
            img2.classList.remove('active')
        }, 1000)
    }

    setInterval(slideshow, 4000)

})