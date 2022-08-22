import { useState } from 'react'

function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>
        </div>
      </nav>
      <div className='main-container'>
        <div className="row">
          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={"https://mdbootstrap.com/img/new/avatars/8.jpg"}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App