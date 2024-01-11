"use client"
import Image from "next/image";
import ImageSuccess from "../../assets/images/img_wallet.png"
import ButtonComp from "@/app/component/button";

const Signup = () => {
    return <div className="flex items-center justify-center h-screen">

        <div className="flex flex-col items-start gap-1 items-center ">
            <Image src={ImageSuccess} alt="Logo" className="w-[150px] h-[150px] mb-[20px]"/>

            <p className="text-mycolors-navy font-bold text-[20px]">
                Well Done </p>

            <p className="text-mycolors-navy font-medium text-[12px] mb-[20px]">
                Kamu sudah bisa melakukan top up
                dan menjadi pemenang!
            </p>



            <ButtonComp color={1} text="Top Up" width={150}/>




        </div>

    </div>
}

export default Signup