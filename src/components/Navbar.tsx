import {OutlineMenu} from "../icons/OutlineMenu.tsx";
import {BaselineMoreHoriz} from "../icons/BaselineMoreHoriz.tsx";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" type="button">
                    <OutlineMenu/>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">C·One队内赛</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" type="button">
                    <BaselineMoreHoriz/>
                </button>
            </div>
        </div>
    );
}

export default Navbar;