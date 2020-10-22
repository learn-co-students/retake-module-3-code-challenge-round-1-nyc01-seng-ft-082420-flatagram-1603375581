document.addEventListener('DOMContentLoaded', (e)=>{

const baseURL = "http://localhost:3000/images/1"
const commentURL = "http://localhost:3000/comments"
const getImage =()=> {fetch(baseURL)
.then(response=>response.json())
.then(image =>{renderImage(image)})
}
const renderImage =(image)=>{
    const imageTitle = document.querySelector(".title")
    const imageLikes = document.querySelector(".likes")
    const imageSrc = document.querySelector(".image")

    imageTitle.textContent = `${image.title}`
    imageSrc.src =`${image.image}`
    imageLikes.textContent =`${image.likes} Likes`
    imageLikes.dataset.likes = `${image.likes}`
}

const increaseLikes = () =>{
    const imageLikes = document.querySelector(".likes")
    const likesNum = parseInt(imageLikes.dataset.likes) +1
    console.log(likesNum)

    const newImage = {likes: likesNum}
    const options ={
        method: "PATCH",
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({likes: likesNum})
    }
            fetch(baseURL, options)
              .then(response => response.json())
              .then(image => {
                getImage()
              })
    }

    const decreaseLikes = () => {
        const imageLikes = document.querySelector(".likes")
        const likesNum = parseInt(imageLikes.dataset.likes) - 1
        console.log(likesNum)

        const newImage = {
          likes: likesNum
        }
        const options = {
          method: "PATCH",
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
          },
          body: JSON.stringify({
            likes: likesNum
          })
        }

    fetch(baseURL, options)
    .then(response => response.json())
    .then(image => {getImage()})
}

const getComments =()=>{
    fetch(commentURL)
    .then(response => response.json())
    .then(comments => {
        console.log(comments)
        renderComments(comments)
    })
}

const renderComments =(comments)=>{
    const commentUl = document.querySelector(".comments")
    for (comment of comments){
    const newComment = document.createElement("li")
    newComment.textContent =`${comment.content}`
    commentUl.append(newComment)}
}

const clickListener = ()=>{document.addEventListener('click', (e)=>{
    const target = e.target
    if (target.matches(".like-button")){
        console.log("like button")
        increaseLikes()
    }
     else if (target.matches(".unlike-button")) {
       console.log("like button")
       decreaseLikes()
     }
})}

const submitListener =()=>{
    
    document.addEventListener('submit', (e) => {
    e.preventDefault()
    const target = e.target
    if (target.matches(".comment-form")){
        const commentUl = document.querySelector(".comments")
        const newComment = document.createElement("li")
        newComment.textContent = `${target.comment.value}`
        commentUl.append(newComment)
        
    }

    


})}





submitListener()
getComments()
getImage()
clickListener()

})
