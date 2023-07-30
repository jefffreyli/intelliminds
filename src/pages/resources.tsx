// import { Box } from "@chakra-ui/react";
// import React, { useState, useEffect } from "react";
// import { NotionRenderer } from "react-notion";

// const Resources = () => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(
//       "https://notion-api.splitbee.io/v1/page/8f1a56a40fda4763b2a5567151f870a4"
//     )
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       <NotionRenderer blockMap={data} fullPage={true} />
//       <Box w="100%" h={50} bg="white" />
//     </>
//   );
// };

// export default Resources;

import React from 'react'

const resources = () => {
  return (
    <div>resources</div>
  )
}

export default resources