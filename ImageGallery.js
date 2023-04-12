import React, { useState } from "react";
import './gallery.css';
import CloseButton from 'react-bootstrap/CloseButton';


// import Img1 from './img/Img1.jpg';
// import Img2 from './img/Img2.jpg';
// import Img3 from './img/Img3.jpg';
// import Img4 from './img/Img4.jpg';
// import Img5 from './img/Img5.jpg';
// import  './img/Img6.jpeg';

  const ImageGallery = () => {
    let data =[
        {
            id: 1,
            imgsrc: 'img/Img1.jpg',
        },
        {
            id: 2,
            imgsrc: 'img/Img2.jpg',
        },
        {
            id: 3,
            imgsrc: 'img/Img3.jpg',
        },
        {
            id: 4,
            imgsrc: 'img/Img4.jpg',
        },
        {
            id: 5,
            imgsrc: 'img/Img5.jpg',
        },
        {
            id: 6,
            imgsrc: 'img/Img6.jpeg',
        },
    ]
    const [model, setmodel] = useState(false);
    const [tempimgsrc, setTempimgsrc] = useState('');
    const getImg = (imgsrc) => {
        setTempimgsrc(imgsrc);
        setmodel(true);
    }
    return(
        <>
        <div className={model? "model open" : "model"}>   
        {/* model are used to popup */}
            <img src={tempimgsrc} />
            <CloseButton variant="white" style={{float:"right"}} onClick={() => setmodel(false)}/>
        </div>
        <div className="imagegallery">
            {data.map((item, index)=>{
                return(      
                    <div className="pics" key={index} onClick={() => getImg(item.imgsrc)}>
                         <img src={item.imgsrc} style={{width: '100%'}}/>
                    </div>
                )
            })

            }
                          {/* this return is used to return the image */}
        </div>
        </>
    );
}

export default ImageGallery;