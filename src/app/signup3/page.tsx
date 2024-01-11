"use client"
import Image from "next/image";
import ImageSuccess from "../../assets/images/img_wallet.png"

const Signup = () => {
    return <div className="flex items-center justify-center h-screen">

        <div className="flex flex-col items-start gap-1 items-center ">
            <Image src={ImageSuccess} alt="Logo" className="w-[150px] h-[150px] mb-[20px]"/>

            <p className="text-[#0C145A] font-bold text-[20px]">
                Well Done </p>

            <p className="text-[#0C145A] font-medium text-[12px] mb-[20px]">
                Kamu sudah bisa melakukan top up
                dan menjadi pemenang!
            </p>


            <div
                className="flex flex-col justify-center items-center bg-[#4D17E2] w-[100px] h-[40px] rounded-2xl mt-[20px] mb-[20px]">
                <p className="text-white">
                   Top Up
                </p>

            </div>



        </div>

    </div>
}

export default Signup