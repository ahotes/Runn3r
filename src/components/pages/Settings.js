import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Settings.css";

function Settings() {
  return (
    <div className="bgcolor">
      <div className="optionList">
        <h1>Settings</h1>
        <form>
        <h2 className="formHeader">Themes</h2>
        <div className="radio-buttons">
        <label for="radio-standard" className="label-content">
          <input
            type="radio"
            name="radio-theme"
            id="radio-standard"
            checked
          />
          </label>
            <img src="https://via.placeholder.com/200" />
          <input 
            type="radio" 
            name="radio-theme" 
            id="radio-dark" 
          />
          <label for="radio-dark" className="label-content">
            <img src="https://via.placeholder.com/200" />
          </label>
          <input
            type="radio"
            name="radio-theme"
            id="radio-highContrast"
          />
          <label for="radio-highContrast" className="label-content">
            <img src="https://via.placeholder.com/200" />
          </label>
          <input 
            type="radio" 
            name="radio-theme" 
            id="radio-colorBlind" 
          />
          <label for="radio-colorBlind" className="label-content">
            <img src="https://via.placeholder.com/200" />
          </label>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
