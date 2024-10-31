import { StyleProp, TextStyle, ViewStyle, ImageView} from 'react-native';

export interface PaginationProps {
  totalItems: number;
  pagesToDisplay?: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  showLastPagesButtons?: boolean;
  currentPage: number;
  containerStyle?: StyleProp<ViewStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeBtnStyle?: StyleProp<ViewStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
  btnLast?: ImageView;
  btnFirst?: ImageView;
  btnPre?: ImageView;
  btnNext?: ImageView;
}
