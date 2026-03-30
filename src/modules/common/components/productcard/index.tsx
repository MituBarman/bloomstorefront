"use client"
import Customimg from "@modules/home/components/customimg";

interface ProductCardProps {
  imgurl: string;
  name: string;
  price: number;
  discounted_Price: number;

}

const ProductCard: React.FC<ProductCardProps> = ({
  imgurl,
  name,
  price,
  discounted_Price
}) => {
  return (
    <a href={"/shop/product"} className="">
      <div className="m-5  w-[160px] max-w-[200px] md:w-[250px]  border rounded-xl text-balance overflow-hidden">
        <div className="aspect-square ">
           <Customimg
            src={imgurl}
            className="duration-2000 aspect-square w-full max-w-[300px] transition-all hover:scale-105"
            alt={name}
         />


        </div>
        <div className="p-2">
          <h1 className="text-prettyhover:text-red-500 my-2 text-xs md:text-sm font-semibold">
            {name}
          </h1>
          <div className="flex items-center gap-4 ">
            <p className="my-2 text-sm font-bold text-red-500">{`₹ ${discounted_Price}`}</p>
            <p className="my-2 text-xs font-semibold  text-gray-500 line-through">{`₹ ${price }`}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
