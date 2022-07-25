/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Group2088(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="140px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Group2088")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(43,153,141,1)"
        {...getOverrideProps(overrides, "Rectangle61")}
      ></View>
      <Flex
        gap="11px"
        position="absolute"
        top="20%"
        bottom="20%"
        left="12.86%"
        right="14.29%"
        direction="row"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame2105")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="2px 2px 2px 2px"
          {...getOverrideProps(overrides, "Frame11")}
        >
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M10 0C9.44771 0 9 0.447715 9 1L9 9L1 9C0.447715 9 0 9.44771 0 10C0 10.5523 0.447715 11 1 11L9 11L9 19C9 19.5523 9.44771 20 10 20C10.5523 20 11 19.5523 11 19L11 11L19 11C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9L11 9L11 1C11 0.447715 10.5523 0 10 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "evenodd",
              },
            ]}
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Union")}
          >
            <View
              width="2px"
              height="20px"
              position="relative"
              borderRadius="50px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 62")}
            ></View>
            <View
              width="2px"
              height="20px"
              position="relative"
              borderRadius="50px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 63")}
            ></View>
          </Icon>
        </Flex>
        <Text
          fontFamily="Pretendard"
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="67px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="오더 추가"
          {...getOverrideProps(overrides, "\uC624\uB354\uCD94\uAC00")}
        ></Text>
      </Flex>
    </View>
  );
}
