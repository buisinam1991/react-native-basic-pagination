import React from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageView} from 'react-native';

export interface PaginationSideButtonsProps {
  totalPages: number;
  currentPage: number;
  showLastPagesButtons?: boolean;
  handleChangePage: (page: string) => void;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  btnLast?: ImageView;
  btnFirst?: ImageView;
  btnPre?: ImageView;
  btnNext?: ImageView;
}
