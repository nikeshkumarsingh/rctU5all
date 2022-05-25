import * as React from "react";

// 1. import `ChakraProvider` component
import {
  CircularProgress,
  CircularProgressLabel,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  PinInput,
  SimpleGrid,
  PinInputField,
  Box,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { extendTheme } from "@chakra-ui/react";
import { Comp } from "./comp2";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });
 

export const Pro = () => {
  // 2. Wrap ChakraProvider at the root of your app
  let isPageWide = useMediaQuery('(min-width: 320px)')
  console.log(isPageWide[0])
  return (
   
        <div style={{margin:"10%"}}>
       {isPageWide[0] ?
      <Grid
        templateColumns={{
          lg: "200px 400px 200px",
          md: "200px 400px 200px",
          xl: "200px 400px 200px",
          sm: "200px 400px 200px",
        }}
        gap={0}
      >
        <GridItem w={{lg:"300px",sm:"500px"}} h="400" bg="blue.500">NAV</GridItem>
        <GridItem w="500px" h="400" bg="rgb(248,147,29)">CONTENT</GridItem>
        <GridItem w={{lg:"300px",sm:"500px"}} h="400" bg="rgb(238,28,37)">WIDGET</GridItem>
      </Grid>:<Comp></Comp>}
      </div>
    
  );
};
