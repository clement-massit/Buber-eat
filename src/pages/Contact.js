import React from "react";
import "../components/navbar.css";
import "./css/contact.css";


const Contact = () => (

  <section class="contact-page-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-map-marked"></i>
              </div>
              <div class="contact-info-text">
                <h2>address</h2>
                <span>1215 Lorem Ipsum, 74000 </span>
                <span>Annecy , France</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>E-mail</h2>
                <span>info@LoremIpsum.com</span>
                <span>yourmail@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Thu  9:00 am - 4.00 pm</span>
                <span>Thu - Mon  10.00 pm - 5.00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="contact-page-form" method="post">
            <h2>Get in Touch</h2>
            <form action="contact-mail.php" method="post">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="single-input-field">
                    <input type="text" placeholder="Your Name" name="name" />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="single-input-field">
                    <input type="email" placeholder="E-mail" name="email" required />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="single-input-field">
                    <input type="text" placeholder="Phone Number" name="phone" />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="single-input-field">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                </div>
                <div class="col-md-12 message-input">
                  <div class="single-input-field">
                    <textarea placeholder="Write Your Message" name="message"></textarea>
                  </div>
                </div>
                <div class="single-input-fieldsbtn">
                  <input type="submit" value="Send Now" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="map">
          <iframe width="720" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=5%20Chem.%20de%20Bellevue,%2074900%20Annecy+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe>
        </div>

      </div>
    </div>
  </section>

);

export default Contact;