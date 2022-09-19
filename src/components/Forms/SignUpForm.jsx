import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import logoS from '../../assets/logo/skilldizerLogo.png'
import googleBtn from '../../assets/logo/btn_google_signin_light_normal_web@2x.png'

function SignUpForm() {
    
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        //validate data + authenticate / useEffect
        //send to firebase
    };
    const formFields = ['Name', 'Email', 'Password']
    const formFieldTypes = ['text', 'email', 'password']
    return (
        <Container className='px-0 '>
            <Form className='shadow-lg px-5 pb-4' onSubmit={handleSubmit}>
                {/* LOGO Here */}
                <div className='text-center pt-4'>
                    <img src={logoS} alt={"skilldizer"} width="250px" />
                </div>
                <div className="text-center h3 fw-bold ">Create your Free Account</div>

                {formFields.map((field, index) => {
                    return (
                        <Form.Group key={index} className="mb-3" controlId={`formItem${index}`}>
                            <Form.Label>{field}</Form.Label>
                            <Form.Control className='rounded-3' style={{ backgroundColor: '#B0BAC3', opacity: 0.7 }}
                                type={formFieldTypes[index]}
                                placeholder={`Enter ${field}`}
                                name={field.toLowerCase()}
                                value={formData.field}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    )
                })}
                <Row className="justify-content-center text-center">
                    <Button className="w-50 py-2 fw-bold rounded-4" variant="warning" type="submit">
                        Create Account
                    </Button>
                </Row>
                <h6 className='py-3 text-center'>Already have an account? <a href="/login">Login</a></h6>

                <Row className="justify-content-center text-center">
                    <h6>- OR -</h6>
                    

                        <div className='py-2' style={{ cursor: 'pointer' }}>
                            <img src={googleBtn} alt={"googleBtn"} width="250px" />
                        </div>
                    
                </Row>
                <div className="text-center">
                    <a href="/" className="text-decoration-none me-3 link-dark">Privacy policy</a>
                    <a href="/" className="text-decoration-none me-3 link-dark">Terms of use</a>
                </div>
            </Form >

        </Container>
    )
}

export default SignUpForm;
