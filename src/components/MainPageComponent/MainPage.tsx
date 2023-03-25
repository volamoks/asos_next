import { useGetcategoryQuery } from '@/services/api/asosFetchApi';
import Link from 'next/link';

const MainListItems = () => {
    const { data } = useGetcategoryQuery('');

    console.log(data);

    return (
        <div className=" min-h-screen max-w-screen-xl mx-auto relative">
            <div className="flex flex-col">
                <div className="flex mt-5 ml-3">
                    <img
                        src="https://content.asos-media.com/-/media/homepages/mw/2023/february/27-prime/hero/mw_global_summer_grunge_desktophero_1258x600.jpg"
                        alt="alt2"
                    />
                    <div className="absolute top-[300px] left-[500px]">
                        <Link href={'/category/page'}>
                            <button className=" bg-white font-bold text-6xl p-5">
                                New In
                            </button>
                        </Link>
                    </div>
                    <div className="absolute top-[450px] left-[498px]">
                        <button className=" bg-white font-bold text-2xl py-5 px-16">
                            Shop Asos
                        </button>
                    </div>
                </div>
                <div className="flex max-w-screen-xl my-6 justify-between">
                    <a
                        href="#"
                        className="w-1/4 px-2"
                    >
                        <img
                            className="w-full object-contain "
                            src="https://images.asos-media.com/products/new-balance-327-trainers-in-off-white-and-leopard/203644203-2?$n_480w$&wid=476&fit=constrain"
                            alt="alt2"
                        ></img>
                        <h1 className="font-bold text-2xl text-center">
                            Summer Starterpack
                        </h1>
                        <p className="text-center text-lg">Go to classics..</p>
                    </a>
                    <a
                        href="#"
                        className="w-1/4 px-2"
                    >
                        <img
                            className="w-full object-contain "
                            src="https://images.asos-media.com/products/new-balance-327-trainers-in-off-white-and-leopard/203644203-2?$n_480w$&wid=476&fit=constrain"
                            alt="alt2"
                        ></img>
                        <h1 className="font-bold text-2xl text-center">
                            Summer Starterpack
                        </h1>
                        <p className="text-center text-lg">Go to classics..</p>
                    </a>
                    <a
                        href="#"
                        className="w-1/4 px-2"
                    >
                        <img
                            className="w-full object-contain "
                            src="https://images.asos-media.com/products/new-balance-327-trainers-in-off-white-and-leopard/203644203-2?$n_480w$&wid=476&fit=constrain"
                            alt="alt2"
                        ></img>
                        <h1 className="font-bold text-2xl text-center">
                            Summer Starterpack
                        </h1>
                        <p className="text-center text-lg">Go to classics..</p>
                    </a>
                    <a
                        href="#"
                        className="w-1/4 px-2"
                    >
                        <img
                            className="w-full object-contain "
                            src="https://images.asos-media.com/products/new-balance-327-trainers-in-off-white-and-leopard/203644203-2?$n_480w$&wid=476&fit=constrain"
                            alt="alt2"
                        ></img>
                        <h1 className="font-bold text-2xl text-center">
                            Summer Starterpack
                        </h1>
                        <p className="text-center text-lg">Go to classics..</p>
                    </a>
                </div>
                <div className="flex mx-auto ">
                    {' '}
                    <a
                        href="#"
                        className="w-3/7 px-2 flex flex-col"
                    >
                        <img
                            className="w-full object-contain border-t-indigo-700 border-t-8  border-r-lime-300 border-r-8  border-b-rose-300 border-b-8  border-l-red-500 border-l-8"
                            src="https://images.asos-media.com/products/new-balance-327-trainers-in-off-white-and-leopard/203644203-2?$n_480w$&wid=476&fit=constrain"
                            alt="alt2"
                        ></img>
                        <h1 className="font-bold text-2xl text-center mt-5">
                            Summer Starterpack
                        </h1>
                        <p className="text-center text-lg">Go to classics..</p>
                        <button className="uppercase border-2 border-gray-700 p-5 justify-center w-60 mx-auto mt-5 font-bold">
                            Shop the edit
                        </button>
                    </a>
                    <a
                        href="#"
                        className="w-3/7 px-2 flex flex-col"
                    >
                        <img
                            className="w-full object-contain border-t-indigo-700 border-t-8  border-r-lime-300 border-r-8  border-b-rose-300 border-b-8  border-l-red-500 border-l-8"
                            src="https://images.asos-media.com/products/new-balance-327-trainers-in-off-white-and-leopard/203644203-2?$n_480w$&wid=476&fit=constrain"
                            alt="alt2"
                        ></img>
                        <h1 className="font-bold text-2xl text-center mt-5">
                            Summer Starterpack
                        </h1>
                        <p className="text-center text-lg">Go to classics..</p>
                        <button className="uppercase border-2 border-gray-700 p-5 justify-center w-60 mx-auto mt-5 font-bold">
                            Shop the edit
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainListItems;
