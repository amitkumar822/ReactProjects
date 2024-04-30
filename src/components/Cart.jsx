import React from "react";

function Cart(props) {
  return (
    <div className={`${props.width} shrink-0 hover:scale-95 duration-200 cursor-pointer`}>
      <div className="h-[182px] rounded-[15px] overflow-hidden relative border border-[black]">
        <img className=" object-cover w-full h-full" src={props.image} alt="" />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 md:text-[25px] font-bold text-white tracking-tighter">
          {props.offer}
        </div>
      </div>
      <div className="mt-3 md:text-[17px] text-[#414449] font-bold overflow-hidden">
        {props.title}
      </div>
      <div className=" md:font-bold font-semibold text-[13px] md:text-4 text-[#414449]">
        <Stars className="inline" /> {props.rating}
        <span className="ml-2">
          {props.minTime} - {props.maxTime} mins
        </span>
      </div>
      <div className="text-[#838688] md:text-[17px] font-semibold text-[13px]">
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  );
}

export default Cart;

const Stars = (props) => {
  return (
    <svg
      className={props.className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-hidden="true"
      strokecolor="rgba(2, 6, 12, 0.92)"
      fillcolor="rgba(2, 6, 12, 0.92)"
    >
      <circle
        cx={10}
        cy={10}
        r={9}
        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
      />
      <path
        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="StoreRating20_svg__paint0_linear_32982_71567"
          x1={10}
          y1={1}
          x2={10}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21973B" />
          <stop offset={1} stopColor="#128540" />
        </linearGradient>
      </defs>
    </svg>
  );
};
