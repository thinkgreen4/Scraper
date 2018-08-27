function poplulateComment(article_id, db_comment) {
    const { comment, _id } = db_comment;

    const comment_elm = `
<div class="comment">
    <div class="card w-100">
        <div class="card-body">
            <div class="row">
                <div class="col-md-10">
                    <p class="card-text">${comment}</p>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1">
                    <a href="${_id}">x</a>
                </div>
            </div>
        </div>
    </div>
</div>
`;
    $(`#comments_box[data-id-comments=${article_id}]`)
        .append(comment_elm);
};