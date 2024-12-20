import "./HomeThree.css";
import { MdArrowOutward } from "react-icons/md";

const HomeThree = () => {
  return (
    <section className="home-three-section">
      <div className="home-three-container">
        <div className="home-three">
          <p>Tailored </p>
          <p className="three-topic">
            <hr />
            <p>Web Solutions</p>
          </p>
          <p style={{ color: "#067EF6" }}>for your Business</p>
        </div>
        <div className="three-btn">
          <button className="getbtn">Get in Touch</button>
          <button className="vbtn"> View Projects</button>
        </div>
      </div>
      <div className="vine">
        <div className="web">
          Web Development <MdArrowOutward />
        </div>
        <div className="mobile">
          Mobile Development <MdArrowOutward />{" "}
        </div>
        <div className="ecommerce">
          E-commerce Solutions <MdArrowOutward />
        </div>
        <div className="ecommerce">
          Cyber Security Analysis <MdArrowOutward />
        </div>
        <div className="crm">
          CRM Solutions <MdArrowOutward />{" "}
        </div>
        <div className="logistics">
          Logistics Solutions <MdArrowOutward />{" "}
        </div>
        <div className="edtech">
          Edutech Solutions <MdArrowOutward />
        </div>
      </div>
    </section>
  );
};

export default HomeThree;
