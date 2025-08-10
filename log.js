function submitComment(event, commentsId) {
  event.preventDefault();
  const form = event.target;
  const name = form[0].value;
  const message = form[1].value;
  const comment = {
    name: name,
    message: message,
    timestamp: new Date().toISOString()
  };
  const comments = JSON.parse(localStorage.getItem(commentsId)) || [];
  comments.push(comment);
  localStorage.setItem(commentsId, JSON.stringify(comments));
  displayComments(commentsId);
  form.reset();
}
function displayComments(commentsId) {
  const commentBox = document.getElementById(commentsId);
  commentBox.innerHTML = "";
  const comments = JSON.parse(localStorage.getItem(commentsId)) || [];
  comments.forEach(comment => {
    const newComment = document.createElement("p");
    newComment.innerHTML = `<strong>${comment.name}</strong>: ${comment.message}`;
    commentBox.appendChild(newComment);
  });
}
window.onload = () => {
  displayComments("comments1");
  displayComments("comments2");
  displayComments("comments3");
};
function searchPosts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const posts = document.querySelectorAll(".blog-post");
  posts.forEach(post => {
    const title = post.dataset.title.toLowerCase();
    const content = post.dataset.content.toLowerCase();
    if (title.includes(input) || content.includes(input)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}
document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = (i * 0.3) + 's';
});