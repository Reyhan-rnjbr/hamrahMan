import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "../assets/Fonts/fontiran.css";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      loginPage: {
        register: "register",
        login: "login",
      },
    },
  },
  fa: {
    translation: {
      loginPage: {
        register: "ثبت نام",
        login: "ورود",
        hiPleaseEnterYourPhoneNumber:
          "سلام،لطفا شماره‌ تلفن  همراه خود را وارد کنید.",
        placeholder: "تلفن همراه",
        error: "تلفن همراه لازم است.",
        button1: "تائید و دریافت کد",
        button: "ورود با رمز عبور",
      },
      otpPage: {
        enterOkCode: "کد تائید را وارد کنید",
        sendACodeToThisNumber: "کد 5 رقمی به شماره‌ی 09197229638 ارسال شد",
        hiPleaseEnterYourPhoneNumber:
          "سلام،لطفا شماره‌ تلفن  همراه خود را وارد کنید.",
        reciveCodeAgian: "دریافت مجدد کد تائید",
        OkGo: "تائید و ادامه",
      },
      mainPage: {
        number: "09197229638",
        title1: "خدمات",
        title2: "شارژ",
        title3: "قرعه کشی",
        title4: "اینترنت",
        chart1: "مکالمه",
        chart2: "اینترنت",
        chart3: "پیامک",
        thereIsNo: "بسته  ندارید",
        thereIs: "بسته  دارید",
        lastChar: "باقی مانده ی شارژ",
        uniqueV: "ریال",
        buycharch: "خرید شارژ",
        becomeAlways: "تبدیل به دائمی",
        offer: "پیشنهاد",
        admire: "تشویق",
        home: "خانه",
        packages: "بسته‌ها",
        work: "خدمات",
        parse: "کیف‌ پول",
      },
      chargePage: {
        myCharge: "شارژ من",
        lastCharge: "مانده شارژ",
        transferCredit: "انتقال اعتبار",
        allLastCharge: "کل مانده شارژ",
        allLastChargeMoney: "0",
        uniqueMoney: "ریال",
        normal: "عادی",
        perfect: "فوق العاده",
        perfectMoney: "0",
        loyal: "وفاداری",
        loyalMoney: "0",
        womenGift: "هدیه شارژ بانوان",
        womenGiftMoney: "0",
        explainMore: "توضیحات بیشتر",
        buyANewCharge: "خرید شارژ جدید",
        pleaseEnterYourPhoneNumber:
          "شماره تلفن همراه اعتباری موردنظر خود را وارد کنید.",
        realPhone: "شمازه اعتباری",
        youMustWriteRealPhoneNumber: "شماره تلفن همراه اعتباری لازم است.",
        pleaseChoseYourAmount: "مبلغ انتقال را انتخاب کنید.",
        amount: "مبلغ (ریال)",
        amount1: "10.000",
        amount2: "20.000",
        amount3: "30.000",
        amount4: "50.000",
        amount5: "70.000",
        amount6: "100.000",

        transfer: "انتقال",
      },

      servicesPage: {
        services: "خدمات",
        usefulService: "خدمات پر کاربرد",
        simcardService: "خدمات سیم کارت",
        convertionService: "خدمات مکالمه",
        messageService: "خدمات پیامک",
        digicalService: "خدمات دیجیتال",
        elseService: "سایر خدمات",
        serviceInLocation: "خدمت در محل",
        becomeToForever: "تبدیل به دائمی",
        summeryPerformance: "خلاصه کارکرد",
        waitingForSong: "آوای انتظار",
        withCinama: "سینما همراه",
        billForOther: "قبض دیگران",
        VoLTEViLTE: "VoLTE/ViLTE",
        manageSimCard: "مدیریت سیم کارت",
        roming: "رومینگ",
        smallConvertion: "ریز مکالمات کامل",
        countFree: "تعرفه آزاد",
        blackList: "لیست سیاه",
        checkUsim: "استعلام یوسیم",
        takeCareOfLine: "حفظ خط اعتباری",
        bomino: "بومینو",
        voiceMail: "پیامگیر صوتی",
        convertionLimitation: "محدودیت مکالمه",
        convertionLimitationNatinal: "محدودیت مکالمه بین المللی",
        aLotOfMessage: "پیامک انبوه",
        callsUnsucces: "اعلام تماس های ناموفق",
        onlineMarket: "فروشگاه آنلاین",
        moneyService: "خدمات مالی",
        orderCode: "کد های دستوری",
        lookForPhone: "رد یابی گوشی",
        serviceOffice: "دفاتر خدمات",
        coverInternet: "پوشش اینترنت",
        backUp: "پشتیبانی",
        speed: "سرعت سنج",
      },
      walletPage: {
        wallet: "کیف پول",
        walletStock: "موجودی کیف پول",
        therIsNoMoneyInYourwallet: "کیف پول شما خالی‌ست",
        increaseStock: "افزایش موجودی",
        listBills: "لیست تراکنش ها",
        thereIsNoBill: "تراکنشی برای نمایش وجود ندارد!",
      },

       boxesPage: {
        myInternet: "بسته های من",
        internet: "اینترنت (1)",
        conversetion:"مکالمه (0)",
        message: "پیامک (0)",
        packege:"بسته اینترنت 30 روزه 6 گیگابایت",
        normalMeg:"3.42 گیگ عادی",
        insideTraficMeg:"معادل 9.24 گیگ ترافیک داخلی",
        insideMessageMeg:"معادل 13.68 گیگ پیام رسان داخلی",
        startData:"تاریخ فعال سازی:",
        startDataNumber:"1404/09/07-23:26:22",
        endData:"تاریخ انقضا:",
        endDataNumber:"1404/10/7-23:26:22",
        lostDay:"17روز باقی مانده",
        reservedPackege:"بسته های رزرو",
        normalGIG:"7.14 گیگ عادی",
        buyANewPackege:"خرید بسته جدید",
        thereIsNoPackege:"بسته فعلی ندارید.",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
