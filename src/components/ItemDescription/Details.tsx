import { FC } from 'react';

interface Info {
    info: string | undefined;
    title: string;
}
const Details: FC<Info> = ({ info, title }) => {
    const toHtml = (url: string) => {
        return <div dangerouslySetInnerHTML={{ __html: url }} />;
    };

    let about;

    info ? (about = toHtml(info.replace('<br>', ''))) : null;

    return (
        <div className="flex flex-col ">
            <div className="flex justify-between mt-5 font-bold border-t-gray-300 border-t-2 w-full">
                <p className="mt-2 uppercase">{title}</p>{' '}
                <a
                    href="#"
                    className="flex relative"
                >
                    <svg
                        className="w-5 h-5 right-1 top-2 absolute"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                    <svg
                        className="w-5 h-5 right-[4px] top-[8px] absolute rotate-90 hover:rotate-0 transition duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                </a>
            </div>
            <div>
                <br></br>
                {about ? <p>{about}</p> : <p>No description</p>}
            </div>
        </div>
    );
};

export default Details;
