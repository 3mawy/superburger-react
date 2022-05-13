import {Col, Container, Row} from "react-bootstrap";

const ImgBox = ({img}) => {
    return (
                <div className="box_info_1 pr-lg-3" >
                    <div className="wrapper_img" >
                        <figure style={{height:"20rem"}}><img src={img}
                                     alt="" className="img-fluid lazy loaded imgbox_fix_center" data-was-processed="true"/></figure>
                        <span></span>
                    </div>
                </div>

)
}

export default ImgBox
