// import {
//   getCertifiedInfo,
//   getProduct,
//   getProducts,
// } from '@/app/AllData';
// import {json, LoaderFunction} from '@shopify/remix-oxygen';
// import invariant from 'tiny-invariant';
// import Header from '../components/organisms/header/Header';
// import Notify from '../components/organisms/notify';
// import ProtectionPlan from '../components/organisms/protectionPlan';
// import Specs from '../components/organisms/specs';
// import CertifiedGuarantee from '../components/organisms/certifiedGuarantee';
// import KeyFeatures from '../components/organisms/keyFeatures';
// import CustomersConsidered from '../components/organisms/customersConsidered';

// export type CategoryLinkProps = {
//   category: string;
//   link: string;
// };
// export const loader: LoaderFunction = async ({params}) => {
//   const {productSlug} = params;
//   invariant(productSlug, 'A product slug is required');
//   const selectedProduct = await getProduct(productSlug);
//   const productDetails = {
//     price: selectedProduct?.price,
//     offerPercantage: selectedProduct?.offerPercentage,
//     title: selectedProduct?.title,
//     variants: selectedProduct?.variants[0],
//   };
//   const products = await getProducts();
//   const categoryLinkArray: CategoryLinkProps[] = products.map((product) => ({
//     category: product.category,
//     link: product.link,
//   }));

//   const variants = selectedProduct ? selectedProduct?.variants : [];
//   const certifiedInfo = await getCertifiedInfo();
//   return json({
//     selectedProduct,
//     categoryLinkArray,
//     variants,
//     productDetails,
//     certifiedInfo,
//     products,
//   });
// };
// export default function ProductRoute() {
//   const {
//     selectedProduct,
//     categoryLinkArray,
//     variants,
//     productDetails,
//     certifiedInfo,
//     products,
//   } = useLoaderData();
//   return (
//     <div data-cy="product-screen">
//       <Header products={categoryLinkArray} />
//       <main className={'w-full px-28 pt-5 flex flex-col'}>
//         <section
//           className={'w-full flex flex-row'}
//           data-cy="productinfosection"
//         >
//           <div className={'w-1/2'}>
//             <CertifiedGuarantee certifiedInfo={certifiedInfo} />
//           </div>
//           <div className={'w-1/2'} data-cy="specsprotectionplansection">
//             <Specs variants={variants} />
//             {selectedProduct.productRemaining === 0 ? (
//               <Notify
//                 price={productDetails.price}
//                 offerPercentage={productDetails.offerPercantage}
//               />
//             ) : (
//               <ProtectionPlan
//                 price={selectedProduct.price}
//                 protectionPlan={selectedProduct.protectionPlan}
//               />
//             )}
//           </div>
//         </section>
//         <section className={'w-full'} data-cy="keyfeaturessection">
//           <KeyFeatures
//             keyFeatures={selectedProduct.keyFeatures}
//             specifications={selectedProduct.specifications}
//             reviews={selectedProduct.reviews}
//             products={products}
//           />
//         </section>
//         <section>
//           <CustomersConsidered products={products} />
//         </section>
//       </main>
//     </div>
//   );
// }
