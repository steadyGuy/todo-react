import React from 'react';

import List from "../List";
import Badge from "../Badge";

import "./AddList.scss"
import closeSvg from "../../assets/img/close.svg";

const AddList = ({ colors }) => {

  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [selectedColor, setSelectColor] = React.useState(colors[0].id);
  const [inputValue, setInputValue] = React.useState('');

  const showPopup = () => {
    setVisiblePopup(!visiblePopup);
  }

  return (

    <div className="add-list">
      <List onClick={showPopup} items={[
        {
          className: "list__add-button",
          icon: <svg width="12" className="list__add-button" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>,
          name: 'Add a new list'
        }
      ]} />

      {visiblePopup &&
        <div className="add-list__popup">
          <img onClick={showPopup} src={closeSvg} alt="Close icon" className="add-list__popup-close-btn" />
          <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="List name" className="field" />
          <div className="add-list__popup-colors">
            {
              colors.map(item => (
                <Badge
                  key={item.id}
                  onClick={() => setSelectColor(item.id)}
                  color={item.name}
                  className={selectedColor === item.id && 'active'} />
              ))
            }
          </div>
          <button className="button">Add list</button>
        </div>}
    </div>

  )

}

export default AddList;