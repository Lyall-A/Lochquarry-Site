const comments = [
    { comment: "I was really scared about the abseiling but the instructor Mike was really encouraging and helped me do it, thanks Mike", author: "Sophie, aged 10" },
    { comment: "I would definitely come back", author: "Kelly, aged 9" },
    { comment: "Five stars, it was great", author: "Joe, aged 14" },
    { comment: "We had a great time and loved all the different activities that we did", author: "8th Gourock Guides" },
    { comment: "The Scouts loved every second of it, especially the powerboating", author: "Martin Bainbridge, Scout Leader" },
];

function randomComment() {
    const commentElement = document.querySelector(".comment");
    if (!commentElement) return;
    const comment = comments[Math.floor(Math.random() * comments.length)];
    commentElement.innerText = `'${comment.comment}' - ${comment.author}`;
}

document.addEventListener("DOMContentLoaded", randomComment);