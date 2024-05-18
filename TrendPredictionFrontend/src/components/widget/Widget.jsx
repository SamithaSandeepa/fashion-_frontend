import "./widget.scss";
import { Link } from 'react-router-dom'; 
import coloursNav from '../../images/coloursNav.jpg'
import PaletteIcon from '@mui/icons-material/Palette';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PatternIcon from '@mui/icons-material/Pattern';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import colour1 from "../../asessts/coloursNav.jpg";
import shape1 from "../../asessts/shapesNav.jpg";
import pattern1 from "../../asessts/coloursNav.PNG";

const Widget = ({ type }) => {
  let data;
  let src;

  switch (type) {
    case "order":
      data = {
        title: "COLORS",
        link: "View all Colors",
        icon: (
          <PaletteIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        destination: "/colors",
      };
      src = colour1;
      break;
    case "earning":
      data = {
        title: "PATTERNS",
        link: "View all Patterns",
        icon: (
          <PatternIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        destination: "/pattern",
      };
      src = shape1;
      break;
    case "balance":
      data = {
        title: "SHAPES",
        link: "See all Styles",
        icon: (
          <FormatColorFillIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
        destination: "/style",
      };
      src = pattern1;
      break;
    default:
      break;
  }

  if (!data) {
    return null;
  }

  return (
    <Link to={data.destination} className="widget" style={{ backgroundImage: `url(${src})` }}>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </Link>
  );
};

export default Widget;
