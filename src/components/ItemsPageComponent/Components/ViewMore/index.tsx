import React, { FC } from 'react';

interface IViewMoreProps {
    total: number;
}

const ViewMore: FC<IViewMoreProps> = ({ total = 0 }) => {
    const itemsPerPage = 48;
    const pageNum = total / itemsPerPage;

    const handleClick = () => {};

    const view = (
        <>
            {itemsPerPage > total && (
                <p className="self-center m-5">
                    You have viewed {pageNum} of {total} products
                </p>
            )}
            <button
                onClick={handleClick}
                className="uppercase border-2 border-gray-700 p-5 justify-center w-60 mx-auto mb-10 font-bold"
            >
                Load More
            </button>
        </>
    );

    return <div className="flex flex-col">{view}</div>;
};

export default ViewMore;
