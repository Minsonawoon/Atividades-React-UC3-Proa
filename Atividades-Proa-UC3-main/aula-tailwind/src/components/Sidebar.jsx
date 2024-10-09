import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";

function SideBar(){

    return(
        <div className="fixed top-0 flex flex-col h-screen bg-gray-700 w-16 text-white">
            <SideBarIcon icone={<BsGearFill size={28} />} />
            <SideBarIcon icone={<BsFillLightningFill size={28} />}/>
            <SideBarIcon icone={<BsPlus size={28} />}/>
            <SideBarIcon icone={<FaFire size={28} />}/>
        </div>
    )

}

export default SideBar;