import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";

interface BreadCrumbProps {
  isAccountShowing: boolean;
  isShippingShowing: boolean;
  isPaymentShowing: boolean;
}

export default function BreadcrumbComponent(props: BreadCrumbProps) {
  const { isAccountShowing, isShippingShowing, isPaymentShowing } = props;
  return (
    <Breadcrumb>
      <BreadcrumbItem className={"text-fontGrey hover:text-primary"}>
        {/* Change the href to cart once we have cart page */}
        <BreadcrumbLink href="/">Cart</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <p className={`${isAccountShowing ? "text-black" : "text-fontGrey"}`}>
          Account
        </p>
      </BreadcrumbItem>
      <BreadcrumbItem className={"text-fontGrey hover:text-primary"}>
        <p className={`${isShippingShowing ? "text-black" : "text-fontGrey"}`}>
          Shipping
        </p>
      </BreadcrumbItem>
      <BreadcrumbItem className={"text-fontGrey hover:text-primary"}>
        <p className={`${isPaymentShowing ? "text-black" : "text-fontGrey"}`}>
          Payment
        </p>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
