"use client"
import Image from "next/image";
import ImageSuccess from "../../assets/images/checkout.png"
import ButtonComp from "@/app/component/button";



const Completed = () => {
    return <div className="flex items-center justify-center h-screen">

        <div className="flex flex-col items-start gap-1 items-center ">
            <Image src={ImageSuccess} alt="Logo" className="w-[250px] h-[250px] mb-[20px]"/>

            <p className="text-mycolors-navy font-bold text-[20px]">
                Checkout Completed </p>

            <p className="text-mycolors-navy font-medium text-[12px] mb-[20px]">
                Kami akan periksa pembayaran Anda dan menghubungi via WhatsApp
            </p>



            <ButtonComp color={1} text="My Dashboard" width={400}/>
            <ButtonComp color={2} text="Whatsapp ke Admin" width={400}/>



        </div>

    </div>
}

export default Completed