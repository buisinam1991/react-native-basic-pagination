import React, { useMemo } from 'react';
import { usePagination, isCurrentPage } from './src/hooks/usePagination';
import { PaginationButton } from './src/PaginationButton';
import { PaginationSideButtons } from './src/PaginationSideButtons';
const Pagination = ({ totalItems, pageSize = 1, pagesToDisplay = 3, onPageChange, showLastPagesButtons = false, currentPage, containerStyle = {}, btnStyle = {}, textStyle = {}, activeBtnStyle = null, activeTextStyle = null, btnFirst = null, btnLast = null, btnPre = null, btnNext = null }) => {
    const totalPages = useMemo(() => Math.ceil(totalItems / pageSize), [totalItems, pageSize]);
    const pagination = usePagination(totalItems, pageSize, pagesToDisplay, currentPage);
    const handleChangePage = (page) => {
        if (page !== '...') {
            onPageChange(parseInt(page, 10));
        }
    };
    return (<PaginationSideButtons {...{
        totalPages,
        currentPage,
        handleChangePage,
        showLastPagesButtons,
        containerStyle,
        btnStyle,
        textStyle,
        btnFirst,
        btnLast,
        btnNext,
        btnPre
    }}>
      {pagination.map((pag, index) => (<PaginationButton btnStyle={btnStyle} textStyle={textStyle} activeBtnStyle={activeBtnStyle} activeTextStyle={activeTextStyle} key={index} isActive={isCurrentPage(pag, currentPage)} onPress={() => handleChangePage(pag)}>
          {pag}
        </PaginationButton>))}
    </PaginationSideButtons>);
};
export default Pagination;
