import { useSetModal } from '@/hooks/useToggleModal';
import { HoverRow } from './HoverRow';

const SecondHeader = () => {
    const { isModal, handleOpenModal, handleCloseModal } = useSetModal();

    // const openModal = (e: React.MouseEvent) => {
    //     e.stopPropagation();
    //     setIsOpen(true);
    // };

    // const closeModal = () => {
    //     setIsOpen(false);
    // };

    const modal = isModal ? (
        <div className="sm: none bg-black/50 absolute w-screen h-screen z-20 top-12"></div>
    ) : null;

    return (
        <div
            onMouseEnter={handleOpenModal}
            onMouseLeave={handleCloseModal}
            className="hidden xl:flex bg-[#666] h-[50px] relative transition-all"
        >
            <HoverRow />
            {/* {modal} */}
        </div>
    );
};

export default SecondHeader;
