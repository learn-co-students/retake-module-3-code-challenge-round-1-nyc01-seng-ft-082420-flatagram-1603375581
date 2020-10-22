// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/'
    const getUrl = 'http://localhost:3000/images/1'
    const imageDiv = document.getElementsByClassName('image-card')

    const fetchImage = () => {
        fetch(getUrl)
        .then(resp => resp.json())
        .then(renderImage);
    }

    const renderImage = (images) => {
        const imageTitle = document.getElementsByClassName('title')
        const imageSrc = document.getElementsByClassName('image')
        const imageLikes = document.getElementsByClassName('likes')


        imageTitle.innerHTML = `
        ${images.name}
        
        `
    }

    fetchImage();
})





