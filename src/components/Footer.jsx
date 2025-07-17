export default function Footer({ dcComics, dc, shop, sites, followUs }) {
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="row justify-content-between align-items-start">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-6 col-md-4 mb-4 p-4">
                <h5 className="fw-bold">DC COMICS</h5>
                <ul className="list-unstyled">
                  {dcComics.map(({ id, href, name }) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="footer-link text-decoration-none d-block py-1"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
                <h5 className="fw-bold mt-4">SHOP</h5>
                <ul className="list-unstyled">
                  {shop.map(({ id, href, name }) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="footer-link text-decoration-none d-block py-1"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6 col-md-4 mb-4 p-4">
                <h5 className="fw-bold">DC</h5>
                <ul className="list-unstyled">
                  {dc.map(({ id, href, name }) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="footer-link text-decoration-none d-block py-1"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6 col-md-4 mb-4 p-4">
                <h5 className="fw-bold">SITES</h5>
                <ul className="list-unstyled">
                  {sites.map(({ id, href, name }) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="footer-link text-decoration-none d-block py-1"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-center mt-4 mt-lg-0">
            <img
              src="/img/dc-logo-bg.png"
              alt="DC Logo"
              className="img-zoom-crop"
            />
          </div>
        </div>
      </div>
      <div className="container-social">
        <div>
          <button className="signup-btn">SIGN-UP NOW!</button>
        </div>
        <div className="social">
          <span>FOLLOW US</span>
          {followUs.map(({ id, src, alt, href }) => (
            <a key={id} href={href}>
              <img src={src} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
