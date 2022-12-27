import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyPasteElement = ({ content }) => {
  return (
    <>
      <CopyToClipboard text={content}>
        <button>Copy</button>
      </CopyToClipboard>
      <pre>{content}</pre>
    </>
  );
};

export default CopyPasteElement;
