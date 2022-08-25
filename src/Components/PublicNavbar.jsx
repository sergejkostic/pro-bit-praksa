import { SHOW_TODO_MODAL, TODO_CHANGE_SEARCH } from "../actions/types";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE } from "../utils";

function PublicNavbar() {
  const navigate = useNavigate();
  const searchInput = useSelector((state) => state.todo.search);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const updateSearch = (event) => {
    event.preventDefault();
    dispatch({ type: TODO_CHANGE_SEARCH, payload: event.target.value });
  };

  useEffect(() => {
    searchRef.current.value = searchInput;
  }, []);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a style={{ cursor: 'pointer' }}className="navbar-brand" onClick={() => navigate(BASE)}>
          Blog App
        </a>
        <form className="d-flex input-group w-auto">
          <button
            type="button"
            className="btn btn-primary me-3"
            style={{ height: 35.27, borderRadius: 5 }}
            onClick={() => navigate(BASE + "login")}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary me-3"
            style={{ height: 35.27, borderRadius: 5 }}
            onClick={() => navigate(BASE + "register")}
          >
            Register
          </button>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(event) => updateSearch(event)}
            ref={searchRef}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </form>
      </div>
    </nav>
  );
}

export default PublicNavbar;
