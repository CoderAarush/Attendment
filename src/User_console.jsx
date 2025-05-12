import HeaderBanner from "./Headerbanner";
import Pie from "./Pie";
import './User_console.css';

const User_console = () => {
    return(
    <div className="ConsoleWrapper">
        <HeaderBanner />
        <h1 id="h12" style={{marginTop: "5px"}}>USER DASHBOARD</h1>
        <hr></hr>
        <Pie/>
        <h2>TRAILING MONTH DATA</h2>
        <button>Check detailed entries here</button>
        <hr />
        <button>Check in to work here</button>
    </div>

    )
}

export default User_console;