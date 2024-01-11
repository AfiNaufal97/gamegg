"use client"
import ImageUpload from "../../assets/icons/pic.png"
import Image from "next/image";
import IconDown from "../../assets/icons/Icon_down.png"

import DropdownComp from "@/app/component/dropdown";
import ButtonComp from "@/app/component/button";

const Signup = () => {
    return <div className="flex items-center justify-center h-screen">

        <div className="flex flex-col items-start gap-1 items-center ">
            <Image src={ImageUpload} alt="Logo" className="w-[100px] h-[100px] mb-[20px]"/>

            <p className="text-mycolors-navy font-bold text-[20px]">
                Shayna Anne
            </p>

            <p className="text-mycolors-navy font-medium text-[12px] mb-[20px]">
                shayna@anne.com
            </p>


            <DropdownComp title="Favorite Game" placeholder="Select Category"/>
            <ButtonComp color={1} text="Create My Account" width={400}/>

            <p className="text-black underline">
                Terms & Conditions
            </p>


        </div>

    </div>
}

export default Signup