import React from "react";

function NewPost() {
  return (
    <div className="post-image-absolute">
      <form className="post-container">
        <div className="m-8 post-camera-container">
          <label className="custom-file-upload">
            <input type="file" className=""/>
            <img src="/camera.png" className='w-7 invert'/>
          </label>
        </div>
        <div className="font-bold">Upload Photo</div>
        <div className="m-8 post-text-container">
            <input type="text" placeholder="Please enter a caption..." className="text-center"/>
        </div>
        <button className="w-4/5">Upload Post</button>
      </form>
      <div class="overlay"></div>
    </div>
  );
}

export default NewPost;
