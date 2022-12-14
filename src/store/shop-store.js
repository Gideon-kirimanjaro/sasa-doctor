import { createContext } from "react";

const ShopContext = createContext({});
export default ShopContext;
export const ContextProvider = (props) => {
  const data = [
    {
      id: 1,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
    {
      id: 2,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
    {
      id: 3,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
    {
      id: 4,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
    {
      id: 5,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
    {
      id: 6,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
  ];
  const accordionData = [
    {
      key: 1,
      title: "Shop by category",
      categories: ["personal care", "Hygiene", "Dental"],
    },
    {
      key: 2,
      title: "Shop by brand",
      categories: ["Pappilion", "Darmol"],
    },
  ];
  const cartData = [
    {
      id: 5,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
    {
      id: 6,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
    {
      id: 4,
      productTitle: "Amoxyl",
      productPrice: 3000,
      productDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provide",
      src: "/images/dawa.JPG",
    },
  ];
  return (
    <ShopContext.Provider
      value={{ data: data, accordionData: accordionData, cartData: cartData }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
