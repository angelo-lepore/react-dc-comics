export default function ProductCard(props) {
  return (
    <div key={props.id} className="col-6 col-sm-4 col-md-3 col-lg-2 pb-4">
      <div className="card bg-dark text-white h-100">
        <img className="card-img-top" src={props.thumb} alt={props.title} />
        <div className="card-body">
          <h6 className="card-title">{props.series || "Book name"}</h6>
        </div>
      </div>
    </div>
  );
}
