import { useState } from 'react';
import { useActions } from './combineActions';
import { useAppSelector } from './typedHooks';

export const useSetModal = () => {
    const [isModal, setIsModal] = useState(false);

    const handleCloseModal = () => {
        setIsModal(false);
    };
    const handleOpenModal = () => {
        setIsModal(true);
    };

    const toggleModal = () => {
        setIsModal(!isModal);
    };

    return { isModal, handleCloseModal, handleOpenModal, toggleModal };
};
