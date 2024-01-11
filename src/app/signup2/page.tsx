"use client"
import ImageUpload from "../../assets/icons/pic.png"
import Image from "next/image";
import IconDown from "../../assets/icons/Icon_down.png"

import DropdownComp from "@/app/component/dropdown";

const Signup = () => {
    return <div className="flex items-center justify-center h-screen">

        <div className="flex flex-col items-start gap-1 items-center ">
            <Image src={ImageUpload} alt="Logo" className="w-[100px] h-[100px] mb-[20px]"/>

            <p className="text-[#0C145A] font-bold text-[20px]">
                Shayna Anne
            </p>

            <p className="text-[#0C145A] font-medium text-[12px] mb-[20px]">
                shayna@anne.com
            </p>


            <DropdownComp title="Favorite Game" placeholder="Select Category"/>

            <div
                className="flex flex-col justify-center items-center bg-[#4D17E2] w-[400px] h-[40px] rounded-2xl mt-[20px] mb-[20px]">
                <p className="text-white">
                    Create My Account
                </p>

            </div>

            <p className="text-black underline">
                Terms & Conditions
            </p>


        </div>

    </div>
}

export default Signup