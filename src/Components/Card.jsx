function Card({ title, description, date_created }) {
    return (
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
                            <p className="fw-bold mb-1">{title}</p>
                            <p className="text-muted mb-0">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;