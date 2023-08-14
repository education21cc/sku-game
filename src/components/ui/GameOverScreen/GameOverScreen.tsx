import { useContext, useState, useEffect, useMemo, memo, Fragment } from "react";
import React from "react";
import { GameState } from "reducers/gameStateReducer";
import { AppContext } from "components/context/AppProvider";
import { formatTime } from "../StatusText";
import { Categories, WMSData } from "reducers/wmsReducer";
import { useTranslationStore } from "stores/translations";
import "./gameOverScreen.css"
import { send } from "components/playerBridge";
import BlueButton from "../buttons/BlueButton";

const GameOverScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  const translations = useTranslationStore();
  const [show, setShow] = useState(false); 

  const handleReset = () => {
    setShow(false);
    dispatch({ type: "restart" });
  }
  
  useEffect(() => {
    if (state.gameState === GameState.pickingBoxes) {
      setTimeout(setShow, 10000, true);
    }
  }, [state.gameState]);

  let totalScore = 0;
  const maxScore = 16;


  useEffect(() => {
    if (!show)   return;
    const level = 1;
    // @ts-ignore
    const newData: GameData = { ...window.GAMEDATA};
    newData.levelsCompleted = [{ 
      level, 
      score: Math.max(totalScore, 0), 
      maxScore
    }]
    send({
        type: 'setGameData',
        data: newData
    });
  }, [show, totalScore]);

  // Create array of pairs (arrays)
  const pairs = useMemo(() => {
    return state.wms.filter(p => p.pair).reduce<[string, string][]>((acc, value) => {
      const pair = acc.find(p => p.indexOf(value.pair!) > -1);
      if (pair) {
        pair[1] = value.productCode;
      } else {
        acc.push([value.productCode, ""])
      }
      return acc;
    }, []);
  }, [state.wms]);
  
  if (!show) {
    return null;
  }

  const getProductRow = (display: string, category: Categories) => {
    let correct = 0;
    let total = 0;

    state.wms.forEach((value: WMSData) => {
      if (value.category === category) {
        total++;
        const {zone} = state.warehouse.boxes[value.productCode];
          if (zone === category.toString() || (category === Categories.C && zone === "B")){
          // there are 3 category B items and 4 category B zones so one category C item ccan be placed in "B"
          correct++;
        }
      }
    })
    const points = correct;
    totalScore += points;
    return (
      <>
        <div>{`${display} `}</div>
        <div>{translations.getTextRaw("gameover-placed-correct").replace("{count}", points.toString())}</div>
        <div>{`${points}/${total}`}</div>
      </>
    )
  }
  
  const getPairRow = (pair: [string, string]) => {
    const location1 = state.warehouse.boxes[pair[0]].location;
    const location2 = state.warehouse.boxes[pair[1]].location;

    const placedNext = (Math.abs(location1[0] - location2[0]) === 1) && location1[1] === location2[1];
    let points = 0;
    if (placedNext) {
      points = 3;
      totalScore += points;
      return (
        <Fragment key={pair.toString()}>
          <div>{translations.getText("gameover-pair")}{`${pair}`}</div>
          <div>{translations.getText("gameover-pair-placed")}</div>
          <div>{`${points}/3`}</div>
        </Fragment>
      )
    }
    return (
      <Fragment key={pair.toString()}>
          <div>{translations.getText("gameover-pair")}{`${pair}`}</div>
          <div>{translations.getText("gameover-pair-notplaced")}</div>
        <div>{`${points}/3`}</div>
      </Fragment>
    )
  }

  const getBinRow = () => {
    const pointPenalty = 5;
    let mistakes = 0;
    const nonMovers = state.wms.filter(p => p.category === Categories.D);
    // All non movers should be in the bin zone
    nonMovers.forEach(value => {
      const {zone} = state.warehouse.boxes[value.productCode];
      if (zone !== Categories.D.toString()){
        mistakes++;
      }
    });
    const movers = state.wms.filter(p => p.category !== Categories.D);
    // All regular products should not be in the bin!
    movers.forEach(value => {
      const {zone} = state.warehouse.boxes[value.productCode];
      if (zone === Categories.D.toString()){
        mistakes++;
      }
    });
    const points = -pointPenalty * mistakes;
    totalScore += points;
    return (
      <>
        <div>{translations.getText("gameover-non-moving-products")}</div>
        <div>{`${mistakes} ${translations.getText("gameover-mistakes-made")}`}</div>
        <div>{`${points}`}</div>
      </>
    )
  }

  
  const renderSummary = () => {
    if (totalScore === maxScore) {
      return (
        <span className="success">
          {translations.getText("gameover-success")}
        </span>
      )
    }
    return (
      <span className="fail">
        {translations.getText("gameover-fail")}
      </span>
    )
  }

  return (
    <div className="gameover-screen">
      <h1>{translations.getText("gameover-header")}</h1>
      <div className="modal">
        <div className="table">
          <div className="table-header">{translations.getText("gameover-header-products")}</div>
          <div className="table-header">{translations.getText("gameover-header-result")}</div>
          <div className="table-header">{translations.getText("gameover-header-score")}</div>
          {getProductRow(translations.getTextRaw("category-header-a"), Categories.A)}
          {getProductRow(translations.getTextRaw("category-header-b"), Categories.B)}
          {getProductRow(translations.getTextRaw("category-header-c"), Categories.C)}
          {pairs.map(p => getPairRow(p))}
          {getBinRow()}

          <div className="table-footer summary">
            {renderSummary()}
          </div>
          {/* <div className="table-footer">
            Your time: {formatTime(state.time)}
          </div> */}
          <div className="table-footer">
            {translations.getText("gameover-total")}
            <b>{totalScore}</b>
          </div>
        </div>
      </div>
        <BlueButton onClick={handleReset} className="button">
          {translations.getText("gameover-button-reset")}
        </BlueButton>
    </div>
  )
}

export default memo(GameOverScreen);
