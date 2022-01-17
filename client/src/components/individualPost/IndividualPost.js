import React, {useEffect} from 'react'
import { Button} from '@material-ui/core'
import './individualPost.css'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { likePost } from '../../redux/action/likeAction' 
import { individualPost } from '../../redux/action/individualPostAction'

const IndividualPost = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const singlePost = useSelector(state => state.individualPost);
    console.log(singlePost)

    useEffect(() => {
        dispatch(individualPost(params.id));
    }, [dispatch, params.id]);

    const likeHandler = (id) => {
        dispatch(likePost(id));
    }
    return (
        <div>
            <div className="post">
                <div className="post_container">
                    <div className="uploaded_post">
                        <h2 className="post_creater">{singlePost.username}</h2>
                        <p>{singlePost.textOfThePost}</p>
                        <div className="other_option">
                            <Button size="small" variant="contained" color="primary" onClick={() => likeHandler(params.id)}>Like<span style={{marginLeft : "5px"}}>0</span></Button>
                            <Button size="small" variant="contained" color="inherit">Comment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualPost
