import { Link } from '@chakra-ui/react';
import PlatformInfo from '../atoms/PlatformInfo';

export default function PlatformInfoContainer() {
  return (
    <section className="w-1/3">
      <div
        className={
          'w-full flex flex-row justify-end divide-x-2 divide-fontGrey'
        }
      >
        <div className="px-2">
          <PlatformInfo>1.800.429.3553</PlatformInfo>
        </div>
        <div className="px-2">
          <PlatformInfo>6am - 5pm PT</PlatformInfo>
        </div>
        <div className="px-2">
          <PlatformInfo>Everyday</PlatformInfo>
        </div>
      </div>
      <div
        className={
          'w-full flex flex-row justify-end divide-x-2 divide-fontGrey mt-2'
        }
      >
        <Link href="#" className="px-2">
          <PlatformInfo lightFont>Financing</PlatformInfo>
        </Link>
        <Link href="#" className="px-2">
          <PlatformInfo lightFont>Order History</PlatformInfo>
        </Link>
        <Link href="#" className="px-2">
          <PlatformInfo lightFont>Help</PlatformInfo>
        </Link>
      </div>
    </section>
  );
}
