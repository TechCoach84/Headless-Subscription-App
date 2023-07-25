import { Link } from '@chakra-ui/react';
import {CategoryLinkProps} from 'globalTypes';
import {ProductsProps} from '../organisms/header/Header';
import {BsStars} from 'react-icons/bs';

export default function FilterDevices({products}: ProductsProps) {
  function handleSubscribe() {
    //handle subscribe
  }
  return (
    <section
      className={
        'w-full h-12 bg-primary text-white uppercase font-light text-lg pt-2 flex flex-row pl-80 items-center justify-start'
      }
    >
      <button
        className={'text-white uppercase mx-3 flex flex-row items-center'}
        type="button"
        onClick={handleSubscribe}
      >
        <BsStars color={'#fff'} className={'mr-1'} /> Subscribe
      </button>
      {products?.map((categoryLinkObj: CategoryLinkProps) => {
        return (
          <Link
            href={categoryLinkObj.link}
            className={'text-white uppercase font-light text-lg mx-3'}
            key={categoryLinkObj.category}
          >
            {categoryLinkObj.category}
          </Link>
        );
      })}
    </section>
  );
}
