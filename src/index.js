// write your code here
document.addEventListener('DOMContentLoaded', e => {
    baseUrl = 'http://localhost:3000/images/1'
    const imageCard = document.querySelector('.image-card')
    const fetchImage = () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(images => renderImages(images))
    }
    const renderImages = images => {
        images.forEach(image => renderImage(image))
    }

    const renderImage = image => {
        const title = document.querySelector('.title')
        const picture = document.querySelector('.image')
        const likes = document.querySelector('.likes')
        imageCard.title.innerHTML = image.title
        imageCard.picture.src = image.image
        imageCard.likes.textContent = parseInt(image.likes)   
    }

    const clickHandler = () => {
        document.addEventListener('click', e =>{
            if(e.target.matches('.like-button')){
                const imageId = e.target.parentElement.parentElement.id
                const likes =  (document.querySelector('.likes').textContent)
                const like  = parInt(likes)
                const currentLikes = like + 1
                options ={
                    method:"PATCH",
                    headers: {
                        "content-type":"application/json",
                        "accept": "application/json"
                    },
                    body:JSON.stringify({currentLikes})
                }
                fetch()
            }

        })
    }
fetchImage()
})