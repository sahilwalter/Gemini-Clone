import React, { useContext, useState } from 'react';
import './SideBar.css';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';

const SideBar = () => {
    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompt,setRecentprompt, newChat} = useContext(Context);

    const loadPrompt = async(prompt)=>{
        setRecentprompt(prompt)
        await onSent(prompt)

    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img
                    className='menu'
                    src={assets.menu_icon}
                    alt="Menu Icon"
                    onClick={() => setExtended(prev => !prev)} // Toggle sidebar
                />

                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="Plus Icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? 
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item,index)=>{
                            return (

                                <div 
                                 key={index}
                                onClick={()=>{loadPrompt(item)}
                                }
                                
                                className="recent-entry">
                            <img onClick={() => setExtended(prev => !prev)} src={assets.message_icon} alt="Message Icon" />
                            <p>{item.slice(0 , 18)}...</p>
                               </div>

                            )
                                
                            

                        })}
                        
                    </div>

                : null}
            </div>

            
        
        </div>
    );
};

export default SideBar;
