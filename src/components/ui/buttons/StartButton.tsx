import React, { useContext } from "react";
import { AppContext } from "components/context/AppProvider";
import { GameState } from "reducers/gameStateReducer";
import { useTranslationStore } from "stores/translations";
import GreenButton from "./GreenButton";
import './styles/startButton.css';

const StartButton = () => {
  const { state, dispatch } = useContext(AppContext);
  const translations = useTranslationStore();

  const handleClick = () => {
    switch (state.gameState) {
      case GameState.placingBoxes:
        const allBoxedPlaced = !Object.values(state.warehouse.boxes).some(b => !(b.zone));
        if(!allBoxedPlaced) {
          dispatch({ type: 'setStatusText', text: translations.getTextRaw("first-place-goods")});
          return;
        }
        dispatch({ type: 'startPicking'});
    
        break;
      case GameState.complete:
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        break;
    }
  };

  switch (state.gameState) {
    case GameState.placingBoxes:
      return <GreenButton onClick={handleClick} className="start-button">{translations.getText("button-complete")}</GreenButton>;
    default:
      return null;
  }
}

export default StartButton;