import React from 'react';
import HoverRow from './HoverRow';

const SecondHeader = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = (e: React.MouseEvent) => {
        // e.stopPropagation();
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const modal = isOpen ? (
        <div className="bg-black/50 absolute w-screen h-screen z-20 top-12"></div>
    ) : null;

    return (
        <div
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            className="flex bg-[#666] h-[50px] relative"
        >
            <HoverRow />
            {/* {modal} */}
        </div>
    );
};

export default SecondHeader;
