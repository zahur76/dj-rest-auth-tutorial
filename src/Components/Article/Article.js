import './Article.css'
import { Row, Col, Button } from 'react-bootstrap';

function Article() {
    return (
        <div>
        <Row className="m-0 mt-3">
            <Col xs={12} className="text-start h2 text-three mb-2 fw-bold"><span className='border-bottom border-dark'>Content</span></Col>
            <Col xs={12} className="ms-3 text-start h6 text-dark text-three">1. <a href="#" className='text-primary text-decoration-none hover '>Introduction</a></Col>
            <Col xs={12} className="ms-3 text-start h6 text-dark text-three">2.  <a href="#" className='text-primary text-decoration-none hover '>Requirements</a></Col>
            <Col xs={12} className="ms-3 text-start h6 text-dark text-three">3.  <a href="#" className='text-primary text-decoration-none hover '>Steps</a></Col>
        </Row>
         <Row className="m-0 mt-3">
         <Col xs={12} className="text-start h2 text-three mb-2 fw-bold"><span className='border-bottom border-dark'>Introduction</span></Col>
         <Col xs={12} className="ms-3 text-start h6 text-dark text-three">1. <a href="#" className='text-primary text-decoration-none hover '>Introduction</a></Col>
         <Col xs={12} className="ms-3 text-start h6 text-dark text-three">2.  <a href="#" className='text-primary text-decoration-none hover '>Requirements</a></Col>
         <Col xs={12} className="ms-3 text-start h6 text-dark text-three">3.  <a href="#" className='text-primary text-decoration-none hover '>Steps</a></Col>
        </Row>
        </div>
    );
}

export default Article;
