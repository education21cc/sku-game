import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { useApp, useTick, Container } from "@inlet/react-pixi";
import * as PIXI from 'pixi.js';
import Guy from './Guy';
import { AnyAction } from 'components/context/AppProvider';
import { AStarFinder } from 'astar-typescript';
import { PickingList } from 'reducers/pickingListsReducer';
import { gsap, Linear } from 'gsap'
import { PixiPlugin } from 'gsap/all';

PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(PixiPlugin);

interface Props {
  //orderNo: string;
  pickingList: PickingList;
  startLocation: [number, number];
  dispatch: React.Dispatch<AnyAction>;
  aStar: AStarFinder;
  getProductLocation: (productCode: string) => [number, number]
}

const convertLocation = (location: [number, number]) => {
  // This is the format AStarFind works with
  return { x: location[0], y: location[1] }
}

const speed = 0.15;
//
const WarehouseGuy = (props: Props & React.ComponentProps<typeof Guy>) => {
  const {
    dispatch,
    pickingList,
    aStar,
    startLocation,
    tileSize,
    getProductLocation,
    ...guyProps
  } = props;

  const guyRef = useRef(null);
  const [carryBox, setCarryBox] = useState<boolean>(false);

  const lastLocation = useRef<[number, number]>(startLocation);
  
  useEffect(() => {
    if (!guyRef.current) return;
    gsap.killTweensOf(guyRef.current);

    const findNextUnpickedProduct = () => {
      return pickingList.products.find(p => (pickingList.pickedProducts || []).indexOf(p) === -1);
    }
    const { orderNo } = pickingList;
    //console.log("im a guy and im alive. my job is " + pickingList.orderNo)
    
    const tl = gsap.timeline();
    const pathStartLocation = convertLocation(lastLocation.current || startLocation);
    const productCode = findNextUnpickedProduct();

    if (productCode) {
      // There is a product to pick, go fetch it
      console.log(`We need to pick ${productCode} (${orderNo}). It's location is ${getProductLocation(productCode)}. We start at ${pathStartLocation.x}, ${pathStartLocation.y}}`);
      
      // Determine the path to this product
      const path = aStar?.findPath(pathStartLocation, convertLocation(getProductLocation(productCode))) || [];
      console.log('the path to walk is ', path);

      // create animation to walk this path
      path.forEach((loc: number[]) => {
        tl.to(guyRef.current, {
          ease: Linear.easeNone,
          pixi: { 
            x: loc[0] * tileSize,
            y: loc[1] * tileSize
          }, 
          duration: speed
        });
      }); 
      tl.to(guyRef.current, {
        onComplete: () => { 
          // completed picking product
          setCarryBox(true);
          dispatch({ type: 'completeProductPick', productCode, orderNo});
          console.log(`completed picking ${productCode} (${orderNo})`)
          const endLocation = path[path.length - 1];
          lastLocation.current = endLocation as [number, number];
          //setGuyLocation(endLocation as [number, number]);
        },
      })
    } 
    else {
      // All done with this order, return home
      console.log(`I guess we are done. Time to return to ${startLocation}`);
        
      // Determine the path home
      const path = aStar?.findPath(pathStartLocation, convertLocation(startLocation)) || [];
      
      // create animation to walk this path
      path.forEach((loc: number[]) => {
        tl.to(guyRef.current, {
          ease: Linear.easeNone,
          pixi: { 
            x: loc[0] * tileSize,
            y: loc[1] * tileSize
          }, 
          duration: speed
        });
      }); 
      tl.to(guyRef.current, {
        onComplete: () => { 
          // completed picking product
          setCarryBox(false);
          dispatch({ type: 'completeOrder', orderNo });
        },
      })
    }    
  }, [aStar, dispatch, getProductLocation, startLocation, pickingList, tileSize]);
  
  return (
    <Guy
      atlas={`${process.env.PUBLIC_URL}/images/sprites/guy/guy.json`} 
      x={startLocation[0] * tileSize} 
      y={startLocation[1] * tileSize}
      carryBox={carryBox}
      {...guyProps} 
      ref={guyRef} 
    />
  )
};

// const areEqual = (a: React.ComponentProps<typeof Container>, b: React.ComponentProps<typeof Container>) => {
//   return true;
// }
// export default memo(Guy, () => (true));
export default WarehouseGuy;