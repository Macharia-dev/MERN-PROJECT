import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore Our Menu</h1>
       <p className='explore-menu-text'>Choose from a diverse menu featuring a delicable array of dishes crafted with the finest ingredients and culnary
            to satisfy your needs.</p>
            <div className="explore-menu-list">
             {menu_list.map((item, index) =>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
                        
                        <p>{item.menu_name}</p>
                    </div>
                )
             })}
               
            </div>
            <hr />
    </div>
  )
}

export default ExploreMenu
