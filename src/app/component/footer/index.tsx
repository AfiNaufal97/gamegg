import Image from "next/image";
import Logo from "@/assets/icons/logo.png";

const FooterComp = () => {
    return <div className="flex flex-cols items-center justify-around gap-4 bg-[#F9FAFF] max-w-full h-[200px]">
        <div className="flex flex-row mx-[120px] justify-around  gap-[50px]">
            <div className="flex flex-col gap-4 w-[300px]">
                <Image src={Logo} alt="Logo" className="w-[50px] h-[50px]"/>
                <p className="font-normal text-mycolors-navy">
                    StoreGG membantu gamers
                    untuk menjadi pemenang sejati
                </p>
                <p>
                    Copyright 2021. All Rights Reserved.
                </p>
            </div>

            <div>

                <p className="font-bold text-mycolors-navy">
                    Company
                </p>
                <p className="font-normal text-mycolors-navy">
                    About Us
                </p>

                <p className="font-normal text-mycolors-navy">
                    Press Release
                </p>

                <p className="font-normal text-mycolors-navy">
                    Terms of Use
                </p>


                <p className="font-normal text-mycolors-navy">
                    Privacy & Policy
                </p>

            </div>

            <div>

                <p className="font-bold text-[#0C145A]">
                    Support
                </p>
                <p className="font-normal text-[#0C145A]">
                    Refund Policy
                </p>

                <p className="font-normal text-[#0C145A]">
                    Unlock Rewards
                </p>


                <p className="font-normal text-[#0C145A]">
                    Live Chatting
                </p>

            </div>
            <div>

                <p className="font-bold text-mycolors-navy">
                    Connect
                </p>
                <p className="font-normal text-mycolors-navy">
                    hi@store.gg
                </p>

                <p className="font-normal text-mycolors-navy">
                    team@store.gg
                </p>

                <p className="font-normal text-mycolors-navy">
                    Pasific 12, Jakarta Selatan
                </p>
                <p className="font-normal text-mycolors-navy">
                    021 - 1122 - 9090
                </p>

            </div>

        </div>
    </div>
}

export default FooterComp