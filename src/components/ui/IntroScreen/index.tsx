import { memo, useContext } from "react";
import React from "react";
import "./introScreen.css"
import { AppContext } from "components/context/AppProvider";
import { GameState } from "reducers/gameStateReducer";
import { useTranslationStore } from "stores/translations";
import GreenButton from "../buttons/GreenButton";

const IntroScreen = () => {
  const {state, dispatch} = useContext(AppContext);
  const translations = useTranslationStore();

  const onClick = () => {
    dispatch({ type: "startGame" });
  }

  if (state.gameState !== GameState.intro) {
    return null;
  }
  return (
    <div className="intro-screen">
        <h1>{translations.getText("intro-header")}</h1>
      <div className="modal">
        <div className="text">
          {translations.getText("intro-description")}
        </div>
        <div className="trilogy">
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/intro/intro-1.png`} alt="docking area"></img>
            <p>{translations.getText("intro-text1")}</p>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/intro/intro-2.png`} alt="docking area"></img>
            <p>{translations.getText("intro-text2")}</p>
            <p></p>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/intro/intro-3.png`} alt="docking area"></img>
            <p>{translations.getText("intro-text3")}</p>
          </div>
        </div>
      </div>
        <GreenButton onClick={onClick} className="button">
          {translations.getText("intro-start")}
        </GreenButton>
    </div>
  )
}

export default memo(IntroScreen);
