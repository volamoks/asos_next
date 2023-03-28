import { asosSlice } from '@/services/reducers/asosReducer';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const allActions = { ...asosSlice.actions };

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
