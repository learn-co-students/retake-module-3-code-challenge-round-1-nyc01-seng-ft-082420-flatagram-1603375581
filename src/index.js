document.addEventListener('DOMContentLoaded', (e)=>{

const baseURL = "http://localhost:3000/images/"
const commentURL = "http://localhost:3000/comments"
const getImage =()=> {fetch(baseURL +1)
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
}

const increaseLikes = () =>{
    const options ={
        method: "PATCH",
        headers: {
            
        }
    }

    fetch(baseURL +1, options)
    .then(response=>response.json())
    .then(getImage())
}

const clickListener = ()=>{document.addEventListener('click', (e)=>{
    const target = e.target
    if (target.matches(".like-button")){
        console.log("like button")
        increaseLikes()
    }
})}







getImage()
clickListener()

})
