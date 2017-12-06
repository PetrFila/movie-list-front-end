import React from 'react';
import Comment from './Comment'

export default function Movie(props) {
const {title, yearReleased,director, comments} = props
    return (
      <div>
        <span>Title: {title}</span>
        <span>Year: {yearReleased}</span>
        
        <div>
          {
            comments?(
            comments.map(comment =>(
              <Comment key={comment._id}>
                {comment.body}
              </Comment>
            ))
          ):('No comments')
          }
        </div>
      </div>
    )
}
