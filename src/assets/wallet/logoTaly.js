import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function LogoTaly(props) {
  return (
    <Svg
      width={props.width || "82"}
      height={props.height || "20"}
      viewBox="0 0 82 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.6164 3.41923C12.744 3.67665 12.8211 3.98471 12.8418 4.31962C12.8526 4.4936 12.8479 4.67242 12.8283 4.85224L12.0235 4.85224L11.0235 4.85224L8.52355 4.85224L0.499461 4.6837C0.629646 4.18976 0.19425 4.52201 0.499512 4.18359C0.804774 3.84518 1.92186 3.83454 2.27574 3.79184L11.4151 2.68718C11.6612 2.65749 11.8975 2.70806 12.1058 2.83499C12.314 2.96192 12.4887 3.16181 12.6164 3.41923Z"
        fill="#FFAF4B"
      />
      <Path
        d="M12.7357 5.35076C12.7792 5.18574 12.8101 5.01856 12.8283 4.85224M12.8283 4.85224C12.8479 4.67242 12.8526 4.4936 12.8418 4.31962C12.8211 3.98471 12.744 3.67665 12.6164 3.41923C12.4887 3.16181 12.314 2.96192 12.1058 2.83499C11.8975 2.70806 11.6612 2.65749 11.4151 2.68718L2.27574 3.79184C1.92186 3.83454 0.804774 3.84518 0.499512 4.18359C0.19425 4.52201 0.629646 4.18976 0.499461 4.6837L8.52355 4.85224L11.0235 4.85224L12.0235 4.85224L12.8283 4.85224Z"
        stroke="#7D3F3C"
        stroke-width="0.2"
      />
      <Path
        d="M12.4444 19.1836H1.55556C1.143 19.1836 0.747335 18.9405 0.455612 18.5077C0.163888 18.0749 0 17.4879 0 16.8759V6.49129C0 6.09002 0.000839545 5.25018 0.00141778 4.71933C0.00170659 4.45419 0.208689 4.23546 0.473518 4.22249C0.837427 4.20466 1.31763 4.18359 1.55556 4.18359H12.4444C12.857 4.18359 13.2527 4.42672 13.5444 4.8595C13.8361 5.29228 14 5.87925 14 6.49129V16.8759C14 17.4879 13.8361 18.0749 13.5444 18.5077C13.2527 18.9405 12.857 19.1836 12.4444 19.1836Z"
        fill="#BA1916"
      />
      <Path
        d="M27.251 7.426V9.296H20.621V14.277C20.621 14.6623 20.6437 14.9457 20.689 15.127C20.7343 15.3083 20.8023 15.4443 20.893 15.535C21.0517 15.705 21.3123 15.79 21.675 15.79C21.981 15.79 22.2757 15.7277 22.559 15.603C22.8423 15.467 23.1313 15.2573 23.426 14.974C23.6753 14.7473 23.868 14.5037 24.004 14.243C24.14 13.9823 24.208 13.716 24.208 13.444C24.208 13.2287 24.14 13.053 24.004 12.917C23.868 12.781 23.647 12.713 23.341 12.713C23.1937 12.713 23.0577 12.7187 22.933 12.73C22.8197 12.7413 22.712 12.7583 22.61 12.781L22.304 10.945C22.5533 10.8883 22.8027 10.843 23.052 10.809C23.3013 10.775 23.5903 10.758 23.919 10.758C24.5197 10.758 25.0013 10.86 25.364 11.064C25.7267 11.268 25.993 11.54 26.163 11.88C26.333 12.22 26.418 12.6053 26.418 13.036C26.418 13.6593 26.2877 14.243 26.027 14.787C25.7663 15.3197 25.4207 15.8013 24.99 16.232C24.5367 16.674 24.0153 17.0253 23.426 17.286C22.8367 17.5353 22.2077 17.66 21.539 17.66C20.927 17.66 20.451 17.6033 20.111 17.49C19.771 17.3767 19.482 17.2123 19.244 16.997C19.006 16.793 18.802 16.4927 18.632 16.096C18.462 15.6993 18.377 15.0873 18.377 14.26V9.296H16.83V7.426H27.251ZM23.46 7.426C23.4487 7.07467 23.358 6.82533 23.188 6.678C23.018 6.51933 22.7177 6.44 22.287 6.44H21.012C20.1507 6.44 19.448 6.36067 18.904 6.202C18.3713 6.032 17.952 5.777 17.646 5.437C17.4307 5.199 17.272 4.92133 17.17 4.604C17.0793 4.27533 17.034 3.90133 17.034 3.482C17.034 3.312 17.0397 3.159 17.051 3.023C17.0623 2.87567 17.085 2.7 17.119 2.496L19.244 2.632C19.2327 2.734 19.2213 2.82467 19.21 2.904C19.21 2.98333 19.21 3.057 19.21 3.125C19.21 3.363 19.2327 3.57833 19.278 3.771C19.3347 3.95233 19.4253 4.10533 19.55 4.23C19.6747 4.34333 19.8333 4.42833 20.026 4.485C20.2187 4.54167 20.5303 4.57 20.961 4.57H22.304C22.9727 4.57 23.4997 4.621 23.885 4.723C24.2817 4.825 24.616 5.00633 24.888 5.267C25.1033 5.48233 25.2677 5.76567 25.381 6.117C25.5057 6.457 25.5737 6.89333 25.585 7.426H23.46ZM32.4151 7.426V9.296H30.7831V18H28.5391V10.452C28.4031 10.1007 28.2105 9.823 27.9611 9.619C27.7118 9.40367 27.3888 9.296 26.9921 9.296H26.9071V7.426H27.2471C27.5078 7.426 27.7515 7.494 27.9781 7.63C28.2048 7.766 28.4145 8.055 28.6071 8.497C28.5958 8.44033 28.5788 8.31 28.5561 8.106C28.5448 7.902 28.5391 7.72633 28.5391 7.579V6.304H30.3751L30.7661 7.426H32.4151ZM37.5782 7.426V9.296H35.9462V18H33.7022V9.296H32.0702V7.426H33.7192C33.5379 7.21067 33.3396 6.967 33.1242 6.695C32.9202 6.41167 32.7389 6.16233 32.5802 5.947C33.2262 5.063 33.8609 4.366 34.4842 3.856C35.1189 3.33467 35.7819 2.96633 36.4732 2.751C37.1759 2.52433 37.9466 2.411 38.7852 2.411C39.4312 2.411 40.0546 2.462 40.6552 2.564C41.2559 2.65467 41.8792 2.80767 42.5252 3.023C43.1712 3.23833 43.8739 3.52733 44.6332 3.89C45.3926 4.24133 46.2482 4.67767 47.2002 5.199L46.1462 6.763C45.2962 6.321 44.5482 5.94133 43.9022 5.624C43.2562 5.30667 42.6612 5.05167 42.1172 4.859C41.5846 4.655 41.0689 4.50767 40.5702 4.417C40.0829 4.32633 39.5672 4.281 39.0232 4.281C38.3999 4.281 37.8389 4.383 37.3402 4.587C36.8529 4.791 36.4222 5.05167 36.0482 5.369C35.6856 5.675 35.3682 5.99233 35.0962 6.321C35.1982 6.50233 35.3116 6.695 35.4362 6.899C35.5722 7.09167 35.7139 7.26733 35.8612 7.426H37.5782ZM50.7653 7.426V9.296H49.1333V18H46.8893V12.645L47.3483 13.614C47.167 13.2853 46.9517 13.002 46.7023 12.764C46.453 12.526 46.1697 12.407 45.8523 12.407C45.739 12.407 45.6087 12.4353 45.4613 12.492C45.3253 12.5487 45.2063 12.6563 45.1043 12.815C45.0137 12.9737 44.9683 13.206 44.9683 13.512C44.9683 13.614 44.974 13.7103 44.9853 13.801C44.9967 13.8803 45.008 13.9653 45.0193 14.056L43.0983 14.175C43.0417 13.801 42.9283 13.478 42.7583 13.206C42.5997 12.9227 42.3957 12.7073 42.1463 12.56C41.897 12.4127 41.5967 12.339 41.2453 12.339C41.0413 12.339 40.86 12.3787 40.7013 12.458C40.5427 12.526 40.418 12.628 40.3273 12.764C40.248 12.9 40.2083 13.0587 40.2083 13.24C40.2083 13.648 40.367 13.9653 40.6843 14.192C41.013 14.4187 41.4097 14.6057 41.8743 14.753L41.2283 16.657C40.5483 16.4643 39.959 16.2093 39.4603 15.892C38.9617 15.5633 38.5763 15.1723 38.3043 14.719C38.0323 14.2657 37.8963 13.7443 37.8963 13.155C37.8963 12.5883 38.0323 12.101 38.3043 11.693C38.5877 11.285 38.9617 10.9733 39.4263 10.758C39.891 10.5313 40.401 10.418 40.9563 10.418C41.625 10.418 42.186 10.5313 42.6393 10.758C43.0927 10.9733 43.563 11.3303 44.0503 11.829L43.7443 11.71C43.869 11.3133 44.09 11.013 44.4073 10.809C44.7247 10.605 45.059 10.503 45.4103 10.503C45.807 10.503 46.1583 10.5823 46.4643 10.741C46.7817 10.8997 47.0763 11.115 47.3483 11.387L46.9743 11.659C46.9517 11.4097 46.929 11.1603 46.9063 10.911C46.895 10.6617 46.8893 10.4123 46.8893 10.163V9.296H37.2333V7.426H50.7653ZM53.2337 5.63636V10.1882H51.5675V5.63636H53.2337ZM61.1737 7.426V9.296H60.2047C59.8194 9.48867 59.4454 9.72667 59.0827 10.01C58.7314 10.282 58.414 10.5993 58.1307 10.962C57.8587 11.3133 57.6377 11.7043 57.4677 12.135C57.309 12.5657 57.2297 13.0303 57.2297 13.529C57.2297 14.209 57.3317 14.7417 57.5357 15.127C57.7397 15.5123 57.9947 15.7843 58.3007 15.943C58.6067 16.0903 58.9127 16.164 59.2187 16.164C59.4227 16.164 59.621 16.147 59.8137 16.113C60.0064 16.0677 60.2274 15.9827 60.4767 15.858L61.3267 17.541C60.9527 17.7563 60.5844 17.9037 60.2217 17.983C59.859 18.051 59.4794 18.085 59.0827 18.085C58.244 18.085 57.513 17.915 56.8897 17.575C56.2664 17.2237 55.7847 16.7137 55.4447 16.045C55.116 15.365 54.9517 14.5433 54.9517 13.58C54.9517 12.8887 55.0594 12.2313 55.2747 11.608C55.49 10.9733 55.7847 10.3897 56.1587 9.857C56.544 9.32433 56.9917 8.854 57.5017 8.446C58.0117 8.02667 58.5614 7.68667 59.1507 7.426H61.1737ZM74.1857 7.426V9.296H72.5537V18H70.3097V11.336L70.4117 12.203C70.0604 11.727 69.7091 11.302 69.3577 10.928C69.0064 10.554 68.6551 10.2367 68.3037 9.976C67.9524 9.71533 67.5954 9.517 67.2327 9.381C66.8701 9.245 66.5017 9.177 66.1277 9.177C65.6744 9.177 65.2607 9.262 64.8867 9.432C64.5241 9.602 64.1841 9.83433 63.8667 10.129C63.5607 10.4237 63.2491 10.7693 62.9317 11.166L62.8807 10.775C63.1074 10.6277 63.3511 10.4973 63.6117 10.384C63.8837 10.2593 64.2011 10.197 64.5637 10.197C65.1304 10.197 65.5384 10.3557 65.7877 10.673C66.0484 10.979 66.1787 11.3247 66.1787 11.71C66.1787 11.8913 66.1731 12.0613 66.1617 12.22C66.1617 12.3787 66.1504 12.4863 66.1277 12.543L65.6007 12.39C65.7141 12.254 65.8444 12.1123 65.9917 11.965C66.1504 11.8063 66.3147 11.6477 66.4847 11.489C66.6547 11.3303 66.8191 11.183 66.9777 11.047L69.0177 9.279L70.3607 10.622L65.3287 15.195L63.7817 13.75L65.3797 12.288L64.7337 13.155L64.0367 13.563C64.2294 13.3703 64.3767 13.172 64.4787 12.968C64.5807 12.764 64.6317 12.5713 64.6317 12.39C64.6317 12.118 64.5581 11.9253 64.4107 11.812C64.2634 11.6873 64.0764 11.625 63.8497 11.625C63.7024 11.625 63.5494 11.6533 63.3907 11.71C63.2434 11.7553 63.0847 11.829 62.9147 11.931L61.2317 10.384C61.7531 9.738 62.2574 9.18833 62.7447 8.735C63.2321 8.27033 63.7421 7.919 64.2747 7.681C64.8074 7.43167 65.4024 7.307 66.0597 7.307C66.6377 7.307 67.1647 7.40333 67.6407 7.596C68.1167 7.78867 68.5814 8.06633 69.0347 8.429C69.4994 8.79167 69.9811 9.228 70.4797 9.738L70.4117 10.095C70.3891 9.86833 70.3664 9.60767 70.3437 9.313C70.3211 9.01833 70.3097 8.72933 70.3097 8.446V6.304H72.1457L72.5367 7.426H74.1857Z"
        fill="#CE2222"
      />
      <Path
        d="M74.1689 15.5327V15.0909H76.4899V15.5327H75.5907V18H75.068V15.5327H74.1689ZM76.9373 15.0909H77.5822L78.4458 17.1989H78.4799L79.3436 15.0909H79.9885V18H79.4828V16.0014H79.4558L78.6518 17.9915H78.274L77.47 15.9972H77.443V18H76.9373V15.0909ZM80.8564 18.0312C80.7702 18.0312 80.6963 18.0009 80.6348 17.9403C80.5732 17.8797 80.5429 17.8059 80.5439 17.7188C80.5429 17.6335 80.5732 17.5606 80.6348 17.5C80.6963 17.4394 80.7702 17.4091 80.8564 17.4091C80.9397 17.4091 81.0121 17.4394 81.0737 17.5C81.1362 17.5606 81.1679 17.6335 81.1689 17.7188C81.1679 17.7765 81.1528 17.8291 81.1234 17.8764C81.095 17.9238 81.0571 17.9616 81.0098 17.9901C80.9634 18.0175 80.9122 18.0312 80.8564 18.0312Z"
        fill="#8C3136"
      />
      <Path
        d="M14 10H9C8.66667 10 8 10.1333 8 10.6667V15.3333C8 15.5556 8.1 16 8.5 16C8.9 16 12.3333 16 14 16"
        stroke="#E69045"
        stroke-width="0.8"
      />
      <Circle cx="11" cy="13" r="1" fill="#E69045" />
    </Svg>
  );
}