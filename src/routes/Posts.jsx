import { useState } from "react";

const Posts = () => {
  const [text, setText] = useState(null)
  function handleTextAreaChange(e) {
    setText(e.target.value)
  }
  return (
  <div>
    <h1>Journal</h1>
    <div>
      <form>
        <textarea
        onChange={handleTextAreaChange}
        placeholder="What is on your mind?"
        >{text}</textarea>
      </form>
      <button
        onClick={() => alert(text)}
      >
        Submit
      </button>
    </div>
  </div>
  )
};

export default Posts;