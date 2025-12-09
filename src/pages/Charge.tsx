import React, { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import NavarBotton from "../components/NavbarBotton";

const Charge = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<"lastCharge" | "transferCredit">(
    "lastCharge"
  );
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-4 ">
        <p className="text-center text-[#1f2937] text-[16px] font-semibold ">
          {t("chargePage.myCharge")}
        </p>
        {/* <svg
          className=""
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <defs></defs>
          <path
            stroke="#0095da"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4.326 15.934a8.9 8.9 0 004.243 4.25 8.565 8.565 0 005.903.514 8.784 8.784 0 004.877-3.457 9.209 9.209 0 00.751-9.234 9.024 9.024 0 00-2.33-2.983 8.732 8.732 0 00-3.322-1.728 8.587 8.587 0 00-3.719-.167 8.685 8.685 0 00-3.454 1.426m0 0c-1.394.965-2.588 2.383-3.521 4.07m3.52-4.07c-.64.443-1.237.982-1.787 1.598-.641.72-2.007.429-2.135-.526L3 3l.754 5.625m3.52-4.07a10.223 10.223 0 00-1.843 1.662c-.809.92.026 2.2 1.242 2.053l2.177-.263s-2.754.33-5.096.618"
          ></path>
          <path
            stroke="#ff4f00"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9 14.5l3.5-2v-4"
          ></path>
          <path
            stroke="#ff4f00"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9 14.5l1.988-1.136a3 3 0 001.512-2.605V8.5"
          ></path>
        </svg> */}
      </div>
      <div className="flex flex-col gap-2 bg-gray-100 p-4">
        <div className="flex justify-between bg-white p-2 rounded-md">
          <button
            onClick={() => {
              setActive("lastCharge");
            }}
            className={clsx(
              "flex gap-1 items-center justify-center text-[12px] text-[#1f2937] font-semibold p-4 rounded-md",
              active === "lastCharge" ? "bg-[#b3e1f8]" : "bg-white"
            )}
          >
            {/* <svg
              className="h-24px w-24px"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#ff4f00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11.5l-3 3"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 5c-4.97 0-9 4.133-9 9.23a9.4 9.4 0 00.774 3.753c.282.649.953 1.017 1.661 1.017h13.13c.708 0 1.378-.368 1.66-1.017A9.4 9.4 0 0021 14.23C21 9.133 16.97 5 12 5zM12 5.5v1.125m6.364 1.511l-.796.796m-11.137 0l-.795-.796M4.125 14.5H3m18 0h-1.125"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 5c-4.97 0-9 4.133-9 9.23a9.4 9.4 0 00.774 3.753c.282.649.953 1.017 1.661 1.017h13.13c.708 0 1.378-.368 1.66-1.017A9.4 9.4 0 0021 14.23C21 9.133 16.97 5 12 5z"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 5c-4.97 0-9 4.133-9 9.23 0 .932.135 1.831.385 2.68.4 1.357 1.777 2.09 3.193 2.09h10.844c1.416 0 2.792-.733 3.193-2.09A9.45 9.45 0 0021 14.23C21 9.134 16.97 5 12 5zM12 5.5v1.125m6.364 1.511l-.796.796m-11.137 0l-.795-.796M4.125 14.5H3m18 0h-1.125"
              ></path>
            </svg> */}
          </button>
          <button
            onClick={() => {
              setActive("transferCredit");
            }}
            className={clsx(
              "flex gap-1 items-center justify-center text-[#4b5563] text-[12px] p-4 rounded-md",
              active === "transferCredit" ? "bg-[#b3e1f8]" : "bg-white"
            )}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Charge;
