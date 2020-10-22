/* Deliverable 2: Click handler - when you click the heart, the image likes will
increase and will persist */
/* Deliverable 3: Add a comment - persistence not needed */

document.addEventListener("DOMContentLoaded", () => {
  /* Deliverable 1: See image from server, when page loads */
  const baseUrl = "http://localhost:3000/images/1"

  const getImages = () => {
    fetch(baseUrl)
      .then(response => response.json())
      // .then(console.log)
      .then(image => renderImage(image))
  }

  // const renderImages = images => {
  //   images.forEach(image => renderImage(image))
  // }

  const renderImage = image => {
    /* Must see title, likes, and comments */
    let title = document.querySelector(".title")
    let likes = document.querySelector(".likes-section")
    let comments = document.querySelector(".comments")
    let dogImage = document.querySelector(".image")
    // set dataset id
    let imageCard = document.querySelector(".image-card")

    title.textContent = image.title
    likes.textContent = image.likes
    dogImage.src = image.image

    comments.innerHTML = `
    <li>${image.comments[0]}</li>
    `
    imageCard.dataset.id = image.id
  }


  getImages()
})

