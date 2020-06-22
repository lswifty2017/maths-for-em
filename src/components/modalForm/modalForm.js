import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../button/button";
import "./modalForm.scss";

const ModalForm = ({ isOpen = false, toggleFn, postsState = {} }) => {
  const [content, setContentState] = useState("");
  const [pseudonym, setPseudonymState] = useState("");

  const handleContentChange = event => {
    setContentState(event.target.value);
  };

  const handlePseudonymChange = event => {
    setPseudonymState(event.target.value);
  };

  const postContent = ({ setPosts, posts, id, setId }) => {
    setPosts([
      ...posts,
      {
        id,
        content,
        pseudonym,
        votes: 0
      }
    ]);
    setId((id += 1));
    setContentState("");
    setPseudonymState("");
    toggleFn();
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#141C3A",
      opacity: 1,
      zIndex: 2
    },
    content: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      zIndex: 2,
      top: "40px",
      left: "160px",
      right: "160px",
      bottom: "20px",
      border: "1px solid #ccc",
      background: "#F7F7F7",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px"
    }
  };

  return (
    <Modal
      id="modal_with_forms"
      isOpen={isOpen}
      closeTimeoutMS={150}
      contentLabel="form-modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={toggleFn}
      style={customStyles}
      aria={{
        labelledby: "Modal Form",
        describedby: "A popup modal form to add a post"
      }}
      ariaHideApp={false}
    >
      <div className="modalForm" tabIndex="0" role="document">
        <form>
          <label className="modalForm__content">
            <textarea
              placeholder="Write your post..."
              value={content || ""}
              onChange={handleContentChange}
              required
            ></textarea>
          </label>
          <label>
            <input
              type="text"
              placeholder="Enter your pseudonym"
              value={pseudonym || ""}
              onChange={handlePseudonymChange}
              required
            />
          </label>
          <div className="modalForm__button">
            <Button
              text="Post"
              bgColor="purple"
              borderColor="purple"
              onClick={event => {
                event.preventDefault();
                postContent(postsState);
              }}
              disabled={!content.length || !pseudonym.length}
            ></Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalForm;
