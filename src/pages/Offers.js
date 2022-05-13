import Pagination from "../components/Pagination/Pagination";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/CommonComponents/Banner/Banner";
import CardWithTextList from "../components/Cards/CardWithText/CardWithTextList";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";
import {useEffect, useState} from "react";
import {getOffers} from "../redux/remotes_thunk/offersThunk";
import {selectOffers} from "../redux/slices/offersSlice";
import {selectLanguage} from "../redux/slices/languageSlice";

const Offers = () => {
    const colorMode = useSelector(selectColorMode)
    const dispatch = useDispatch()
    const lang = useSelector(selectLanguage)

    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        dispatch(getOffers({page: currentPage}))
    }, [currentPage])
    const offersList = useSelector(selectOffers)
    const loaded = offersList.status === 'success'
    const items = offersList.offers.results
    const pageCount = offersList.offers.total_pages
    const callbackk = (currentPage) => {
        setCurrentPage(currentPage)
    }
    return (
        <Container className={`pt-5`} dir={lang === 'ar' ? ('rtl') : null}>
            <Row>
                <Col lg={3}>
                    <Sidebar/>
                </Col>
                <Col lg={9}>
                    <Banner title="Offers"
                            color={colorMode}/>
                    {/*<CardList row_size={4}></CardList>*/}
                    <CardWithTextList offers={true} items={items} loaded={loaded}/>
                </Col>
            </Row>
            <Pagination parentCallback={callbackk} pageCount={pageCount}/>
        </Container>
    )
}

export default Offers
