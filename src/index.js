document.addEventListener('DOMContentLoaded', () =>{


 
 let dogPicUrl = "http://localhost:3000/images/1"
 let dogPicCom = "http://localhost:3000/images/1/comments"

 const fetchImage = () => {
    fetch(dogPicUrl)
    .then(resp => resp.json())
    .then(renderDogImage)
}

const renderDogImage = (dog) => {

    const imageContainer = document.querySelector('.image-container')
    imageContainer.dataset.id = dog.id
    const title = imageContainer.querySelector('.title')
    title.textContent = dog.title
    
    let image = imageContainer.querySelector('.image')
    image.src = dog.image

    let likes = parseInt(imageContainer.querySelector('.likes').textContent = dog.likes)
    console.log(likes)
    

    let comments = imageContainer.querySelector('.comments')


    let comChildren = comments.children

    let firstComment = comChildren[0]
    firstComment.textContent = dog.comments[0].content
    
    let secondComment = comChildren[1]
    secondComment.textContent = dog.comments[1].content
    
    let thirdComment = comChildren[2]
    thirdComment.textContent = dog.comments[2].content
    
}

const clickHandler = () => {
    document.addEventListener('click', e => {
        if(e.target.matches('.like-button')){
            
            let container = document.querySelector('.image-container')
            
            let button = e.target
            let dogId = container.dataset.id
            
            let likes = parseInt(button.previousElementSibling.textContent)
            let newLikes = likes + 1

            let options = {
                
            }
            
            fetch(dogPicUrl)
            .then(resp => resp.json())
            .then(console.log)
        }
    })


}


clickHandler();
fetchImage();

})





/*
    1. See the image received from the server, 
    including its title, likes and comments when 
    the page loads.
     √ - Get dogs info
     √ - Put info to Dome

    2.Click on the heart icon to increase image 
    likes, and still see them when I reload the page.
     - clickHandler
     - increase image likes with button click
     -perist the data without reload

    3.Add a comment (no persistance needed)

*/