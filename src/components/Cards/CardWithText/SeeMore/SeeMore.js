import "./style.css"
import PropTypes from "prop-types";
import ShowMoreText from "react-show-more-text";
import {useSelector} from "react-redux";
import {selectLanguage} from "../../../../redux/slices/languageSlice";

const SeeMore = ({desc, desc_ar}) => {

    const lang = useSelector(selectLanguage)

    return (
                                        <ShowMoreText
                                            /* Default options */
                                            lines={2}
                                            more={lang === 'ar' ? 'عرض المزيد' : 'Show more'}
                                            less=''
                                            className='card-text '
                                            anchorClass='my-anchor-css-class show-more-less'
                                            expanded={false}
                                            width={210}
                                        >{lang === 'ar' ? desc_ar : desc}

                                        </ShowMoreText>

    )
}
SeeMore.propTypes = {
    desc: PropTypes.string,
    desc_ar: PropTypes.string
}
export default SeeMore
