import React, { useState, useEffect } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import menu from "./SidebarConfig.js";
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../Post/CreatePostModal.jsx';
import SearchComponent from '../SearchComponent/SearchComponent.jsx';

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    if (activeTab === 'Profile') {
      navigate('/username');
      setIsSearchVisible(false);
    } else if (activeTab === 'Home') {
      navigate('/');
      setIsSearchVisible(false);
    } else if(activeTab === "Create"){
      onOpen();
      setIsSearchVisible(false);
    }else if(activeTab === "Search"){
      setIsSearchVisible(true);
    }else{
      setIsSearchVisible(false);
    }
  }, [activeTab, navigate]);

  const handleTabClick = (title) => {
    setActiveTab(title);
    if(title === "Create"){
      onOpen();
    }
  }


  return (
    <div className='sticky top-0 h-[100vh] flex'>
      <div className={`flex flex-col justify-between h-full ${activeTab === "Search" ? "px-2" : "px-10"}`}>
        <div>
          {activeTab !== "Search" && <div className='pt-10'>
            <img className='w-40' src='https://i.imgur.com/zqpwkLQ.png' alt='insta logo' />
          </div>}
          <div className='mt-10'>
            {menu.map((item, index) => {
              return (
                <div key={index} onClick={() => handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                  {activeTab === item.title ? item.activeIcon : item.icon}
                  {activeTab !== "Search" && <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>{item.title}</p>}
                </div>
              )
            })}
          </div>
        </div>
        <div className='flex items-center cursor-pointer pb-10'>
          <IoReorderThreeOutline className='text-2xl'/>
          {activeTab !== "Search" && <p className='ml-5'>More</p>}
        </div>
      </div>

      <CreatePostModal onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchComponent />}
    </div>
  )
}

export default Sidebar;