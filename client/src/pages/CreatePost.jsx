import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>Create Blog</h1>

      <input type="text" placeholder="Title" />

      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
      />

      <button>Create Post</button>
    </div>
  );
}

export default CreatePost;