// write your code here
document.addEventListener('DOMContentLoaded', (e) => {

    // render image, include title, likes and comments 
    const imageUrl= "http://localhost:3000/images/"
    const commentUrl = "http://localhost:3000/comments/"

    const getImage = () => {
        fetch(imageUrl)
        .then(response => response.json())
        .then(image => renderImage(image))
    }
    
    const renderImage = (image) => {
        const imageContainer = document.querySelector("div.image-container")
        const imageCard = document.querySelector("div.image-card")
        // console.log(image)
        
    imageCard.querySelector('h2.title').textContent = `${image[0].title}`
    imageCard.querySelector('img.image').src = `${image[0].image}`
    imageCard.querySelector('span.likes').textContent = `${image[0].likes}`
    //cant access comments!
    // imageCard.querySelector('ul.comments').textContent= `${image[0].comments}`
    imageCard.dataset.imageId = `${image[0].id}`
   imageContainer.append(imageCard)

   
}
    const clickHandler = () => {
        document.addEventListener('click', (e) => {
            console.log(e.target)
            if(e.target === 'button.like-button') {
                const imageId = e.target.dataset.imageId
                e.target.value++
                // fetch(imageUrl + imageId)
                // .then(response => response.json())
                // .then(console.log())
            }
        })
    }
// These were the next steps but I couldn't increase the likes button :(
 //PATCH Request for likes:


    //const options = {
        // method: 'PATCH',
        // headers: {
        //     "content-type": "application/json",
        //     "accept": "application/json"
        // },
        // body.JSON.stringify()
    // }

    // const = saveLikes (imageId) => {
        //fetch(commentUrl + imageId, options)
        //.then(reponse => reponse.json())
        //.then(console.log())
    
    // }
    
    // Comment Post request:

    // const submitHandler = () => {
    //     const comments = document.querySelector('form.comment-form')
    //     comments.document.addEventListener('submit', (e) => {
    //         e.preventDefault()
    //         const form = e.target
        
    //     })

    //const options = {
        // method: 'POST',
        // headers: {
        //     "content-type": "application/json",
        //     "accept": "application/json"
        // },
        // body.JSON.stringify()
    // }

    // cosnt = createComments () => {
        //fetch(commentUrl, options)
        //.then(reponse => reponse.json())
        //.then(console.log())
    
    // }
           

    // click event on like button to increase by one and PATCH request for updated likes, POST request for comments




// submitHandler()
clickHandler()
getImage()
})







