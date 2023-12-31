import React from 'react'
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    // fixed-bottom
    <div className="footer text-center bg-dark text-white">
      <footer id="footer" className="  bg-light">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="footer-contact col-sm">
                <h3>
                  <img
                    width={100}
                    src="https://source.unsplash.com/gsUwEUr61NQ"
                    alt=""
                  />
                </h3>
                <p>
                  Kiltaveljenpolku
                  <br />
                  Espoo
                  <br />
                  Finland
                  <br />
                  <br />
                  <strong>Phone:</strong> +3581234567
                  <br />
                  <strong>Email:</strong> info@123.com
                  <br />
                </p>
              </div>
              <div className="footer-links col-sm">
                <h5>Useful Links</h5>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Products</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links col-sm">
                <h5>Our Services</h5>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/">Marketing</a>
                  </li>
                </ul>
              </div>
              <div className="footer-newsletter col-sm">
                <h5>Subscribe to our newsletter</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error quod molestias sit sint repellat rerum id,
                </p>
                <form
                //   onSubmit={() =>
                //     // toast.success("Thank you for your Subscrition")
                //   }
                >
                  <input
                    type="email"
                    required
                    placeholder="info@123.com"
                    name="email"
                  />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom/>
    </div>
  );
}

export default Footer