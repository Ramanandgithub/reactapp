import './Card.css';
import { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

function Card({ carddata }) {
    const mintext = carddata.description;

    const [more, setMore] = useState(false);

    // Default text to show based on the "more" state
    const text = more ? carddata.description : mintext.substring(0, 150) + '...';

    function clickHandler() {
        setMore(!more); // Toggle the "more" state
    }
    const [heart,setheart] = useState(<FcLikePlaceholder onClick={FcLikeHandeler} />);
    function toastHandler(){
        
        setheart(<FcLikePlaceholder onClick={FcLikeHandeler} />);
        toast("Remove From Like");

    }
    function FcLikeHandeler(){
        setheart(<FcLike onClick={toastHandler} />)
        toast("You Like The Card");
    }

    return (
        <div className='card'>
            <div className='top-image'>
                <img src={carddata.image.url} alt={carddata.image.alt} width="350px" height="240px" />
                <div className='bottom-image'>
                    {heart}
                    
                </div>
            </div>
            <div>
                <h3>{carddata.title}</h3>
            </div>
            <div>
                <p style={{
                    textAlign: 'justify'
                }}>
                    {text} 
                    <span className='span' onClick={clickHandler} style={{ cursor: 'pointer', color: 'blue' }}>
                        {more ? " show less" : ' show more'}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Card;
