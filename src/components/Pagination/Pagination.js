import {useState} from "react";
import "./style.css"

const Pagination = ({pageCount, parentCallback, currentPage}) => {
    // const [currentPage, setCurrentPage] = useState(1);
    return (
        <div className="pagination_fg pb-4 pt-2" hidden={pageCount===1}>

            <a onClick={() => {
                parentCallback(currentPage - 1);
            }} className={currentPage === 1 ? ('pagination_nav_hidden') : null}>&laquo;</a>

            {[...Array(pageCount)].map((e, i) => {
                return <a onClick={() => {
                    parentCallback(i + 1);
                }} className={currentPage === i + 1 ? ("active") : null}>{i + 1}</a>
            })}

            <a onClick={() => {
                parentCallback(currentPage + 1);
            }} className={currentPage === pageCount?('pagination_nav_hidden'):null}>&raquo;</a>
        </div>
    )
}

export default Pagination
