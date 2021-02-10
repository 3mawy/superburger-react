import sample from './sample.jpeg'
import "./style.css"
import {Col, Row, Button} from "react-bootstrap";

const CardWithText = (props) => {
    return (
        <Col >
            <div className=" card-with-side-text " style={{border: "0", marginBottom:"1rem"}}>
                <Row className=" no-gutters">
                    <Col className="col-auto img-wrapper" >
                        <img src={sample} className="img-fluid hover-zoom" alt=""/>
                    </Col>
                    <Col>
                        <div className="card-block px-2">
                        <Row>
                            <Col>
                                    <h5 className="card-title mb-1" style={{marginTop: ".3rem"}}>{props.name}</h5>
                            </Col>
                            {/*<Col xs={3} className="pl-1">*/}
                            {/*    <div className="score"><strong>8.9</strong></div>*/}
                            {/*</Col>*/}
                        </Row>
                        <Row>
                            <Col>
                                <p className="card-text mb-1">safaf  safaf safaf adfdasga adfdasga agadgdasg  fadfadf adf agdag adf</p>
                            </Col>
                        </Row>
                        <Row xs={2} className="align-items-end">
                            <Col xs={6}   className="text-left pr-0">
                                    <h5 className="card-title mb-2 " style={{marginTop: ".3rem"}}>{props.price}
                                        <span style={{color: ''}}>
                                            EGP
                                        </span>
                                    </h5>
                            </Col>
                            <Col xs={5} className="text-right pr-0 pl-1">
                                <a href="#" className="btn-primary btn_1 small gradient pulse_bt mb-1 ml-1">Order</a>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
)
}

export default CardWithText
