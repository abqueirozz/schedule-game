import { useState } from "react";

export function Card(props) {
  const user = {
    userName: "Arthur Queiroz",
    stars: 3,
    title: "O engenheiro",
    reward: [],
    rarity: "exotic",
    image:
      "https://img.olhardigital.com.br/wp-content/uploads/2021/05/Dragon-Ball-Goku-Moro-00-896x504-1.jpg",
  };
  const [flip, setFlip] = useState(true);

  return (
    <div className="card w-[320px] h-[450px] inline-block p-0 m-0 relative">
      <Content color1="#210068" color2="white"></Content>
      <img
        src={user.image}
        style={{ border: "solid 4px white" }}
        className="avatar ml-12"
      ></img>
      <div className=" flex gap-2 absolute top-[40px] left-[155px] text-white">
        <i>A</i>
        <i>A</i>
        <i>A</i>
        <i>A</i>
        <i>A</i>
      </div>
      <div className="flex gap-2 absolute top-[320px] left-[192px] text-sm">
        <ul className="inline-flex gap-3">
          {[...Array(user.stars)].map(() => {
            return <li className="inline">X</li>;
          })}
        </ul>
      </div>
      <span className="text-red-500 absolute top-[30px] left-[75px] text-[15pt]">
        O
      </span>
      <span className="text-exotic-userName font-bold absolute top-[360px] left-[55px] text-[18px] leading-6">
        {user.userName}
      </span>
      <span className="text-exotic-title absolute top-[390px] left-[55px] text[14px] font-normal leading-5">
        {user.title}
      </span>
    </div>
  );
}

function Content({ color1, color2 }) {
  return (
    <svg
      width="354"
      height="508"
      viewBox="0 0 354 508"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4_350)">
        <g clip-path="url(#clip0_4_350)">
          <rect
            x="45"
            y="18"
            width="264"
            height="419"
            rx="13.1194"
            fill="url(#paint0_linear_4_350)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-11.4721 -76.3677C-11.4721 -82.9338 -6.14926 -88.2566 0.416779 -88.2566L311.013 -88.2566C317.579 -88.2566 322.902 -82.9338 322.902 -76.3677V15.0279C322.902 21.594 317.579 26.9168 311.013 26.9168L146.139 26.9168C142.201 26.9168 138.519 28.8664 136.306 32.1231L110.559 70.0089C108.345 73.2656 104.663 75.2152 100.726 75.2152L-81.3191 75.2152C-87.8852 75.2152 -93.208 69.8924 -93.208 63.3263V37.3194C-93.208 30.7534 -87.8851 25.4305 -81.3191 25.4305L-23.3609 25.4305C-16.7949 25.4305 -11.4721 20.1077 -11.4721 13.5417V-76.3677Z"
            fill={color2}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M322.903 467.548C322.903 474.114 317.58 479.437 311.014 479.437L42.0284 479.437C35.4623 479.437 30.1395 474.114 30.1395 467.548L30.1395 361.291C30.1395 354.725 35.4623 349.402 42.0284 349.402H158.003C161.945 349.402 165.632 347.448 167.844 344.184L183.042 321.76C185.254 318.497 188.94 316.542 192.883 316.542H308.811C315.377 316.542 320.7 321.865 320.7 328.431V348.301C320.7 348.909 321.193 349.402 321.802 349.402C322.41 349.402 322.903 349.895 322.903 350.504V467.548Z"
            fill={color2}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_4_350"
          x="0.901699"
          y="0.36068"
          width="352.197"
          height="507.197"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="26.459" />
          <feGaussianBlur stdDeviation="22.0492" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_350"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_350"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4_350"
          x1="177"
          y1="18"
          x2="177"
          y2="437"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.208333" stop-color={color1} />
          <stop offset="1" stop-color={color1} stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_4_350">
          <rect
            x="45"
            y="18"
            width="264"
            height="419"
            rx="13.1194"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
