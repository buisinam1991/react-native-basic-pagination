import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { PaginationButton } from '../PaginationButton';
import { PaginationSideButtonsProps } from './props';

export const PaginationSideButtons = ({
  totalPages,
  currentPage,
  children,
  showLastPagesButtons = false,
  handleChangePage,
  containerStyle,
  textStyle,
  btnStyle,
  btnFirst,
  btnLast,
  btnPre,
  btnNext
}: PaginationSideButtonsProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {showLastPagesButtons && (
        <PaginationButton
          textStyle={textStyle}
          btnStyle={btnStyle}
          onPress={() => handleChangePage('1')}>
          {btnFirst ? btnFirst : '<<'}
        </PaginationButton>
      )}
      <PaginationButton
        textStyle={textStyle}
        btnStyle={btnStyle}
        onPress={() =>
          currentPage > 1 && handleChangePage(`${currentPage - 1}`)
        }>
        {btnPre ? btnPre : '<'}
      </PaginationButton>
      {children}
      <PaginationButton
        textStyle={textStyle}
        btnStyle={btnStyle}
        onPress={() =>
          currentPage < totalPages && handleChangePage(`${currentPage + 1}`)
        }>
        {btnNext ? btnNext : '>'}
      </PaginationButton>
      {showLastPagesButtons && (
        <PaginationButton
          textStyle={textStyle}
          btnStyle={btnStyle}
          onPress={() => handleChangePage(`${totalPages}`)}>
          {btnLast ? btnLast : '>>'}
        </PaginationButton>
      )}
    </View>
  );
};
