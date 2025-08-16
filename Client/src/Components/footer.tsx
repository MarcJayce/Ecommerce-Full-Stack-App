
const Footer = () => {
  return (
    <footer className="bg-light text-light py-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="text-dark">Envy</h5>
            <p className="text-dark">Your go-to destination for premium bikes & gear.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-dark" >Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Road Bikes</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Mountain Bikes</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Gear</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Outlet</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5 className="text-dark">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className=" text-dark text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Envy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
