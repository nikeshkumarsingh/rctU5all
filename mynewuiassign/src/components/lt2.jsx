
import { useMediaQuery, Grid, GridItem } from "@chakra-ui/react";
export const Lt2=()=>{

    return(
        <Grid
        marginTop={"10%"}
        margin={"10%"}
      h='200px'
      templateRows='repeat(5, 1fr)'
      templateColumns='repeat(1, 150px)'
      gap={4}
    >
      
      <GridItem h={"150px"} bg='rgb(167,100,169)' />
      <GridItem h={"150px"} bg='tomato' />
      <GridItem h={"150px"} bg='rgb(109,207,246)' />
      
    </Grid>
    )
}