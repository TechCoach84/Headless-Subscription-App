import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function DarkHeader() {
  return (
    <section className={"w-full h-20 bg-black px-48"}>
      <div
        className={"w-1/2 h-full flex flex-row justify-between items-center"}
      >
        {/* change link to point to cart page after we have a cart page */}
        <Link href={"/"} className={"flex flex-row text-white items-center"}>
          <FaChevronLeft color={"#fff"} className={"mr-2"} />
          Return to cart
        </Link>
        <Image
          src={
            "https://cdn.shopify.com/s/files/1/0008/9296/0821/t/295/assets/logo-gazelle-white-no-bg.svg"
          }
          width={100}
          height={100}
          alt={'Gazelle logo no bg'}
        ></Image>
      </div>
    </section>
  );
}
