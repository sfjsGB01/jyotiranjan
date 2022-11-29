
import { Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <Row>
        <Col style={{height: "50px",backgroundColor:"royalblue"}}>
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col style={{height: "50px"}}>&nbsp;</Col>
      </Row>
      </nav>
    </>
  )
};

export default Layout;