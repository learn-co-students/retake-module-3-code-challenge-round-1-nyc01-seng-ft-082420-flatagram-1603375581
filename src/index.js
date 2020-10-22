// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/'
    const getUrl = 'http://localhost:3000/images/1'
    const imageDiv = document.getElementsByClassName('image-card')

    const fetchImage = () => {
        fetch(getUrl)
        .then(resp => resp.json())
        .then(image => renderImage(image));
    }

    const renderImage = (image) => {
        const imageTitle = document.querySelector('title')
        console.log(imageTitle)
        const imageSrc = document.querySelector('image')
        const imageLikes = document.querySelector('likes')
        const likeBtn = document.querySelector('like_button')
        const imageComments = document.querySelector('comments')
        const commentForm = document.querySelector('comment_form')

        imageTitle.innerHTML = `
        imageTitle
        
        `
        console.log(imageDiv)
        imageDiv.append(imageTitle)
    }

    fetchImage();
})



