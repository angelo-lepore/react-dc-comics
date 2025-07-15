import comics from '../db/comics'
import market from '../db/market'

export default function Main() {
  return (
    <main>
        <div className="jumbotron"></div>
        <div className="container">
            <div className="bg-black row row-cols-6 py-4 ps-4">
                {comics.map(({ id, title, series, thumb }) => {
                    return (
                    <div key={id} className="col-6 col-sm-4 col-md-3 col-lg-2 pb-4">
                        <div className="card bg-dark text-white h-100">
                            <img className="card-img-top" src={thumb} alt={title} />
                            <div className="card-body">
                                <h6 className="card-title">{series}</h6>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
        <div className="d-flex flex-nowrap justify-content-center overflow-auto py-4" style={{ backgroundColor: '#0082F9' }}>
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
