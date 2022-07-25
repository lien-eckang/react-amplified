/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Group2089(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="420px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Group2089")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        border="1px SOLID rgba(218,218,218,1)"
        borderRadius="10px"
        padding="9px 14px 9px 14px"
        {...getOverrideProps(overrides, "Frame2103")}
      >
        <Flex
          gap="320px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame2102")}
        >
          <Text
            fontFamily="Pretendard"
            fontSize="16px"
            fontWeight="400"
            color="rgba(75,75,75,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Search"
            {...getOverrideProps(overrides, "Search")}
          ></Text>
          <Flex
            padding="0px 0px 0px 0px"
            width="20px"
            height="20px"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group2071")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
                  fill: "rgba(218,218,218,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Ellipse2321")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="14px"
              height="14px"
              position="absolute"
              top="0.1px"
              left="10px"
              transformOrigin="top left"
              transform="rotate(45deg)"
              {...getOverrideProps(overrides, "Group2069")}
            >
              <View
                width="2px"
                height="14px"
                position="absolute"
                top="0px"
                left="6px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Rectangle60")}
              ></View>
              <View
                width="2px"
                height="14px"
                position="absolute"
                top="6px"
                left="14px"
                transformOrigin="top left"
                transform="rotate(90deg)"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Rectangle61")}
              ></View>
            </View>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
