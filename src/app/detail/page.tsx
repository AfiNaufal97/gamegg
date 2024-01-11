import NavbarComp from "@/app/component/navbar";
import Item from "../../assets/images/item.png"
import Image from "next/image";
import {Input} from "postcss";
import FooterComp from "@/app/component/footer";

const Detail = () => {
    return <div>
        <NavbarComp/>

        <div className="max-w-full mx-[120px] mt-[100px]">
            <p className="font-bold text-[#0C145A] ">Top Up</p>
            <p className='text-[#0C145A]'>Perkuat akun dan jadilah pemenang</p>
        </div>


        <div className=" mx-[120px] mt-[20px] flex flex-row gap-4 ">
            <Image src={Item} alt="banner 1" className="w-[200px] h-[300px]"/>

            <div className="flex flex-col justify-between max-w-full">
                <div className="w-[300px]">
                    <p className="font-bold text-[#0C145A] text-[20px] ">
                        Mobile Legends:
                        The New Battle 2021
                    </p>
                    <p className="text-[#7E8CAC]">
                        Category: Mobile
                    </p>
                </div>

                <div className="border-[1px] border-[#E7EAF5] max-w-full"/>

                <div>
                    <p className='text-[#0C145A]'>Verify ID</p>
                    <input placeholder="hallo" className="border-[1px] border-[#0C145A] rounded-xl p-1"/>
                </div>


            </div>
        </div>

        <div className=" mx-[120px] mt-[20px] flex flex-row gap-4 ">
            <div className="w-[200px] h-[300px]"/>

            <div className="flex flex-col">
                <p className="font-bold text-[#0C145A] text-[20px] mb-[20px]">
                    Nominal
                </p>
                <div className="grid grid-cols-3 gap-4">
                    <div
                        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
                        <p className="text-[#0C145A] text-[20px]">
                            125 Gold
                        </p>
                        <p className="text-[#0C145A] text-[12px]">
                            Rp.3.250.000
                        </p>
                    </div>
                    <div
                        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
                        <p className="text-[#0C145A] text-[20px]">
                            225 Gold
                        </p>
                        <p className="text-[#0C145A] text-[12px]">
                            Rp.3.250.000
                        </p>
                    </div>
                    <div
                        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
                        <p className="text-[#0C145A] text-[20px]">
                            350 Gold
                        </p>
                        <p className="text-[#0C145A] text-[12px]">
                            Rp.3.250.000
                        </p>
                    </div>

                    <div
                        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
                        <p className="text-[#0C145A] text-[20px]">
                            225 Gold
                        </p>
                        <p className="text-[#0C145A] text-[12px]">
                            Rp.3.250.000
                        </p>
                    </div>
                    <div
                        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
                        <p className="text-[#0C145A] text-[20px]">
                            350 Gold
                        </p>
                        <p className="text-[#0C145A] text-[12px]">
                            Rp.3.250.000
                        </p>
                    </div>


                </div>
            </div>


        </div>

        <div className=" mx-[120px] mt-[50px] flex flex-row gap-4 ">
            <div className="w-[200px] h-[300px]"/>

            <div className="flex flex-col">
                <p className="font-bold text-[#0C145A] text-[20px] mb-[20px]">
                    Payment Method
                </p>
                <div className="grid grid-cols-3 gap-4">
                    <div
                        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
                        <p className="text-[#0C145A] text-[20px]">
                            Transfer
                        </p>
                        <p className="text-[#0C145A] text-[12px]">
                            Worldwide available
                        </p>
                    </div>
                    <div
                        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
                        <p className="text-[#0C145A] text-[20px]">
                            VISA
                        </p>
                        <p className="text-[#0C145A] text-[12px]">
                            Credit card
                        </p>
                    </div>
                </div>
            </div>


        </div>


        <div className=" mx-[120px] flex flex-row gap-4 ">
            <div className="w-[200px] h-[300px]"/>

            <div className="flex flex-col justify-between h-[150px]">
                <div>
                    <p className="font-bold text-[#0C145A] text-[20px] mb-[20px]">
                        Bank Account Name
                    </p>
                    <div className=" gap-4">
                        <input placeholder="hallo" className="border-[1px] border-[#0C145A] rounded-xl p-1"/>
                    </div>
                </div>


                <div
                    className="flex flex-cols justify-center items-center  bg-[#4D17E2] w-[100px] h-[30px] rounded-2xl">
                    <p className="text-white ">
                        Continue
                    </p>
                </div>
            </div>



        </div>

        <FooterComp/>
    </div>
}

export default Detail