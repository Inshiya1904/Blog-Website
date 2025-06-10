// Handle all comment forms on the page
document.querySelectorAll('.comment-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input').value.trim();
    const message = form.querySelector('textarea').value.trim();
    const commentList = form.nextElementSibling;

    if (name && message) {
      const comment = document.createElement('p');
      comment.textContent = `${name}: ${message}`;
      commentList.appendChild(comment);

      // Clear the form
      form.reset();
    }
  });
});
