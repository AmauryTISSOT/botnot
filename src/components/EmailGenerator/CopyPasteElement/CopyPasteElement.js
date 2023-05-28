import React, { useCallback, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CopyPasteElement.css";

const CopyPasteElement = ({ content }) => {
  const [copyIsClicked, setCopyIsClicked] = useState(false);

  const onCopy = useCallback(() => {
    setCopyIsClicked(true);
    setTimeout(() => {
      setCopyIsClicked(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className="bg-slate-100 rounded py-7 px-4 mx-32 my-12 text-left text-xs flex flex-col" >
        <CopyToClipboard text={content} onCopy={onCopy}>
          <button className="min-w-min min-h-min self-end bg-slate-200 border-solid border border-slate-400 rounded px-2 py-1 hover:bg-slate-500 hover:text-white">Copier</button>
        </CopyToClipboard>
        <pre data-testid="pre" className="overflow-auto max-w-6xl">{content}</pre>
      </div>
      {copyIsClicked && (
        <div className="copy-to-clip-board-button">Ajouté au presse-papiers</div>
      )}
    </>
  );
};

export default CopyPasteElement;
