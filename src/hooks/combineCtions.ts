import { asosSlice } from '@/services/reducers/asosReducer';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const allActions = { ...asosSlice.actions };
const dispatch = useDispatch();

export const combinedAction = bindActionCreators(allActions, dispatch);
