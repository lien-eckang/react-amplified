/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import Component1 from "./Component1";
export default function Component2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="462px"
      height="600px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component2")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle50")}
      ></View>
      <Component1
        position="absolute"
        top="13.33%"
        bottom="18.33%"
        left="12.99%"
        right="9.09%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component1")}
      ></Component1>
    </View>
  );
}
