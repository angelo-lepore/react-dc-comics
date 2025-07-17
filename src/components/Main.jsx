export default function Main({ comics, market, ProductCard }) {
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
            <a
              className="market text-center text-white mx-3 text-decoration-none"
              key={id}
              href={item.href}
            >
              <img src={item.img} alt={item.title} className="mb-2 img-fluid" />
              <h5 className="market-title">{item.title}</h5>
            </a>
          );
        })}
      </div>
    </main>
  );
}
