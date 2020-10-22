document.addEventListener('DOMContentLoaded', () =>{


 
 let letDogPicUrl = "http://localhost:3000/images/1"

 const fetchImage = () => {
    fetch(letDogPicUrl)
    .then(resp => resp.json())
    .then(dImage => renderDogImage(dImage))
}

const renderDogImage = (dog) => {

    const imageContainer = document.querySelector('.image-container')
    imageContainer.dataset.id = dog.id
    const title = imageContainer.querySelector('.title')
    title.textContent = dog.title
    
    let image = imageContainer.querySelector('.image')
    image.src = dog.image

    let likes = parseInt(imageContainer.querySelector('.likes').textContent)
    
    
    console.log(likes)
    
}



fetchImage();

})





/*
    1. See the image received from the server, 
    including its title, likes and comments when 
    the page loads.
     √ - Get dogs info
       - Put info to Dome

    2.Click on the heart icon to increase image 
    likes, and still see them when I reload the page.

    3.Add a comment (no persistance needed)

*/