import React from "react";
import image1 from "../img/image1.avif";
import image2 from "../img/image2.jpg";

function AboutUs() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="my-4 text-success">About STORYSHELF</h2>
          <p>
            Welcome to STORYSHELF – your ultimate destination for exploring the
            world of books. Whether you’re an avid reader, a casual browser, or
            looking for the perfect gift, STORYSHELF is here to ignite your
            passion for reading and connect you with stories that inspire,
            educate, and entertain.
          </p>
        </div>
        <div className="col-lg-6">
          <img className="w-100" src={image1} alt="" />
        </div>
      </div>

      <div className="row my-3">
        <div className="col-lg-6 order-2 order-lg-1">
          <img className="w-100" src={image2} alt="" />
        </div>
        <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
          <h2 className="my-4 text-success">Our Mission</h2>
          <p>
            At STORYSHELF, we believe in the transformative power of books. Our
            mission is to create a haven for book lovers by offering a diverse
            selection of titles that cater to every reader’s taste. We aim to
            make the joy of reading accessible to all by providing a seamless
            online shopping experience, where you can discover new books and
            revisit old favorites from the comfort of your home.
          </p>
        </div>
      </div>

      <div className="row">
        <h2 className="my-4 text-success text-center">Why Choose Us</h2>
        <div className="col-lg-4 my-3">
          <div className="border p-3 shadow-lg rounded-4">
            <h4 className="text-center text-success">Wide Selection</h4>
            <p>
              From rare finds to the latest releases, we offer a vast catalog of
              books across genres.
            </p>
          </div>
        </div>
        <div className="col-lg-4 my-3">
          <div className="border p-3 shadow-lg rounded-4">
            <h4 className="text-center text-success">Quality Service</h4>
            <p>
            Our team is here to assist with any queries, ensuring a smooth shopping experience.
            </p>
          </div>
        </div>
        <div className="col-lg-4 my-3">
          <div className="border p-3 shadow-lg rounded-4">
            <h4 className="text-center text-success">Fast Delivery</h4>
            <p>
              With our efficient logistics, your books will be delivered quickly
              and securely to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
