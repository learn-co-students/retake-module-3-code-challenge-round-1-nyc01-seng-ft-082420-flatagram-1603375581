
document.addEventListener("DOMContentLoaded", () => {
    const  imageUrl = "http://localhost:3000/images/"
    const commentUrl = "http://localhost:3000/comments/"

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

    const getComments = () => {
        fetch(commentUrl)
        .then(response => response.json())
        .then(renderComments)
    }

    const renderComments = comments => {
        const commentUl = document.querySelector('.comments')
        commentUl.innerHTML = ''
        comments.forEach(commentObj => {
        renderComment(commentObj, commentUl)
        })

    


    }
        


    const renderComment = (commentObj, commentUl) => {
            const commentLi = document.createElement('li')
            commentLi.classList.add(".comment")
            commentLi.dataset.commentId = commentObj.id
            commentLi.innerHTML = `
            ${commentObj.content}
            `
            commentUl.append(commentLi)


    }

    // const clickHandler = () => {
    //     document.addEventListener('click', e => {
    //         if(e.target.matches(".like-button")){
    //             // const button = e.target
    //             // const imageDiv = document.querySelector(".image-card")
    //             // const imageId = imageDiv.dataset.imageId

    //         }
    //     })
    }
        
    



  getComments(); 
  getImage();
  
})







/*
- See the image received from the server, including its title, likes and comments when the page loads
√require a GET through fetch to GET `/images/1`
√render get the details render details through render funct
√another get request for comments since images separate 
render those comments 

- Click on the heart icon to increase image likes, and still see them when I reload the page
click listener
add info to page

- Add a comment (no persistance needed)
submit listener on post 


*/
