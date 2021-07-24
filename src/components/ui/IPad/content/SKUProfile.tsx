import React, { useEffect, useRef, useContext, Fragment } from "react";
import { AppContext } from "components/context/AppProvider";
import { Categories, WMSData } from "reducers/wmsReducer";
import { useTranslationStore } from "stores/translations";


interface Props {
  selectedProduct?: string;
}

const SKUProfile = (props: Props) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const { state } = useContext(AppContext);
  const translations = useTranslationStore();
  const data = state.wms;

  useEffect(() => {
    if (!tableRef.current) return;
    const table = tableRef.current;
    
    // add highlight class 
    table.querySelectorAll(`tr[data-code="${props.selectedProduct}"]`).forEach(row => {
      row.classList.add("highlight");
      row.scrollIntoView({ block: 'end'});
    });
    return () => {
    // Remove highlight class from prevously highlighted row
      table.querySelectorAll('.highlight').forEach(row => {
        row.classList.remove("highlight");
      });  
    }
  }, [props.selectedProduct]);

  const renderContent = () => {
    return (
      <table ref={tableRef}>
        <tbody>
        <tr><th colSpan={2} className="category-header-a">{translations.getText("category-header-a")}</th></tr>
        {data.filter(row => row.category === Categories.A).map(row => renderRow(row))}
        <tr><th colSpan={2} className="category-header-b">{translations.getText("category-header-b")}</th></tr>
        {data.filter(row => row.category === Categories.B).map(row => renderRow(row))}
        <tr><th colSpan={2} className="category-header-c">{translations.getText("category-header-c")}</th></tr>
        {data.filter(row => row.category === Categories.C).map(row => renderRow(row))}
        <tr><th colSpan={2} className="category-header-d">{translations.getText("category-header-d")}</th></tr>
        {data.filter(row => row.category === Categories.D).map(row => renderRow(row))}
        </tbody>
      </table>
    )
  }

  const renderRow = (row: WMSData) => {
    const categoryClasses = { 
      [Categories.A]: "cat-a",
      [Categories.B]: "cat-b",
      [Categories.C]: "cat-c",
      [Categories.D]: "cat-d",
    }
    return (
      <Fragment key={row.productCode}>
        <tr key={row.productCode} data-code={row.productCode} className={categoryClasses[row.category]}>
          <td>{row.productCode}</td>
          <td>{row.description}</td>
        </tr>
        {row.pair && (
          <tr key={`${row.productCode}-pair`} data-code={row.productCode} className={categoryClasses[row.category]}>
            <td colSpan={2} className="pair">
              {translations.getTextRaw("product-pair").replace("{0}", row.pair)}
            </td>
          </tr>
        )}
      </Fragment>
    )
  }
  return (
    <>
      <h2>{translations.getText("sku-velocity-profile")}</h2>
      {renderContent()}
    </>
  )
}

export default SKUProfile;