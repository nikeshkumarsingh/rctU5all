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

export const Comp=()=>{

    return(
        <Grid
        templateColumns={"repeat(1,1fr)"}
        gap={0}
      >
        <GridItem w="300px" h="100" bg="blue.500" ><h1>NAV</h1></GridItem>
        <GridItem w="300px" h="100" bg="rgb(238,28,37)" ><h1>WIDGET</h1></GridItem>
        <GridItem w="300px" h="240" bg="rgb(248,147,29)">CONTENT</GridItem>
      </Grid>
    )
}