/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { View } from "@aws-amplify/ui-react";
export default function Component4(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="924px"
      height="600px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component4")}
    >
      <Component2
        position="absolute"
        top="0%"
        bottom="0%"
        left="50%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component2")}
      ></Component2>
      <Component3
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="50%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component3")}
      ></Component3>
    </View>
  );
}
