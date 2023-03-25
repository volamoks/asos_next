import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const SaveForLater = () => {
    return (
        <button className=" flex border-gray-200 border-2 px-4  my-4 self-start aligh-center">
            <AiOutlineHeart className="self-center mr-2" />
            Save for later
        </button>
    );
};

export default SaveForLater;
