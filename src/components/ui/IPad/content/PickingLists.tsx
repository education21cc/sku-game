import React, { useContext } from "react";
import { AppContext } from "components/context/AppProvider";
import { PickingList } from "reducers/pickingListsReducer";
import { useTranslationStore } from "stores/translations";

const PickingLists = () => {
  const { state } = useContext(AppContext);
  const translations = useTranslationStore();
  const data = state.pickingLists;
  const productNameMap = state.wms.reduce((acc: {[key: string]: string}, value) => {
    if (!acc[value.productCode]) {
      acc[value.productCode] = translations.getTextRaw(value.description);
    };
    return acc;
  }, {});

  const renderContent = () => {
    return (
      data.map(pickingList => (
        <div key={pickingList.orderNo}>
          {renderPickingList(pickingList)}
        </div>
      ))
    )
  }

  const renderPickingList = (pList: PickingList) => {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan={3}>{translations.getText("order-no")}: {pList.orderNo}</td>
          </tr>
          { pList.products.map(p => renderProduct(pList, p)) }
        </tbody>
      </table>
    )
  }

  const renderProduct = (pList: PickingList, productCode: string) => {
    const completed = pList.pickedProducts?.some(p => p === productCode);

    return (
      <tr key={productCode} className={completed ? "completed" : ""}>
        <td></td>
        <td>{productCode}</td>
        <td>{productNameMap[productCode]}</td>
      </tr>
    )
  }

  return (
    <>
      <h2>{translations.getText("picking-lists")}</h2>
      {renderContent()}
    </>
  )
}

export default PickingLists;