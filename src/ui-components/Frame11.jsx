/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Frame11(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="86px"
      direction="row"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="28px 20px 28px 20px"
      backgroundColor="rgba(191,237,232,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame11")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="108px"
        height="53px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group6")}
      >
        <Text
          fontFamily="Pretendard"
          fontSize="20px"
          fontWeight="700"
          color="rgba(16,20,20,1)"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="89px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CTC"
          {...getOverrideProps(overrides, "CTC")}
        ></Text>
        <Text
          fontFamily="Pretendard"
          fontSize="16px"
          fontWeight="400"
          color="rgba(16,20,20,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="108px"
          position="absolute"
          top="34px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="생활치료센터"
          {...getOverrideProps(
            overrides,
            "\uC0DD\uD65C\uCE58\uB8CC\uC13C\uD130"
          )}
        ></Text>
      </Flex>
      <Icon
        width="66.29px"
        height="64px"
        viewBox={{ minX: 0, minY: 0, width: 66.294921875, height: 64 }}
        paths={[
          {
            d: "M66.2948 32C66.2948 49.6731 51.4542 64 33.1474 64C14.8406 64 0 49.6731 0 32C0 14.3269 14.8406 0 33.1474 0C51.4542 0 66.2948 14.3269 66.2948 32Z",
            fill: "rgba(43,153,141,1)",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse1")}
      ></Icon>
    </Flex>
  );
}
