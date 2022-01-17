import {Button, Card} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import './card.css'

const useStyles = makeStyles((theme) => ({
    card : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        padding : "1rem",
        margin : "2rem 0",
        boxShadow: "0px 0px 15px -8px black"
    }
}))

const CardList = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <div className="upper_part">
                    <div className="Profile_pic">
                        <img src="https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h4>John Doe</h4>
                            <p>Software engineer</p>
                        </div>
                        <div className="user_assets">
                            <div className="projects">
                                <p>Projects</p>
                                <span>23</span>
                            </div>
                            <div className="followers">
                                <p>Followers</p>
                                <span>123</span>
                            </div>
                            <div className="ratings">
                                <p>Ratings</p>
                                <span>12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower_part">
                    <Button style={{marginRight : "5px"}} variant="outlined" fullWidth size="large">view</Button>
                    <Button style={{marginLeft : "5px"}} variant="contained" fullWidth size="large" color="primary">follow</Button>
                </div>
            </Card>
        </div>
    )
}

export default CardList
