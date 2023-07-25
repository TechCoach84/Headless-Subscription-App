import { Link } from '@chakra-ui/react';
import Cart from '../atoms/Cart';
import PlatformInfo from '../atoms/PlatformInfo';
import {BiUserCircle} from 'react-icons/bi';

export default function CartContainer() {
  return (
    <section className="flex flex-row items-center justify-end ">
      <div
        className={
          'h-2/3 flex flex-row items-center divide-x-2 divide-fontGrey'
        }
      >
        <Link href="#" className="px-2 flex flex-row items-center">
          <BiUserCircle size={36} className="pr-2" />
          <PlatformInfo uppercase>Login</PlatformInfo>
        </Link>
        <Link href="#" className="px-2">
          <PlatformInfo uppercase>Create Account</PlatformInfo>
        </Link>
      </div>
      <div className="px-2">
        <Cart />
      </div>
    </section>
  );
}
