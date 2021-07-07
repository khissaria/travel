import React from 'react';
import '../../style/discussion.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteDiscussion } from '../../actions/location'

const CardTemp = ({ disc ,setCurrentId}) => {
    
    const dispatch = useDispatch();
    function TextAbstract(text, length) {
        var last;
        if (text === null) {
            return '';
        }
        if (text.length <= length) {
            return text;
        }
        text = text.substring(0, length);
        last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + "...";
    }

    return (

        <li className="cards_item" key={disc._id}>
            <div className="card">
                <div className="card_image">
                    <img src={disc.imgFile} alt={disc.imgFile} />
                </div>
                <div className="card_content">
                    <h2 className="card_title">{disc.title}</h2>
                    <p className="card_text">{TextAbstract(disc.description, 100)}</p>
                    <Link
                        to={{
                            pathname: `/readmore/${disc._id}`,
                            state: { id: disc._id }
                        }}
                    >
                        <button className="btn btnRead">Read More</button>
                    </Link>
                    <div>
                        <button className="btn" onClick={()=>setCurrentId(disc._id)} id="deleteStory">Edit</button>
                        <button className="btn" onClick={() => dispatch(deleteDiscussion(disc._id))} id="editStory">Delete</button>
                    </div>


                </div>
            </div>
        </li>

    )
}

export default CardTemp;