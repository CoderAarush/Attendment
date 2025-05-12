import Headerbanner from "./Headerbanner.jsx";
import Barchart from "./Barchart.jsx";
import bgImage from './assets/premium_photo-1675603849760-fce371511327.avif';


const Admin_console = () => {
    return(
        <div style={{backgroundImage: `url(${bgImage})`}}>
            <Headerbanner />   
            <Barchart/>   
            <button style={{marginTop: "50px"}}>ACCESS DETAILED ENTRIES</button> 
            <hr style={{width: "100%"}}></hr>
            <button>MODIFY ENTRIES</button>
        </div>
    )
}

export default Admin_console;