import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { API_BASE } from "../utils";
import { GET_POSTS_FAILURE, GET_POSTS_START, GET_POSTS_SUCCESS } from "../actions/types";

function HomePage() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POSTS_START });
    axios.get(API_BASE + "posts").then(function (response) {
      dispatch({ type: GET_POSTS_SUCCESS, payload: response.data.posts });
      console.log(response);
    }).catch(error => {
      alert('napaka');
      dispatch({ type: GET_POSTS_FAILURE });
    })
  }, []);

  return (
    <>
      <div className="row">
        {posts.map((post, index) => {
          return <Card key={index} {...post} />
        })}
      </div>
    </>
  );
}

export default HomePage;