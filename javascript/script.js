import { posts } from './data.js';

let likes = 0;

function populatePostContainer() {
  for (let post of posts) {
    generateHtml(post);
  }
}

function generateHtml(post) {
  document.getElementById('post-container').innerHTML += `
         <div class="gap">
          <section class="post-header">
            <img
              class="poster-avatar"
              src="${post.avatar}"
              alt="Avatar picture of Vincent van Gogh"
            />
            <div>
              <h2 class="poster-name">${post.name}</h2>
              <p class="poster-location">${post.location}</p>
            </div>
          </section>

          <a href="#"
            ><img class="post-content" src="${post.post}" alt="Painted portrait of Vincent van Gogh"
          /></a>

          <section class="post-icons">
            <a href="#"><img class="icon-btn like" src="/assets/icons/heart.png" alt="heart button" /></a>
            <a href="#"><img class="icon-btn" src="/assets/icons/comment.png" alt="comment button" /></a>
            <a href="#"><img class="icon-btn" src="/assets/icons/dm.png" alt="direct message button" /></a>
          </section>

          <section class="post-reactions ">
            <p class="likes-count">${likes} likes</p>
            <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
          </section> 
        </div>
    `;
}

populatePostContainer();

const likeBtnEls = document.querySelectorAll('.like');

likeBtnEls.forEach((likeBtnEl) => {
  likeBtnEl.addEventListener('click', incrementLike);
});

function incrementLike() {
  likes++;
}
