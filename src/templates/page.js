import React from "react";
import {
  BlockRendererProvider} from "@webdeveducation/wp-block-tools";
import { blockRendererComponents } from "../config/blockRendererComponents";

const Page = (props) => {
  console.log("PAGE PROPS", props);
  return (
    <div>
      {" "}
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={blockRendererComponents}
      />
    </div>
  );
};

export default Page;
