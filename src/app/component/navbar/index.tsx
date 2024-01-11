import Image from "next/image";
import Logo from "../../../assets/icons/logo.png"
const NavbarComp = () => {
    return <div className="max-w-full flex flex-row justify-between  my-[40px] mx-[120px]">
        <div>
            <Image src={Logo} alt="logo" className='w-[50px] h-[50px]'/>
        </div>
        <div className='flex flex-row items-center'>
            <p className='mr-[20px] hover:text-blue-500 hover:cursor-pointer'>Home</p>
            <p className='mr-[20px] hover:text-blue-500 hover:cursor-pointer'>Games</p>
            <p className='mr-[20px] hover:text-blue-500 hover:cursor-pointer'>Reward</p>
            <p className='mr-[20px] hover:text-blue-500 hover:cursor-pointer'>Discover</p>
            <p className='mr-[20px] hover:text-blue-500 hover:cursor-pointer'>Global Rank</p>
            <div className='bg-gray-200 rounded-xl flex flex-col items-center px-[5px] py-[5px] hover:bg-gray-600'>
                <p className='items-center mx-[10px]  hover:cursor-pointer hover:text-white'>Sign In</p>
            </div>

        </div>
    </div>
}

export default NavbarComp