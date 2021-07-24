
export enum Categories {
  A = "A", //these get compared to the zones in the tilemap
  B = "B",
  C = "C",
  D = "D"
}

export type WMSAction =
 | { type: 'setWMS', wms: WMSData[] };


export const wmsReducer = (state: WMSData[], action: WMSAction ) => {
  switch (action.type) {
    case 'setWMS':
      return action.wms;
    default:
      return state;
  }
}

export interface WMSData {
  category: Categories;
  productCode: string;
  description: string; 
  pair?: string;
}

export const initialWMSState = [{
  category: Categories.A,
  productCode: "IRN 590",
  description: "product-description-clothes-iron",
}, {
  category: Categories.A,
  productCode: "CAM 679",
  description: "product-description-digital-camera",
}, {
  category: Categories.A,
  productCode: "SMK 019",
  description: "product-description-smoke-detector",
  pair: "BAT 917"
}, {
  category: Categories.A,
  productCode: "BAT 917",
  description: "product-description-battery-charger",
  pair: "SMK 019"
}, {
  category: Categories.B,
  productCode: "VRL 444",
  description: "product-description-vr-headset",
}, {
  category: Categories.B,
  productCode: "PTV 555",
  description: "product-description-plasma-tv",
  pair: "SPK 876"
}, {
  category: Categories.B,
  productCode: "SPK 876",
  description: "product-description-speaker-system",
  pair: "PTV 555"
}, {
  category: Categories.C,
  productCode: "WSH 322",
  description: "product-description-washing-machine",
}, {
  category: Categories.C,
  productCode: "RFG 411",
  description: "product-description-refrigerator",
}, {
  category: Categories.C,
  productCode: "SMX 041",
  description: "product-description-mixer",
}, {
  category: Categories.D,
  productCode: "TPH 255",
  description: "product-description-telephone",
}, {
  category: Categories.D,
  productCode: "CST 964",
  description: "product-description-casette-player",
}]