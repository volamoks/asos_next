import { useGetItemQuery } from '@/services/api/asosFetchApi';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Details from './Details';
import ItemPicComponent from './ItemPicComponent';

import SizeComponent from './SizeComponent';

const Item: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    // const { isLoading, error, item } = useAppSelector(state => state.items);
    console.log(id);
    const { data: singleitem, isLoading, isError } = useGetItemQuery(id);

    console.log(singleitem);

    const about = singleitem?.info?.aboutMe;
    const sizeAndFit = singleitem?.info?.sizeAndFit;
    const careInfo = singleitem?.info?.careInfo;

    if (!singleitem) return <div />;

    return (
        <>
            {isLoading && <h2>Loading</h2>}
            <div className="flex mt-10 justify-betweeen max-w-screen-xl mx-auto">
                <ItemPicComponent data={singleitem.media} />
                <div className="flex w-1/4 m-10">
                    <div className="flex flex-col ">
                        <h1 className="mb-5 text-xl">{singleitem.name}</h1>
                        <p className="mb-5">
                            {singleitem.price.currency}{' '}
                            {singleitem.price.current.value}
                        </p>
                        <SizeComponent data={singleitem.variants} />

                        <div className="flex ">
                            <button
                                // onClick={() => setItems('')}
                                className="w-4/5 bg-green-600 p-3 text-white font-bold uppercase"
                            >
                                Add to bag
                            </button>
                            <button className=" rounded-3xl h-10 w-10 bg-gray-300/80 self-center ml-5 flex align-center">
                                <svg
                                    className="w-5 h-5 mx-auto self-center"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <Details
                                info={about}
                                title={'Title'}
                            />
                            <Details
                                info={sizeAndFit}
                                title={'Size And Fit'}
                            />
                            <Details
                                info={careInfo}
                                title={'Care Info'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;
