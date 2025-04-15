import React from 'react';
import { IoArrowBack, IoShareOutline, IoSearchOutline, IoCartOutline } from 'react-icons/io5';

const MenuHeader = ({ storeName }) => {
  return (
    <header className="menu-header">
      <div className="header-left">
        <button className="back-button">
          <IoArrowBack />
        </button>
        <h1 className="store-name">{storeName}</h1>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <IoShareOutline />
        </button>
        <button className="icon-button">
          <IoSearchOutline />
        </button>
        <button className="icon-button">
          <IoCartOutline />
        </button>
      </div>
    </header>
  );
};

export default MenuHeader;