import { useState } from "react"
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"
import { BsBell, BsCameraVideo, BsYoutube } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoAppsSharp } from "react-icons/io5"
import { TiMicrophone } from "react-icons/ti"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { video_action } from "../store/VideoSlice"

export const Navbar = () => {
    const [search, setSearch] = useState<string>("")
    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(video_action.videoSubmit(search))
    }

    return (
        <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 items-center text-2xl">
                <div>
                    <GiHamburgerMenu />
                </div>
                <Link to="/">
                    <div className="flex gap-1 items-center justify-center">
                        <BsYoutube className="text-3xl text-red-600" />
                        <span className="text-xl font-medium">YouTube</span>
                    </div>
                </Link>
            </div>
            <div className="flex justify-center items-center gap-5">
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
                        <div className="flex items-center gap-4 pr-5">
                            <div>
                                <AiOutlineSearch/>
                            </div>
                            <input
                                type="text"
                                className="w-96 bg-zinc-900 border-none focus:outline-none"
                                onChange={(e)=> setSearch(e.target.value)}
                            />
                            <AiOutlineClose className="text-xl cursor-pointer"/>
                        </div>
                        <button type="submit" className="h-10 w-16 flex items-center justify-center bg-zinc-800">
                            <AiOutlineSearch className="text-xl"/>
                        </button>
                    </div>
                </form>
                <div className="text-xl p-3 rounded-full bg-zinc-900">
                    <TiMicrophone/>
                </div>
            </div>
            <div className="flex gap-5 items-center text-xl">
                <BsCameraVideo />
                <IoAppsSharp />
                <div className="relative">
                    <BsBell />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                        9+
                    </span>
                </div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-6i4SrTt65CGXNG3qN4uDLVoQudz8nPzhxmICdGY5g&s"
                    alt="logo"
                    className="w-9 h-9 rounded-full"
                />
            </div>
        </div>
    )
}
