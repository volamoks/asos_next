import { FC, useState } from 'react';
import ExpendableBtn from '../../../../UI/ExpendableBtn';

interface Info {
    info: string | undefined;
    title: string;
}
const Details_item: FC<Info> = ({ info, title }) => {
    const toHtml = (url: string) => {
        return <div dangerouslySetInnerHTML={{ __html: url }} />;
    };

    const [isActive, setisActive] = useState(false);

    const handleClick = () => {
        setisActive(!isActive);
    };

    let about;

    info ? (about = toHtml(info.replace('<br>', ''))) : null;

    const detail = (
        <>
            <div className=" bg-white flex justify-between align-center py-2 font-bold w-full">
                <h2 className="mt-2 uppercase">{title}</h2>{' '}
                <span className="flex relative">
                    <ExpendableBtn
                        handleClick={handleClick}
                        isActive={isActive}
                    />
                </span>
            </div>
            <div className=" border-t-gray-100 border-b-2 py-2">
                <div
                    className={`flex  transition-all duration-300 + ${
                        isActive ? '  h-16 visible  ' : '  h-0  invisible   '
                    }`}
                >
                    <br></br>
                    {about ? <span>{about}</span> : <span>No description</span>}
                </div>
            </div>
        </>
    );

    return <div className="flex flex-col">{detail}</div>;
};

export default Details_item;
