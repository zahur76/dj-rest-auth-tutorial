import './Article.css'
import { Row, Col, Button } from 'react-bootstrap';

function Article() {
    return (
        <div>
        {/* <Row className="m-0 mt-3">
            <Col xs={12} className="text-start h2 text-three mb-2 fw-bold"><span className='border-bottom border-dark'>Content</span></Col>
            <Col xs={12} className="ms-3 text-start h6 text-dark text-three">1. <a href="#introduction" className='text-primary text-decoration-none hover '>Introduction</a></Col>
            <Col xs={12} className="ms-3 text-start h6 text-dark text-three">2. <a href="#req" className='text-primary text-decoration-none hover '>Requirements</a></Col>
            <Col xs={12} className="ms-3 text-start h6 text-dark text-three">3. <a href="#drf" className='text-primary text-decoration-none hover '>Django Rest Framework</a></Col>
            <Col xs={12} className="ms-3 text-start h6 text-dark text-three">4. <a href="#" className='text-primary text-decoration-none hover '>Steps</a></Col>
        </Row>
        <Row className="m-0 mt-3">
            <Col xs={12} className="text-start h2 text-three mb-2 fw-bold" id="introduction"><span className='border-bottom border-dark'>Introduction</span></Col>
            <Col xs={12} className="ms-3 h6 text-dark text-three p-4 justify-text">
                <p>
                With more and more Django developers moving away from using Django frontend and implementing React with Django Rest Framework, this article
                aim is to clarify the procedures involved in implementing such a stack in a logical way with emphasis on authentification.
                </p>
            </Col>        
        </Row>
        <Row className="m-0 mt-3">
            <Col xs={12} className="text-start h2 text-three mb-2 fw-bold" id="req"><span className='border-bottom border-dark'>Requirements</span></Col>
            <Col xs={12} className="ms-3 h6 text-dark text-three p-4 justify-text">
                <p>For us to implement our authentification system, the following packages will be required:</p>
                <p className='d-block'>1. Django Rest Framework</p>
                <p className='d-block'>2. dj rest auth</p>
                <p className='d-block'>2. django allauth</p>                
                <p className='d-block'>3. simple JWT</p>
                <p className='d-block'>4. django cors headers</p>
            </Col>        
        </Row>
        <Row className="m-0 mt-3">
            <Col xs={12} className="text-start h2 text-three mb-2 fw-bold" id="drf"><span className='border-bottom border-dark'>DRF</span></Col>
            <Col xs={12} className="ms-3 h6 text-dark text-three p-4 justify-text">
                <p>Django REST framework is a powerful and flexible toolkit for building Web APIs and excellent companion to many front-end libraries
                    such as React. It is built ontop of Django and will be base for all other packages.
                </p>
                <p>Installation: <span className='code-text'>pip install djangorestframework</span></p>
                <p></p>
            </Col>        
        </Row> */}
            <div className='h1 text-center mt-5'>DRF AUTHENTIFICATION TESTING</div>
            <div>Admin User: [password: password, username: admin]</div>
            <div>Test User: [password: testpassword, username: testuser]</div>
        </div>
    );
}

export default Article;
