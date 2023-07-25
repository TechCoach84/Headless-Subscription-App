import { Link } from "@chakra-ui/react";

interface CustomButtonProps {
  isBuyActive: boolean;
  pageLink: string;
  children: string;
}
export default function CustomButton(props: CustomButtonProps) {
  return (
    <Link
      href={props.pageLink}
      className={`uppercase text-3xl text-center px-10 py-6 cursor-pointer ${
        props.isBuyActive
          ? 'bg-primary text-white'
          : 'bg-bgLightGrey text-fontGrey'
      }`}
    >
      {props.children}
    </Link>
  );
}
