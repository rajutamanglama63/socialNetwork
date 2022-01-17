import { Button, TextField } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './post.css'
import { createPost, getAllRecentPosts } from '../../redux/action/postAction'
import { likePost } from '../../redux/action/likeAction' 

const Posts = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const Posts = useSelector(state => state.post);
    const [postData, setPostData] = useState({
        textOfThePost : ""
    });

    const goBackHandler = () => {
        history.push('/dashboard');
    }

    const viewPostHandler = (id) => {
        history.push(`/individualPost/${id}`);
    }

    const postSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        setPostData({
            textOfThePost : ""
        });
    }

    const likeHandler = (id) => {
        dispatch(likePost(id));
    }

    useEffect(() => {
        dispatch(getAllRecentPosts());
    }, [dispatch]);
    return (
        <div>
            <div className="post">
                <div className="post_container">
                    <h1 className="post_heading">Posts</h1>
                    <div className="greeting">
                        <PersonIcon />
                        <p>Welcome to community</p>
                    </div>
                    <div className="say_something">
                        <p>Say something...</p>
                    </div>
                    <form autoComplete="off" noValidate className="post_form" onSubmit={postSubmitHandler}>
                        <TextField 
                         label="Create a post" 
                         margin="dense" 
                         multiline 
                         rows="5" 
                         variant="outlined"
                         value={postData.textOfThePost}
                         onChange={(e) => setPostData({...postData, textOfThePost : e.target.value})}
                        />
                        <div className="post_btn">
                            <Button type="submit" size="small" variant="contained" color="primary">Post</Button>
                            <Button  size="small" variant="contained" color="inherit" onClick={goBackHandler}>Go back</Button>
                        </div>
                    </form>
                    <span className="line"></span>
                    {Posts.map((post) => (
                        <>
                            <div className="uploaded_post" key={post._id}>
                                <h2 className="post_creater">{post.username}</h2>
                                <p>{post.textOfThePost}</p>
                                <div className="other_option">
                                    <Button size="small" variant="contained" color="primary" onClick={() => likeHandler(post._id)}>Like<span style={{marginLeft : "5px"}}>{post.likes.length}</span></Button>
                                    <Button size="small" variant="contained" color="inherit">Comment</Button>
                                    <Button size="small" variant="contained" color="secondary" onClick={() => viewPostHandler(post._id)}>view post</Button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Posts
