import React from 'react';
import SpinnerReact from 'react-spinner-material';

const secondFooterHeight = '50px';
const mainFooterHeight = '400px';

export const Spinner = () => {
    return (
        <div
            className={`flex w-full min-h-[calc(100vh-100px)] xl:min-h-[calc(100vh-${mainFooterHeight}-${secondFooterHeight})] pt-[200px] justify-center`}
        >
            <div className="self-middle">
                <SpinnerReact color="gray " />
            </div>
        </div>
    );
};
