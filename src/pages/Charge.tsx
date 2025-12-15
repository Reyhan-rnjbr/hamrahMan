import React, { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import NavarBotton from "../components/NavbarBotton";

const Charge = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState<"lastCharge" | "transferCredit">(
    "lastCharge"
  );
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-4 ">
        <p className="text-center text-[#1f2937] text-[16px] font-semibold ">
          {t("chargePage.myCharge")}
        </p>
        <svg
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
        </svg>
      </div>
      <div className="flex flex-col gap-2 bg-gray-100 p-4">
        <div className="flex justify-between bg-white p-2 rounded-md">
          <button
            onClick={() => {
              setActive("lastCharge");
            }}
            className={clsx(
              "flex gap-1 items-center justify-center text-[12px] text-[#1f2937] font-semibold px-10 py-3 rounded-md",
              active === "lastCharge" ? "bg-[#b3e1f8]" : "bg-white"
            )}
          >
            <svg
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
            </svg>
            {t("chargePage.lastCharge")}
          </button>
          <button
            onClick={() => {
              setActive("transferCredit");
              navigate("/transferCredit");
            }}
            className={clsx(
              "flex gap-1 items-center justify-center text-[#4b5563] text-[12px] px-10 py-3 rounded-md",
              active === "transferCredit" ? "bg-[#b3e1f8]" : "bg-white"
            )}
          >
            <svg
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
                stroke="#ff4f00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 14v2.333a2 2 0 002 2h4m0 0L8.25 20M10 18.333l-1.75-1.666M20 10V7.667a2 2 0 00-2-2h-4m0 0L15.75 4M14 5.667l1.75 1.666"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2zM21 19v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2z"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 7l1.273-.52a3.114 3.114 0 012.354 0v0a3.114 3.114 0 002.515-.071L10 6M21 18l-1.273-.52a3.114 3.114 0 00-2.354 0v0a3.114 3.114 0 01-2.515-.071L14 17"
              ></path>
            </svg>
            {t("chargePage.transferCredit")}
          </button>
        </div>
        {active === "lastCharge" && (
          <>
            <div className="flex bg-white px-4 py-5 rounded-md items-center justify-between">
              <div className="flex gap-2">
                <svg
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
                    d="M19.167 19.333L17.5 21"
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M12.5 15.984l-.58-.474a.75.75 0 00.023.977l.557-.503zm5.748-2.06a.75.75 0 00-1.5 0h1.5zm-1.5.954a.75.75 0 101.5 0h-1.5zm4.426 1.451a.75.75 0 001.112 1.008l-1.112-1.008zm-8.464 1.007a.75.75 0 101.113-1.005l-1.113 1.005zm9.79-1.352l.556.504a.75.75 0 00.025-.978l-.581.474zm-9.42.475c1.126-1.378 2.7-2.209 4.418-2.209v-1.5c-2.226 0-4.208 1.08-5.579 2.76l1.162.949zm3.668-2.535v.954h1.5v-.954h-1.5zm.75.326c1.721 0 3.296.83 4.42 2.208l1.163-.948c-1.372-1.682-3.355-2.76-5.583-2.76v1.5zm4.446 1.23l-.77.85 1.112 1.007.77-.849-1.112-1.008zm-8.12.85l-.767-.848-1.114 1.005.767.849 1.113-1.005z"
                    fill="#ff4f00"
                  ></path>
                  <path
                    d="M4.5 19v0a1.414 1.414 0 012 0v0a1.414 1.414 0 002 0v0M6.5 12h3a1 1 0 001-1V8.5a1 1 0 00-1-1h-3a1 1 0 00-1 1V11a1 1 0 001 1z"
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M18.5 10v-.782a3.5 3.5 0 00-.92-2.364l-2.49-2.718A3.5 3.5 0 0012.51 3H6a3.5 3.5 0 00-3.5 3.5v5A3.5 3.5 0 006 15h3"
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <p className="text-gray-500 text-[15px]">
                  {t("chargePage.allLastCharge")}
                </p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <p className="text-[14px] font-semibold text-[#1f2937]">
                  {t("chargePage.allLastChargeMoney")}
                </p>
                <p className="text-[10px] text-[#1f2937]">
                  {t("chargePage.uniqueMoney")}
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-white px-4 py-8 rounded-md ">
              <div className="flex items-center justify-between pb-6 ">
                <div>
                  <p className="text-gray-500 text-[13px]">
                    {t("chargePage.normal")}
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <p className="text-[13px] font-semibold">
                    {t("chargePage.allLastChargeMoney")}
                  </p>
                  <p className="text-[12px] text-gray-500 ">
                    {t("chargePage.uniqueMoney")}
                  </p>
                </div>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center justify-between py-6 ">
                <div>
                  <p className="text-gray-500 text-[13px]">
                    {t("chargePage.perfect")}
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <p className="text-[13px] font-semibold">
                    {t("chargePage.perfectMoney")}
                  </p>
                  <p className="text-[12px] text-gray-500 ">
                    {t("chargePage.uniqueMoney")}
                  </p>
                </div>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center justify-between py-6 ">
                <div>
                  <p className="text-gray-500 text-[13px]">
                    {t("chargePage.loyal")}
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <p className="text-[13px] font-semibold">
                    {t("chargePage.loyalMoney")}
                  </p>
                  <p className="text-[12px] text-gray-500 ">
                    {t("chargePage.uniqueMoney")}
                  </p>
                </div>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center justify-between py-6 ">
                <div>
                  <p className="text-gray-500 text-[13px]">
                    {t("chargePage.womenGift")}
                  </p>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <p className="text-[13px] font-semibold">
                    {t("chargePage.womenGiftMoney")}
                  </p>
                  <p className="text-[12px] text-gray-500 ">
                    {t("chargePage.uniqueMoney")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 pt-2 ">
                <p className="text-[#ff4f00] text-[15px] font-semibold ">
                  {t("chargePage.explainMore")}
                </p>
                <svg
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
                    d="M15 6l-6 6 3 3"
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M15 18l-1.5-1.5M15 6l-4.586 4.586a2 2 0 000 2.828L12 15"
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M15 18l-1.5-1.5"
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="bg-white py-4 flex justify-center fixed bottom-20  left-0 right-0">
              <button className="text-center bg-[#ff4f00] px-33 py-3 rounded-lg text-white">
                {t("chargePage.buyANewCharge")}
              </button>
            </div>
          </>
        )}
      </div>
      <div>
        <NavarBotton/>
      </div>
    </div>
  );
};

export default Charge;
