import { Image } from "@chakra-ui/image";

export default function Logo() {
  const logoUrl = {
    url: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/t/289/assets/gazelle-logo.svg?v=161159857692628355091680646186',
    width: 150,
    height: 150,
    altText: 'Gazelle logo',
  };

  return <Image src={logoUrl.url} alt={'Logo'}/>;
}
