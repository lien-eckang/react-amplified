/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Frame2101(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      borderRadius="50px"
      padding="8px 154px 8px 154px"
      backgroundColor="rgba(94,200,188,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame2101")}
    >
      <Text
        fontFamily="Pretendard"
        fontSize="20px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Login"
        {...getOverrideProps(overrides, "Login")}
      ></Text>
    </Flex>
  );
}
