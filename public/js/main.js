
// a Function that takes an article id
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

function poplulateComment(article_id, db_comment) {
    const { comment, _id } = db_comment;

    const comment_elm = `
<div id=${_id}>
    <p class="deleteClick" data-id=${_id}>X</P>
    <p>${comment}</P>
    <div data-reply-id${_id}>
    </div>
</div>
`;
    $(`.comments_section[data-id-comments=${article_id}]`)
        .prepend(comment_elm);
};

// a Function that takes a comment object and an article id
function addComment(article_id, comment_obj) {

    // Calls the comment api giving it the object and the article id
    $.post("/articles/api/comment" + article_id, comment_obj, function (comment) {

        // passes the dbcomment object and the article id into a fucntion that appends the comment
        poplulateComment(article_id, comment);
    })
}

// a Function that takes the id number of a comment
function deleteComment(comment_id) {

    // hits the api with the id
    $.ajax({
        url: "/articles/api/delete/" + id,
        // removes the comment from the database
        method: "DELETE",
    })

    // removes the comment from the comment section 
    $(`.${comment_id}`).remove();
}

// a Function that takes the id number of a comment and a object with an edited comment
function editComment(comment_id, editComment) {

    
    $.ajax({
        url: "/articles/api/comment/" + id,
        type: "PUT",
        data: editComment
    })
}





    
    // changes the text on the comment

// a Function that takes the id of a comment and a comment object
    // hits the appi with the id and comment object
    // handles the returned dbComment obj
        // Passes it with the original comment id to a function that handles replies

// a Function that handles replies
    // Takes a comment id and a reply obj
    //creates a div for the reply
    // the div has a delete button witht he data-id dqual to the dbReply _id
    // Appends it to the comment with the id
