import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Huddlecamera from '../HuddlePages/Huddlecamera'

const AddPost = ({ setCurrentStation }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [video, setVideo]=useState(false)
  return (
    <div className="mb-3 bg-white">
      <div className="huddle_add_head">
        <div></div>
        <div>Add Post</div>
        <div
          className="cr"
          onClick={() => {
            setCurrentStation(false);
          }}
        >
          X
        </div>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <div className="d-flex justify-content-between my-3 px-2">
        <div>
          <Button variant="contained" className="btn btn-primary">
            Add File
          </Button>
        </div>
        <div>
          <Button variant="contained" className="btn btn-primary" onClick={()=>{setVideo(true)}}>
            Record
          </Button>
          {video &&
            <Huddlecamera  setVideo={setVideo}/>
          }
        </div>
        <div>
          <Button variant="contained" className="btn btn-primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
