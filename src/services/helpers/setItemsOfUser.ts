import { setToLocalStorage } from '@/components/Cart/utilities/localStorage';
import { useAppSelector } from '@/hooks/typedHooks';
import { useSelector } from 'react-redux';
import {
    useSetItemsInCartMutation,
    useSetItemsInFavMutation,
    useSetItemsMutation,
} from '../api/authApi';
import { useActions } from './../../hooks/combineActions';
// import { setItems } from './setItemsOfUser';

export enum TYPEs_OF_SET_ITEMS {
    IN_CART = 'inCart',
    IN_FAV = 'inFav',
}

const useSetItems = () => {
    // const { loggedUser } = useAppSelector(state => state.asos);
    // const { addToFav, addToBag } = useActions();
    const loggedUser = {
        id: 'QwGO5ChHoEpjFOVgDS9xz',
        email: '123',
        firstName: '123',
        lastName: '123',
        password: '123',
        isAuth: true,
    };

    const [setItemInCart] = useSetItemsInCartMutation();
    const [setItemInFav] = useSetItemsInFavMutation();

    const setItem = (item, key?: string) => {
        if (loggedUser.isAuth) {
            switch (key) {
                case TYPEs_OF_SET_ITEMS.IN_CART:
                    setItemInCart({
                        item: item,
                        userId: loggedUser.id,
                    });
                    break;
                case TYPEs_OF_SET_ITEMS.IN_FAV:
                    setItemInFav({
                        item: item,
                        userId: loggedUser.id,
                    });
                    break;
                default:
                    return;
            }
        } else {
            setToLocalStorage(key, item);
        }
    };
    return setItem;
};
export default useSetItems;
