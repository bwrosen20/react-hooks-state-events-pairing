import video from "../data/video.js";
import React,{useState} from "react"

function App() {
  console.log("Here's your data:", video);

  const [upvote,setUpvote]=useState(video.upvotes)
  const [downvote,setDownvote]=useState(video.downvotes)
  const [commentHider,setCommentHider]=useState(true)

  const listOfComments=video.comments;

  function onUpvote(){
    setUpvote(upvote+1)
  }

  function onDownvote(){
    setDownvote(downvote-1)
  }

function hideComments(){
  setCommentHider(!commentHider)
}

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    <h2>{video.title}</h2>
    <p>{video.views} Views | Uploaded {video.createdAt}</p>
    <span>
      <button className="select" onClick={onUpvote} value={upvote}>{upvote} 👍</button>
      <button className="select" onClick={onDownvote} value={downvote}>{downvote} 👎</button>
    </span>
    <br></br><br></br>
    <span><button onClick={hideComments}>{commentHider?"Hide Comments":"Show Comments"}</button></span>
    <hr></hr>
    <h3>{video.comments.length} Comments</h3>
    {(commentHider) &&
      listOfComments.map((statement)=>(
      <div>
        <h3>{statement.user}</h3>
      <p>{statement.comment}</p>
      </div>
    ))}
    </div>
  );
}

export default App;
