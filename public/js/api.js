
function getArticleComments(article_id) {

    // Hits the /articles/api and give it the id number of the article
    $.get("/articles/api" + article_id, function (comments) {

        // Takes the array of comments the api gives
        comments.forEach(function (db_comment) {

            // And passes it and the article id into a function that populates the page
            poplulateComment(article_id, db_comment);
        })
    })
}

// a Function that takes a comment object and an article id
function addComment(article_id, comment_obj) {

    // Calls the comment api giving it the object and the article id
    $.post("/articles/api/comment" + article_id, comment_obj, function (comment) {

        // passes the dbcomment object and the article id into a fucntion that appends the comment
        poplulateComment(article_id, comment);
    })
}

function deleteComment(comment_id) {

    // hits the api with the id
    $.ajax({
        url: "/articles/api/delete/" + comment_id,
        // removes the comment from the database
        method: "DELETE",
    })

    // removes the comment from the comment section 
    $(`.${comment_id}`).remove();
}

function editComment(comment_id, editComment) {

    // hits the api with the id and the object
    $.ajax({

        // changes the text on the comment
        url: "/articles/api/comment/" + comment_id,
        type: "PUT",
        data: editComment
    })

    $(`.comment[data-comment-id=${comment_id}`).text(editComment.comment);
};
