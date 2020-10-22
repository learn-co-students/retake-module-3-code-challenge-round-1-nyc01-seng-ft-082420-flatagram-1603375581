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


  const renderImage = image => {
    /* Must see title, likes, and comments */
    let title = document.querySelector(".title")
    let likes = document.querySelector(".likes-section")
    let comments = document.querySelector(".comments")
    let dogImage = document.querySelector(".image")

    /* set dataset id */
    // let imageCard = document.querySelector(".image-card")
    // imageCard.dataset.id = image.id

    title.textContent = image.title
    dogImage.src = image.image
    likes.innerHTML = `
      <span>${image.likes} Likes</span>
      <button class="like-button" dataset-id=${image.id}>♥</button>
    `

    comments.innerHTML = `
    <li>${image.comments[0].content}</li>
    <li>${image.comments[1].content}</li>
    <li>${image.comments[2].content}</li>
    `
  }

/* Deliverable 2: Click handler - when you click the heart, the image likes will
increase and will persist */

  const clickHandler = () => {
    const likeButton = document.querySelector(".like-button")
    likeButton.addEventListener("click", e => {
      const button = e.target
      button.dataset.id = image.id
      console.log()

    })
  }


  getImages()
  clickHandler()
})

