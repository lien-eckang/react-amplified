/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Frame2099 from "./Frame2099";
import Frame2100 from "./Frame2100";
import Frame2101 from "./Frame2101";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="410px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component1")}
    >
      <Text
        fontFamily="Pretendard"
        fontSize="40px"
        fontWeight="600"
        color="rgba(16,20,20,1)"
        lineHeight="46.875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="0%"
        bottom="88.29%"
        left="0%"
        right="71.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Login"
        {...getOverrideProps(overrides, "Login")}
      ></Text>
      <Frame2099
        display="flex"
        gap="11px"
        position="absolute"
        top="31.71%"
        bottom="50%"
        left="0%"
        right="0%"
        direction="column"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame2099")}
      ></Frame2099>
      <Frame2100
        display="flex"
        gap="11px"
        position="absolute"
        top="57.32%"
        bottom="24.39%"
        left="0%"
        right="0%"
        direction="column"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame2100")}
      ></Frame2100>
      <Frame2101
        display="flex"
        gap="10px"
        position="absolute"
        top="90.24%"
        bottom="0%"
        left="0%"
        right="0.28%"
        direction="row"
        alignItems="flex-start"
        borderRadius="50px"
        padding="8px 154px 8px 154px"
        backgroundColor="rgba(94,200,188,1)"
        {...getOverrideProps(overrides, "Frame2101")}
      ></Frame2101>
    </View>
  );
}
