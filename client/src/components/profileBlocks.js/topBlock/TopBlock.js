import './topBlock.css'

const TopBlock = ({data}) => {
    return (
        <div>
            <div className="top_block">
                <div className="display_pic_intro">
                    <img src="https://images.pexels.com/photos/7303575/pexels-photo-7303575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="dp" className="profile_image" />
                    <h1>{data.username}</h1>
                    <p>{data.profession}</p>
                </div>
            </div>
            <div className="intro_block">
                <h2>About me</h2>
                <p className="paramater">Phone : <span>{data.phone}</span></p>
                <p className="paramater">Address : <span>{data.address}</span></p>
                <p className="paramater">Mobile : <span>{data.mobile}</span></p>
                <p className="paramater">DoB : <span>{data.dob}</span></p>
            </div>
        </div>
    )
}

export default TopBlock
