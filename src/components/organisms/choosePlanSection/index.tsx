"use client";
import React, { useState } from "react";
import ChoosePlanCard from "../choosePlanCard";
import {
  FlexProductColorsProps,
  FlexProductsProps,
} from "../../../../globalTypes";
import ModalTemplate from "../modals/ModalTemplate";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";

interface FlexProducts {
  flexProducts: FlexProductsProps[];
  flexProductColors: FlexProductColorsProps[];
}
export default function ChoosePlanSection(props: FlexProducts) {
  const { flexProducts,  flexProductColors } = props;
  const [showChoosePlanModal, setShowChoosePlanModal] =
    useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<FlexProductsProps>({
    productName: "",
    rentingPrice: 0,
    carrier: "",
    storageSpace: "",
    productQuality: "",
    src: "",
  });
  const [selectedColor, setSelectedColor] = useState<string>(
    flexProductColors[1].color
  );

  function choosePlan(product: FlexProductsProps) {
    setShowChoosePlanModal(true);
    setSelectedProduct(product);
  }
  function addSubscription() {
    //handle add subscription to cart here
    setShowChoosePlanModal(false);
  }
  function chooseColor(color: string) {
    setSelectedColor(color);
    //save choosen color
  }
  return (
    <section className={"w-full px-48 py-10 bg-bgLightGrey"}>
      {showChoosePlanModal ? (
        <ModalTemplate
          showHeaderText={true}
          headerText="Choose your device color"
          showModalBody={true}
          modalContent={
            <div className="flex flex-row p-8 h-[400px]">
              <div className={"w-1/3 flex justify-center items-start"}>
                <Image
                  src={selectedProduct.src}
                  alt={"Selected product"}
                  width={300}
                  height={300}
                />
              </div>
              <div className={"w-2/3 ml-6 flex flex-col"}>
                <div className={"flex flex-row items-center"}>
                  <h3 className="text-black font-bold text-2xl my-2 mr-4">
                    {selectedProduct.productName}
                  </h3>
                  <div
                    className={
                      "border-2 border-flexThemeBlue h-8 rounded-3xl px-2 flex flex-row items-center"
                    }
                  >
                    <p
                      className={
                        "flex flex-row items-center text-sm font-semibold text-flexThemeBlue uppercase"
                      }
                      data-testid={"tagline"}
                    >
                      <span>
                        <AiOutlineStar
                          size={14}
                          color={"#00a6b5"}
                          className={"mr-2"}
                        />
                      </span>{" "}
                      {selectedProduct.productName === "iPhone 11"
                        ? "Budget Friendly"
                        : selectedProduct.productName === "iPhone 12"
                        ? "Most Popular"
                        : "Latest and greatest"}
                    </p>
                  </div>
                </div>
                <p className="text-black font-medium text-lg my-2">
                  Subscribe for{" "}
                  <span className={"text-flexThemeBlue"}>
                    {"$"}
                    {selectedProduct.rentingPrice}
                    {"/mo"}
                  </span>
                </p>
                <hr className={"text-bgLightGrey my-4"} />
                <div
                  className={
                    "w-full flex flex-row h-12 justify-between items-center"
                  }
                >
                  <div className={"flex flex-row"}>
                    <p className={"text-sm"}>{selectedProduct.carrier}</p>
                    <div className={"w-0.5 h-6 bg-flexThemeBlue mx-4"}></div>
                    <p className={"text-sm"}>
                      {selectedProduct.storageSpace} GB
                    </p>
                    <div className={"w-0.5 h-6 bg-flexThemeBlue mx-4"}></div>
                    <p className={"text-sm"}>
                      {selectedProduct.productQuality}
                    </p>
                  </div>
                  <div className={"flex flex-row justify-center items-center"}>
                    <FaStar color={"#00a6b5"} size={12} className={"ml-1"} />
                    <FaStar color={"#00a6b5"} size={12} className={"ml-1"} />
                    <FaStar color={"#00a6b5"} size={12} className={"ml-1"} />
                    <FaStar color={"#00a6b5"} size={12} className={"ml-1"} />
                    <FaStar color={"#00a6b5"} size={12} className={"ml-1"} />
                    <p className={"ml-2 text-sm"}>100 reviews</p>
                  </div>
                </div>
                <hr className={"text-bgLightGrey my-4"} />
                <p className="text-black font-semibold text-lg mb-4">
                  Color: {selectedColor}
                </p>
                <div className={"w-full flex flex-row flex-wrap"}>
                  {flexProductColors.map((productColor, index) => (
                    <button
                      key={index}
                      onClick={() => chooseColor(productColor.color)}
                      className={
                        "w-1/3 flex flex-row items-center justify-start mb-4"
                      }
                      data-testid={"change-color-btn"}
                    >
                      <div
                        className={
                          selectedColor === productColor.color
                            ? "w-9 h-9 flex justify-center items-center rounded-full border-2 border-primary"
                            : "border-0"
                        }
                      >
                        <div
                          data-testid={"color-container"}
                          className={`w-6 h-6 rounded-full ${
                            productColor.color === "White"
                              ? "border border-black"
                              : null
                          }`}
                          style={{ backgroundColor: productColor.hex }}
                        ></div>
                      </div>
                      <p
                        className={`text-sm font-medium ml-3 ${
                          selectedColor !== productColor.color
                            ? "text-fontGrey"
                            : null
                        }`}
                      >
                        {productColor.color}
                      </p>
                    </button>
                  ))}
                </div>
                <div className={"w-full flex items-end justify-end mt-4"}>
                  <button
                    onClick={addSubscription}
                    type="button"
                    className={
                      "text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-white rounded-lg px-5 py-2.5 text-lg text-center uppercase"
                    }
                  >
                    Add subscription to cart
                  </button>
                </div>
              </div>
            </div>
          }
          closeModal={setShowChoosePlanModal}
          showFooter={false}
          setHeight={true}
          height="h-[550px]"
          setWidth={true}
          width="w-[850px]"
        />
      ) : null}
      <div className={"flex flex-row justify-between items-center mt-6 mb-12"}>
        <h2 className={"font-bold text-3xl"}>Choose the right plan for you</h2>
        <Link href={'/#details-section'} className={"text-sm font-medium text-primary"}>
         View plan details
        </Link>
      </div>
      <div className="w-full h-auto flex flex-row items-center justify-between">
        {flexProducts.map((product, index) => (
          <div
            key={index}
            className={product.productName === "iPhone 13 " ? "mr-0" : "mr-4"}
            data-testid={"plan-card"}
          >
            <ChoosePlanCard
              bgColor={
                product.productName === "iPhone 12"
                  ? "bg-flexThemeBlue"
                  : "bg-black"
              }
              titleContent={
                product.productName === "iPhone 11"
                  ? "Budget Friendly"
                  : product.productName === "iPhone 12"
                  ? "Most Popular"
                  : "Latest and greatest"
              }
              src={product.src}
              nameOfProduct={product.productName}
              monthlyCost={product.rentingPrice}
              carrier={product.carrier}
              storageSpace={product.storageSpace}
              productQuality={product.productQuality}
              handleChoosePlan={() => choosePlan(product)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
