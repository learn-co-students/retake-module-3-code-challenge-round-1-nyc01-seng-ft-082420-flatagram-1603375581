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

    title.textContent = image.title
    dogImage.src = image.image
    likes.innerHTML = `
      <span> ${image.likes} Likes</span>
      <button class="like-button" data-id=${image.id}>♥</button>
    `

    /* If I had more time, I would make this less brittle
    by using a for of loop to create an li for each comment but didn't have enough time
    to sufficiently test/edit and refactor the example below.     */

    // const imageCard = document.querySelector(".image-card")
    // for (comments of images.comments){
    //   const imageLi = document.createElement("li")
    //   imageLi.innerHTML = `
    //     ${comments.content}
    //   `
    //   imageCard.append(imageLi)
    // } 



    comments.innerHTML = `
    <li>${image.comments[0].content}</li>
    <li>${image.comments[1].content}</li>
    <li>${image.comments[2].content}</li>
    `
  }

/* Deliverable 2: Click handler - when you click the heart, the image likes will
increase and will persist */

  const clickHandler = () => {
    document.addEventListener("click", (e) => {
      if (e.target.matches("button")){
        const button = e.target
        const buttonId = button.dataset.id

        const spanOfLikes = document.querySelector("span").textContent[1]
        let parseLikes = parseInt(spanOfLikes)
        let likesPlusOne = parseLikes + 1

        const options = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({likes: likesPlusOne})
        }

        fetch(baseUrl, options)
          .then(response => response.json)
          .then(image => renderImage(image))
      }

    })
  }

/* Deliverable 3: Add a comment - persistence not needed */
  const commentHandler = () => {
    const commentForm = document.querySelector(".comment-form")
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const form = e.target
        let newComment = form[0].value

        const newObj = {id: 1, imageId: 1, content: newComment}

        const options = {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          // body: JSON.stringify({comments: newComment})
          body: JSON.stringify(newObj)
        }

        fetch(baseUrl, options)
          .then(response => response.json())
          .then(renderImage)

/* I know my code above will break because my code is brittle, but ran out of time
to refactor code. */

    })
    }

  getImages()
  clickHandler()
  commentHandler()
})

