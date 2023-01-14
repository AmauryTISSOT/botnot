import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CopyPasteElement.css"

const CopyPasteElement = ({ content }) => {
  return (
    <div className="copypaste-container">
      <CopyToClipboard text={content}>
        <button className="copypaste-button">Copy</button>
      </CopyToClipboard>
      <pre>{content}</pre>
    </div>
  );
};

export default CopyPasteElement;
