import './educationSide.css'

const EducationSide = ({edu}) => {
    return (
        <div>
            <div className="edu">
                <p className="paramater">School : <span>{edu.school}</span></p>
                <p className="paramater">Degree : <span>{edu.degree}</span></p>
                <p className="paramater">Year of completion : <span>{edu.year}.</span></p>
            </div>
        </div>
    )
}

export default EducationSide
