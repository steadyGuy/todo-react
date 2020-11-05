import React from 'react';
import classNames from "classnames";

import Badge from "../Badge";
import removeIcon from "../../assets/img/remove.svg";

import './List.scss';

const List = ({ items, isRemovable, onClick, onRemove }) => {

  return (
    <ul onClick={onClick} className="list">

      {
        items.map((item, index) => {
          return (
            <li key={index} className={classNames(item.className, { 'active': item.active })}>
              <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
              <span>{item.name}</span>
              {isRemovable && <img onClick={() => {onRemove(item)}} className="list__remove-icon" src={removeIcon} alt="Remove Icon" />}
            </li>
          )
        })
      }

    </ul>
  )
}

export default List;