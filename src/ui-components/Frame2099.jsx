/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Frame2099(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Frame2099")}
    >
      <Text
        fontFamily="Pretendard"
        fontSize="20px"
        fontWeight="500"
        color="rgba(92,96,96,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Email Address"
        {...getOverrideProps(overrides, "EmailAddress")}
      ></Text>
      <View
        width="360px"
        height="40px"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(218,218,218,1)"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle51")}
      ></View>
    </Flex>
  );
}
