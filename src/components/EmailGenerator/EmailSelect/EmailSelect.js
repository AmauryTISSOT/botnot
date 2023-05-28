import emailListData from "../EmailList";
import Accordion from "../../../utils/Accordion/Accordion";

const EmailSelect = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
      <h1 className="m-6 text-xl font-semibold">
        Sélectionner un modèle de mail
      </h1>
      <Accordion
        dataObject={emailListData}
        rootPath={"/outils/emailGenerator/"}
      />
    </div>
  );
};

export default EmailSelect;
