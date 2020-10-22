
document.addEventListener("DOMContentLoaded", () => {
    const  imageUrl = "http://localhost:3000/images/"
    const commentUrl = "http://localhost:3000//comments/"

    const getImage = () => {
        fetch(imageUrl)
        .then(response => response.json())
        .then(renderImage)
    }

    const renderImage = image => {
        const imageDiv = document.querySelector(".image-card")
        const img = image[0]
        imageDiv.dataset.imageId = img.id

        const imageTitle = imageDiv.querySelector('h2')
        imageTitle.textContent = img.title

        const imageLikes = imageDiv.querySelector('.likes')
        //console.log(imageLikes)
        imageLikes.textContent = img.likes

        const imageImage = imageDiv.querySelector('.image')
        imageImage.src = img.image

        
    }




getImage();
})







/*
- See the image received from the server, including its title, likes and comments when the page loads
√require a GET through fetch to GET `/images/1`
√render get the details render details through render funct

- Click on the heart icon to increase image likes, and still see them when I reload the page
click listener
add info to page

- Add a comment (no persistance needed)

*/
