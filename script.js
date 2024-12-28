const cookiesCont = document.getElementById("cookies")
const closeBtn = document.getElementById("close-btn")
const cookieForm = document.getElementById("cookie-form")
const cookieText = document.getElementById("cookie-text")

setTimeout(function () {
    cookiesCont.style.display = 'inline'
}, 2000)

closeBtn.addEventListener("click", function () {
    cookiesCont.style.display = 'none'
})

cookieForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const formDetails = new FormData(cookieForm)
    const name = formDetails.get('name')
    console.log(name)

    cookieText.innerHTML = `
    <img src="images/loading.svg" style="width: 50px; display: block; margin: 0 auto;">
    <p style="text-align: center; color: #333; margin-top: 10px;" id="upload-text">submitting your information</p>
    `

    setTimeout(function () {
        document.getElementById("upload-text").innerText = `Getting you your Christmas Gift...`
    }, 2000)

    setTimeout(function () {
        document.getElementById("inner").innerHTML = `
        <div style="text-align: center; padding: 10px;">
            <p style="font-size: 18px; color: green; margin-bottom: 10px; font-weight: bold;">
               Hey <span style="color: red"> ${name} </span>,
            🎁 This magical season, we're spreading joy, love, and gifts to make your holiday even brighter. Here's your special Christmas gift, wrapped with warmth and cheer just for you!

            May your days be merry, your heart full of happiness, and your nights as peaceful as the starlit skies of Evergreen. 🌟

            Merry Christmas to you and your loved ones! 🎄✨<span style="color: red;"><br>Close to continioun reading......</span>
            </p>
            <img src="images/giphy.webp" style="max-width: 250px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); display: block; margin: 0 auto;">
        </div>
        `
        closeBtn.disabled = false

    }, 3000)
})

