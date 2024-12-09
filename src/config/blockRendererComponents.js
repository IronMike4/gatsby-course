import React from "react";
import {
  BlockRenderer,
  getClasses,
  getStyles,
} from "@webdeveducation/wp-block-tools";
import { MediaText } from "../components/MediaText";

export const blockRendererComponents = (block) => {
  switch (block.name) {
    case "core/media-text": {
      return (
        <MediaText
          key={block.id}
          className={getClasses(block)}
          style={getStyles(block)}
          verticalAlignment={block.attributes.verticalAlignment}
          mediaPosition={block.attributes.mediaPosition}
          gatsbyImage={block.attributes.mediaId}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </MediaText>
      );
    }
    default: return null;
  }
};
