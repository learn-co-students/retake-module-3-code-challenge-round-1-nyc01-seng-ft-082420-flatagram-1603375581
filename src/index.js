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

    /* if I have/had time, will come back to make this less brittle */
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

        /* select the 0 in likes span, make it an integer, add to this, pass through 
         options, and then fetch again */

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

        // const formId = form.dataset.buttonId //come back to this - not working
        // console.log(formId)

        let newComment = form[0].value

        const options = {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          
        }

    })
    }



  getImages()
  clickHandler()
  commentHandler()
})

