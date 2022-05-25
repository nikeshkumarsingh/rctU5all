
import { useMediaQuery, Grid, GridItem } from "@chakra-ui/react";
export const Lt1=()=>{

    return(
        <Grid
        marginTop={"10%"}
        margin={"10%"}
      h='200px'
      templateRows='repeat(5, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
    >
      
      <GridItem colSpan={2} rowSpan={3} bg='rgb(167,100,169)' />
      <GridItem rowSpan={4} colSpan={1} bg='tomato' />
      <GridItem colSpan={2} bg='rgb(109,207,246)' />
      
    </Grid>
    )
}