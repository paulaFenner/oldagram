import { posts } from './data.js';

function populatePostContainer() {
  for (let post of posts) {
    generateHtml(post);
  }
}

document.getElementById('post-container').addEventListener('click', handleLikeClicked);

function handleLikeClicked(e) {
  if (e.target.classList.contains('like')) {
    incrementLike(e);
  }
}

function generateHtml(post) {
  document.getElementById('post-container').innerHTML += `
         <div class="post-wrapper">
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
            <p class="likes-count" data-likes="0">${post.likes} likes</p>
            <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
          </section> 
        </div>
    `;
}

function incrementLike(e) {
  e.preventDefault();

  const postContainer = e.target.closest('.post-wrapper');
  const postId = postContainer.getAttribute('data-post-id');
  const post = posts.find((post) => post.id == postId);

  if (post) {
    post.likes++;
    const likesCountEl = postContainer.querySelector('.likes-count');
    likesCountEl.textContent = `${post.likes} likes`;
  }
}

populatePostContainer();
