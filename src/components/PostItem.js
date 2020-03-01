import React from 'react';
import PropTypes from 'prop-types'

function PostHeader ({ author, date }) {
  return(
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="content">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
    );
}

function PostComments ({ comments }) {
  return(
    <div className="post-comments">
    <div className="divider" />
     {comments.map(comment => (
          <div className="comment-group" key={ comment.id }>
            <img className="avatar" src={comment.author.avatar} />
              <p>
              <span>{comment.author.name}</span>
              <span>{comment.content}</span>
              </p>
          </div>
        ))}
    </div>
    );
}

function PostItem ({ author, date, content, comments }) {
  return(
    <div className="post">
      <PostHeader author={author} date={date}/>
      <div className="post-content">{content}</div>
      <PostComments comments={comments} />      
    </div>
    );
}

PostItem.defaultProps = {
  post:
    {
      id: 1,
      author: {
        name: "Teste",
        avatar: ""
      },
      date: "31 Dez 9999",
      content: "Teste",
      comments: [
        {
          id: 1,
          author: {
            name: "teste",
            avatar: ""
          },
          content: "Conteúdo do comentário"
        }
      ]
    },
}

PostItem.PropTypes = {
  post: PropTypes.string,
};

export default PostItem;  