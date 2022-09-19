import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../components/Forms/SignUpForm';
import pic1 from '.././assets/pexelsSignUp.jpg'
import { useSpring, animated } from 'react-spring'

function SignUpPage() {
    const { opacity } = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: {
            // using duration instead of spring physics
            duration: 1500
        }
    });
    return (
        <animated.div style={{ opacity }}>
            <div className='min-vh-100 d-flex flex-column justify-content-center'>
                <Container className='px-0 d-flex justify-content-center '>
                    <Row sm={1} md={2} xl={2} className="shadow-lg m-0">
                        <Col sm={1} className="p-0 ">
                            <img className='img-fluid' src={pic1} alt="pic1" />
                        </Col>
                        <Col sm={1} className="p-0">
                            <SignUpForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        </animated.div>

    )
}

export default SignUpPage;