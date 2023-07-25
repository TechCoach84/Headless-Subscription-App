
import {FaShoppingCart} from 'react-icons/fa';
import {useState} from 'react';
import { Link } from '@chakra-ui/react';

export default function Cart() {
  const [cartCount, setCartCount] = useState<number>(0);
  return (
    <section className="relative h-12 w-20 my-auto group">
      <Link
        href={'#'}
        className={
          'w-16 h-12 flex justify-between items-center bg-bgLightGrey p-2 cursor-pointer absolute top-0 right-0'
        }
      >
        <FaShoppingCart color={'#ff6900'} size={28} />
        <p>{cartCount}</p>
      </Link>
      <div className="w-80 rounded-md h-auto shadow-md absolute -bottom-28 right-0 hidden group-hover:block ">
        <div className="w-full h-14 bg-primary">
          <p className={'text-white uppercase font-light text-lg pl-2 pt-3'}>
            Shopping Cart
          </p>
        </div>
        <div>
          {cartCount === 0 ? (
            <div className="w-full h-14 py-4 bg-white">
              <p className="text-center">Your cart is empty</p>
            </div>
          ) : (
            <div className="w-full h-14 py-4 bg-white">
              <p className="text-center">Your cart has the following items</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
