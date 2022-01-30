import React , {useContext} from 'react';
import './malllist.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import datacontext from './datacontext';
import {Link} from 'react-router-dom';

const Malllist = (props) => {
    console.log(props)

    var a = useContext(datacontext);


    return(
        <div className="mall_list">
            <div className="mall_list_title">
                <h3>{props.mall.name}</h3>
                <div className="button_seeoffer">
                    <ArrowForwardIosIcon />
                </div>
            </div>
            <div className="mall_list_content">
                <div className="mall_list_content_img">
                    <img src={"http://127.0.0.1:8000" + props.mall.img}   alt="" />
                </div> 
                <div className="mall_list_deatil">
                    <div className="location_on_map">
                        <Link className="showoffers" to={'show-offer/'+props.mall.name} >Show Offer's</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Malllist;