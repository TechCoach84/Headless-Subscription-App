'use client';
import Logo from '../../atoms/Logo';
import OfferBanner from '../../atoms/OfferBanner';
import {useState} from 'react';
import FilterDevices from '../../molecules/FilterDevices';
import BuySellButtons from '../../molecules/BuySellButtons';
import PlatformInfoContainer from '../../molecules/PlatformInfoContainer';
import CartContainer from '../../molecules/CartContainer';
import SearchContainer from '../../molecules/SearchContainer';

export type ProductsProps = {
  products: {
    category: string;
    link: string;
  }[];
};
export default function Header({products}: ProductsProps) {
  const [showPromoBanner, setShowPromoBanner] = useState<boolean>(true);
  return (
    <header>
      {showPromoBanner && (
        <OfferBanner content="UP TO 15% OFF SELECT MODELS THROUGH 4/17" />
      )}
      <section
        className={'w-full h-36 px-28 flex flex-row justify-between bg-white'}
      >
        <div className={'w-1/4 h-full flex items-center justify-center'}>
          <Logo />
        </div>
        <div className="w-3/4 h-full flex flex-col">
          <div className="w-full h-20 flex items-center justify-end mb-2">
            <PlatformInfoContainer />
          </div>

          <div className={'w-full h-14 flex flex-row justify-between'}>
            <div>
              <BuySellButtons />
            </div>
            <SearchContainer />
            <CartContainer />
          </div>
        </div>
      </section>

      <FilterDevices products={products} />
    </header>
  );
}
