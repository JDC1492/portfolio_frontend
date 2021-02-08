import React from 'react';
import jonathanphoto3 from '../../Images/jonathanphoto3.jpeg';


const HomeImg = () => {
    return (
        <div className='photoCont'>
            <img className="homePhoto" alt="DevPhoto" src={jonathanphoto3}/>    
        </div>
    );
}

export default HomeImg;
