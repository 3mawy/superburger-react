import Pagination from "../components/Pagination/Pagination";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/CommonComponents/Banner/Banner";
import CardWithTextList from "../components/Cards/CardWithText/CardWithTextList";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";
import {useEffect, useState} from "react";
import {getMenuItems} from "../redux/remotes_thunk/menuItemsThunk";
import {selectMenuItems} from "../redux/slices/menuItemsSlice";
import NotFound from "../components/CommonComponents/NotFound/NotFound";
import {useParams} from "react-router";
import {selectCategories} from "../redux/slices/categoriesSlice";
import {selectLanguage} from "../redux/slices/languageSlice";
import {useScrollState} from "../hooks/scrollHook";
import Loading from "../components/Loading/Loading";
import {useAlertState} from "../hooks/alertHook";

const ItemsList = () => {
    const colorMode = useSelector(selectColorMode)
    const dispatch = useDispatch()
    const lang = useSelector(selectLanguage)
    const isScrolled = useScrollState();

    const categoriesData = useSelector(selectCategories)
    const categoriesLoaded = categoriesData.status === 'success'
    let {cat} = useParams();
    let catId = ''

    if (categoriesLoaded) {
        const categories = categoriesData.categories.results
        if (categories) {
            const selectedCat = categories.find(category => category.name === cat);
            if (selectedCat) {
                catId = selectedCat.id
            }
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [orderBy, setOrderBy] = useState('');
    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        dispatch(getMenuItems({cat: catId, page: currentPage, orderBy: orderBy}))
    }, [currentPage, cat, orderBy])
    const menuItems = useSelector(selectMenuItems)
    const loaded = menuItems.status === 'success'
    const loading = menuItems.status === 'loading'
    const items = menuItems.menuItems.results
    const pageCount = menuItems.menuItems.total_pages
    const itemsCount = menuItems.menuItems.count

    const callback = (currentPage) => {
        setCurrentPage(currentPage)
    }

    const orderByCallback = (ordering) => {
        setOrderBy(ordering)
    }
    const filterByCallback = (filter) => {
        setFilterBy(filter)
    }
    return (
        <>
            {itemsCount === 0 ? (
                <NotFound></NotFound>
            ) : (<>{loading ? (<Loading/>) : (
                    <Container  className={`pt-5 ${isScrolled}`} dir={lang === 'ar' ? ('rtl') : null}>
                        <Row >
                            <Col lg={3}>
                                <Sidebar orderBySearch={orderByCallback}
                                         FilterBySearch={filterByCallback}/>
                            </Col>
                            <Col lg={9} className={``}>
                                <Banner title={cat}
                                        color={colorMode}/>
                                {/*<CardList row_size={4}></CardList>*/}
                                <CardWithTextList items={items} loaded={loaded} loading={loading}/>
                            </Col>
                        </Row>
                        <Pagination parentCallback={callback} pageCount={pageCount} currentPage={currentPage}/>
                    </Container>)}
                </>
            )}
        </>


    )
}

export default ItemsList


// desc="Have A Taste Of The Best Fried Chicken Sandwiches!"