import TopBrandCategories from './components/TopBrandCategories';
import { SecondaryImg } from './components/SecondaryImage';
import { ColorBorderImages } from './components/ColorBorderImages';
import { MainImage } from './components/MainImage';

const MainListItems = () => {
    return (
        <div className=" sm:width-full xl:max-w-screen-xl xl:min-h-[calc(100vh-400px-50px)] mx-auto relative ">
            <div className="flex flex-col p-1">
                <MainImage />
                <SecondaryImg />
                <ColorBorderImages />
                <TopBrandCategories />
            </div>
        </div>
    );
};

export default MainListItems;
