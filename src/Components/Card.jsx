function Card({ title, content, date, name, image }) {
  const dateObj = new Date(date);

  return (
    <div className="col-xl-4 col-lg-6 mb-4">
      <div className="card">
        <img
          src={
            image
              ? image
              : "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
          }
          className="card-img-top"
          alt="Fissure in Sandstone"
          style={{ width: '100%', objectFit: 'cover', height: 200}}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{name} - {dateObj.toLocaleDateString()}</h6>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;