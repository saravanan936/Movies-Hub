import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pageNo, nextPageFn, previousPageFn }) => {
  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
      <div onClick={previousPageFn} className="px-8 cursor-pointer">
        <i className="fa-solid fa-arrow-left text-black"></i>
      </div>
      <div>{pageNo}</div>
      <div onClick={nextPageFn} className="px-8 cursor-pointer">
        <i className="fa-solid fa-arrow-right text-black"></i>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  pageNo: PropTypes.number.isRequired,
  nextPageFn: PropTypes.func.isRequired,
  previousPageFn: PropTypes.func.isRequired,
};

export default Pagination;
