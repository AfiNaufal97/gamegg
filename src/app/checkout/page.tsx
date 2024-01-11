import Image from "next/image";
import Logo from "../../assets/icons/logo.png"
import Item1 from "../../assets/images/item3.png"
import Checkbox from "@/app/component/checkbox";
import ButtonComp from "@/app/component/button";

const Checkout = () =>{
    return <div className="flex flex-row justify-center">

        <div className="flex flex-col w-[50%] h-full mb-[100px]">
            <div className="flex flex-row justify-center mt-[100px] mb-[50px]">
                <Image src={Logo} alt="Logo" className="w-[80px] h-[80px]"/>
            </div>
            <p className="text-mycolors-navy text-[32px] font-bold">Checkout</p>
            <p className="text-mycolors-navy text-[15px] ">
                Waktunya meningkatkan cara bermain
            </p>

            <div className="flex flex-row mt-[20px] gap-4">
                <Image src={Item1} alt="Item 1" className="w-[200px] h-[100px]"/>
                <div>
                    <p className="text-[20px] font-bold text-mycolors-navy">
                        Mobile Legends:
                    </p>
                    <p className="text-[20px] font-bold text-mycolors-navy">
                        The New Battle 2021
                    </p>
                    <p className="text-mycolors-gray">
                        Category: Mobile
                    </p>
                </div>
            </div>

            <div className="border-[1px] mt-[50px]"/>

            <div className="flex flex-col gap-4 mt-[50px]">
                <p className="text-[20px] font-bold text-mycolors-navy">
                    Purchase Details
                </p>
                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Your Game ID
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        masayoshizero
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Order ID
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        #GG001
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Item
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        Rp 42.280.500
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Tax (10%)
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        Rp 4.228.000
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Total
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        Rp 55.000.600
                    </p>
                </div>
            </div>


            <div className="flex flex-col gap-4">
                <p className="text-[20px] font-bold text-mycolors-navy mt-[30px]">
                    Payment Informations
                </p>
                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Your Account Name
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        Masayoshi Angga Zero
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Type
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        Worldwide Transfer
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Bank Name
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        Mandiri
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Bank Account Name
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        PT Store GG Indonesia
                    </p>
                </div>

                <div className="flex flex-row justify-between">
                    <p className="text-mycolors-navy">
                        Bank Number
                    </p>
                    <p className="font-bold text-mycolors-navy">
                        1800 - 9090 - 2021
                    </p>
                </div>
            </div>



            <div className="mt-[30px] mb-[20px]">
                <Checkbox title="I have transferred the money"/>
            </div>

            <ButtonComp color={1} text="Confirm Payment" width={200}/>


        </div>
    </div>
}

export default Checkout