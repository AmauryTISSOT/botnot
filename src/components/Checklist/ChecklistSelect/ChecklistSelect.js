import checklistList from "../ChecklistData/ChecklistListData";
import Accordion from "../../../utils/Accordion/Accordion";

const ChecklistSelect = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-auto">
      <h1 className="m-6 text-xl font-semibold">
        Sélectionner un type de checklist
      </h1>
      <Accordion
        dataObject={checklistList}
        rootPath={"/outils/checklistGenerator/"}
      />
    </div>
  );
};

export default ChecklistSelect;
