import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_BASE } from "../../utils";
import {
  HIDE_POST_MODAL,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_START,
  GET_POSTS_START,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS
} from "../../actions/types";
import "./modal.css";

function AddTodoModal() {
  const isModalVisible = useSelector((state) => state.post.todoModalVisible);
  const jwt = useSelector((state) => state.user.jwt);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (!isModalVisible) {
      setImage("");
    }
  }, [isModalVisible]);

  if (!isModalVisible) {
    return <></>;
  }

  const uploadImage = () => {
    const upload = document.createElement("input");
    upload.type = "file";
    upload.accept = "image/*";
    upload.click();
    upload.onchange = function () {
      const reader = new FileReader();
      reader.onload = function () {
        setImage(reader.result);
      };
      reader.readAsDataURL(upload.files[0]);
      if (document.body.contains(upload)) {
        document.body.removeChild(upload);
      }
    };
  };

  const saveTodo = () => {
    const title = titleRef.current.value;
    const description = descRef.current.value;
    const date = new Date();

    const post = {
      title,
      content: description,
      date: date.toJSON(),
      image,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    };

    dispatch({ type: ADD_POST_START });
    axios
      .post(API_BASE + "create/post", post, config)
      .then(function (response) {
        dispatch({ type: ADD_POST_SUCCESS });
        dispatch({ type: HIDE_POST_MODAL });
        dispatch({ type: GET_POSTS_START });
        axios
          .get(API_BASE + "posts")
          .then(function (response) {
            dispatch({ type: GET_POSTS_SUCCESS, payload: response.data.posts });
            console.log(response);
          })
          .catch((error) => {
            alert("napaka");
            dispatch({ type: GET_POSTS_FAILURE });
          });
      })
      .catch(function (error) {
        alert("napaka");
        dispatch({ type: ADD_POST_FAILURE });
        dispatch({ type: HIDE_POST_MODAL });
      });
  };

  return (
    <div className="my-modal-container">
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch({ type: HIDE_POST_MODAL })}
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label className="form-label" htmlFor="todo-title">
                  Title
                </label>
                <input
                  ref={titleRef}
                  type="text"
                  id="todo-title"
                  className="form-control"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="todo-description">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="todo-description"
                  ref={descRef}
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary me-3"
                  style={{ height: 35, borderRadius: 5, marginBottom: 10 }}
                  onClick={uploadImage}
                >
                  Upload image
                </button>
                <img src={image} style={{ width: "100%" }} />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveTodo}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodoModal;
