import React, { useState } from 'react';

interface DropdownProps {
  title: string;
  constent: JSX.Element;
}

const Dropdown: React.FC<DropdownProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown'>
      <button onClick={toggleDropdown}>{title}</button>
      {isOpen && <div className='dropdown-content'>{content}</div>}
    </div>
  );
};

export default Dropdown;