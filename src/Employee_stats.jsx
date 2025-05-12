import Headerbanner from "./Headerbanner.jsx";
import './Employee_stats.css';

function Employee_stats(){
    return(
        <div className="myWrapper">
            <Headerbanner />
            <h1 >ACCESS EMPLOYEE STATISTICS</h1>
            <hr></hr>
            <h2>Teams</h2>
            <div className="buttonWrapper">
                <button className="newBtns">HR</button>
                <button className="newBtns">Development</button>
                <button className="newBtns">Finance</button>
                <button className="newBtns">AI</button>
            </div>
        </div>
    )
}

export default Employee_stats;