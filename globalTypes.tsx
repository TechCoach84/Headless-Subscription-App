export interface ProductsProps {
  price: number;
  offerPercentage: number;
  images: {
    url: string;
  }[];
  title: string;
  productSlug: string;
  variants: {
    storageCapacity: string[];
    carrier: string[];
  }[];
  averageRating: number;
  reviews: {
    stars: number;
  }[];
  specifications: {
    title: string;
    description: string;
  }[];
}
export interface FlexProductsProps {
  productName: string;
  rentingPrice: number;
  carrier: string;
  storageSpace: string;
  productQuality: string;
  src: string;
}
export interface FlexProductColorsProps {
  color: string;
  hex: string;
}

export interface SubHeaderProps {
  productName: string;
  rentingPrice: number;
}
export interface HowItWorksProps {
  step: number;
  title: string;
  description: string;
}
export interface ReviewProps {
  userImage: string;
  title: string;
  description: string;
  name: string;
}

export interface LoveFlexReasonsProps {
  id: number;
  title: string;
  description: string;
}
export interface FAQsProps {
  question: string;
  answer: string;
}

export interface FooterLinksProps {
  name: string;
  link: string;
}
export interface FooterPopularSearchesProps {
  name: string;
  link: string;
}

export interface CopyrightsProps {
  copyrightMessage: string;
}
export interface CategoryLinkProps {
  category: string;
  link: string;
}

export interface DetailProps {
  text: string;
  icon: string;
  showTooltip: boolean;
}
