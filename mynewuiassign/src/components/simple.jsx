import { useMediaQuery, Grid, GridItem } from "@chakra-ui/react";
import { Lt1 } from "./lt1";
import { Lt2 } from "./lt2";

export const Simp = () => {
  let isPageWide = useMediaQuery("(min-width: 320px)");
  return (
    <>
  {isPageWide[0] ? <Lt1/>:<Lt2/>}
  {/* <Lt2/> */}
</>
  );
};
