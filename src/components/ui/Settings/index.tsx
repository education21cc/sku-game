import React, { useContext } from "react";
import { AppContext } from "components/context/AppProvider";
import { useTranslationStore } from "stores/translations";
import './settings.css';

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const translations = useTranslationStore();


  const handleMutedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setMuted', value: !e.target.checked})  
  }

  // @ts-ignore 
  window.cheat = () => {
    dispatch({ type: 'cheat' })  
  }
  return (
    <div className="settings">
      <input type="checkbox" onChange={handleMutedChange} checked={state.muted === false} />
      <label>{translations.getText("sound-on")}</label>
    </div>
  )
}

export default Settings;