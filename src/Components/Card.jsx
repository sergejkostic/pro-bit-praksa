import { TODO_DELETE } from '../actions/types'
import { useDispatch } from 'react-redux';

function Card({ title, description, date_created, ident }) {
const date = new Date(date_created);
const dispatch = useDispatch();

  return (
    <div className="col-xl-4 col-lg-6 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                alt=""
                style={{ width: 45, height: 45 }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{title}</p>
                <p className="text-muted mb-0">{description}</p>
              </div>
            </div>
            <span className="badge rounded-pill badge-success">
              {date.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="card-footer border-0 bg-light p-2 d-flex justify-content-around">
          <a
            className="btn btn-link m-0 text-reset"
            href="#"
            role="button"
            data-ripple-color="primary"
          >
            Edit<i className="fas fa-edit ms-2"></i>
          </a>
          <a
            className="btn btn-link m-0 text-reset"
            href="#"
            role="button"
            data-ripple-color="primary"
            onClick={() => dispatch({ type: TODO_DELETE, payload: ident })}
          >
            Delete<i className="fas fa-trash ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
