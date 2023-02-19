import * as React from "react";
import Svg, { Path, Mask, Circle } from "react-native-svg";

export default function Sendmoney(props) {
  return (
    <Svg
      width={props.width || "60"}
      height={props.height || "60"}
      viewBox="0 0 47 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="22.5" cy="19.5" r="12" fill="#FFE3B2" stroke="#4F4222" />
      <Circle
        cx="30.5"
        cy="11.5"
        r="6.1"
        fill="#FFE3B2"
        stroke="#4F4222"
        stroke-width="0.8"
      />
      <Mask id="path-3-inside-1_51_175" fill="white">
        <Path d="M30.75 14L30.225 13.3958L31.5562 11.9167H27V11.0833H31.5562L30.225 9.60417L30.75 9L33 11.5L30.75 14Z" />
      </Mask>
      <Path
        d="M30.75 14L29.9952 14.6559L30.7369 15.5095L31.4933 14.669L30.75 14ZM30.225 13.3958L29.4817 12.7269L28.8901 13.3842L29.4702 14.0518L30.225 13.3958ZM31.5562 11.9167L32.2995 12.5856L33.8016 10.9167H31.5562V11.9167ZM27 11.9167H26V12.9167H27V11.9167ZM27 11.0833V10.0833H26V11.0833H27ZM31.5562 11.0833V12.0833H33.8016L32.2995 10.4144L31.5562 11.0833ZM30.225 9.60417L29.4702 8.94825L28.8901 9.61579L29.4817 10.2731L30.225 9.60417ZM30.75 9L31.4933 8.33104L30.7369 7.49055L29.9952 8.34408L30.75 9ZM33 11.5L33.7433 12.169L34.3454 11.5L33.7433 10.831L33 11.5ZM31.5048 13.3441L30.9798 12.7399L29.4702 14.0518L29.9952 14.6559L31.5048 13.3441ZM30.9683 14.0648L32.2995 12.5856L30.813 11.2477L29.4817 12.7269L30.9683 14.0648ZM31.5562 10.9167H27V12.9167H31.5562V10.9167ZM28 11.9167V11.0833H26V11.9167H28ZM27 12.0833H31.5562V10.0833H27V12.0833ZM32.2995 10.4144L30.9683 8.9352L29.4817 10.2731L30.813 11.7523L32.2995 10.4144ZM30.9798 10.2601L31.5048 9.65592L29.9952 8.34408L29.4702 8.94825L30.9798 10.2601ZM30.0067 9.66896L32.2567 12.169L33.7433 10.831L31.4933 8.33104L30.0067 9.66896ZM32.2567 10.831L30.0067 13.331L31.4933 14.669L33.7433 12.169L32.2567 10.831Z"
        fill="#4F4222"
        mask="url(#path-3-inside-1_51_175)"
      />
      <Path
        d="M26.1428 23.0357C26.6162 23.0357 27 22.6839 27 22.2499C27 21.816 26.6162 21.4642 26.1428 21.4642C25.6694 21.4642 25.2856 21.816 25.2856 22.2499C25.2856 22.6839 25.6694 23.0357 26.1428 23.0357Z"
        stroke="#684F17"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 15.5714C18 15.1547 18.1806 14.755 18.5021 14.4603C18.8236 14.1656 19.2597 14 19.7143 14C20.169 14 20.605 14.1656 20.9265 14.4603C21.248 14.755 21.4287 15.1547 21.4287 15.5714V22.6429C21.4287 23.268 21.6996 23.8676 22.1818 24.3096C22.6641 24.7517 23.3181 25 24.0001 25C24.6821 25 25.3362 24.7517 25.8185 24.3096C26.3007 23.8676 26.5716 23.268 26.5716 22.6429V22.25M18.8572 18.7143H24.0001"
        stroke="#684F17"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
