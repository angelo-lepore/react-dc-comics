import comics from "../db/comics";
import market from "../db/market";
import ProductCard from "./ProductCard";

export default function Main() {
  return (
    <main>
      <div className="jumbotron"></div>
      <div className="container">
        <div className="bg-black row row-cols-6 py-4 ps-4">
          {comics.map(({ id, title, series, thumb }) => {
            return (
              <ProductCard
                key={id}
                title={title}
                series={series}
                thumb={thumb}
              />
            );
          })}
        </div>
      </div>
      <div
        className="d-flex flex-nowrap justify-content-center overflow-auto py-4"
        style={{ backgroundColor: "#0082f9" }}
      >
        {market.map((item, id) => {
          return (
            <div className="market text-center text-white mx-3" key={id}>
              <img src={item.img} alt={item.title} className="mb-2 img-fluid" />
              <h5 className="market-title">{item.title}</h5>
            </div>
          );
        })}
      </div>
    </main>
  );
}
