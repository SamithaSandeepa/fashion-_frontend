import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Slidder1 from "../../components/slidder/Slidder1";
import Slidder2 from "../../components/slidder/Slidder2";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Slidder1 />
          <Slidder2 />
        </div>
      </div>
    </div>
  );
};

export default Home;
