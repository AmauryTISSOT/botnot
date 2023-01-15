import React, { useCallback, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CopyPasteElement.css";

const CopyPasteElement = ({ content }) => {
  const [copyIsClicked, setCopyIsClicked] = useState(false);

  const onCopy = useCallback(() => {
    setCopyIsClicked(true);
  }, []);

  return (
    <>
      <div className="copypaste-container">
        <CopyToClipboard text={content} onCopy={onCopy}>
          <button className="copypaste-button">Copy</button>
        </CopyToClipboard>
        <pre data-testid="pre">{content}</pre>
      </div>
      {copyIsClicked && (
        <div className="copy-to-clip-board-button">Copied to clipboard</div>
      )}
      <button
        className="retour-button"
        onClick={() => window.location.reload()}
      >
        Retour
      </button>
    </>
  );
};

export default CopyPasteElement;
