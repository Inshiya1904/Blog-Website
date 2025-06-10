// Utility to get and save comments
function saveComment(postId, name, message) {
  const key = `comments-${postId}`;
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push({ name, message });
  localStorage.setItem(key, JSON.stringify(existing));
}

function loadComments(postId, container) {
  const key = `comments-${postId}`;
  const comments = JSON.parse(localStorage.getItem(key)) || [];
  comments.forEach(({ name, message }) => {
    const p = document.createElement('p');
    p.textContent = `${name}: ${message}`;
    container.appendChild(p);
  });
}

// Handle all comment forms on the page
document.querySelectorAll('.comment-form').forEach((form) => {
  const postId = form.closest('.blog-post').id;
  const commentList = form.nextElementSibling;

  // Load existing comments
  loadComments(postId, commentList);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name && message) {
      const comment = document.createElement('p');
      comment.textContent = `${name}: ${message}`;
      commentList.appendChild(comment);

      saveComment(postId, name, message);

      form.reset();
    }
  });
});
