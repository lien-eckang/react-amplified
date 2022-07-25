/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import Group2099 from "./Group2099";
export default function Component3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="462px"
      height="600px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component3")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-45deg, rgba(98,233,181,1), rgba(19,121,111,1))"
        {...getOverrideProps(overrides, "Rectangle49")}
      ></View>
      <Group2099
        position="absolute"
        top="35%"
        bottom="35%"
        left="30.52%"
        right="30.52%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group2099")}
      ></Group2099>
    </View>
  );
}
