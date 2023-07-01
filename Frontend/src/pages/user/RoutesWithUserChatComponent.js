import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";

const RoutesWithUserChatComponent = ()=>{
    return (
        <>
           <UserChatComponent />
           <Outlet /> {/* jo jo routes is component ke neeche honge wo render ho jayenge */}
        </>
    )
}
export default RoutesWithUserChatComponent;