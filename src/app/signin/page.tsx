import InputComp from "@/app/component/input_comp";
import Image from "next/image";
import Logo from "../../assets/icons/logo.png"
import Banner from "../../assets/images/cover.png"
import ButtonComp from "@/app/component/button";
const Signin = () =>{
    return <div className="flex flex-row items-center justify-center h-screen ">
        <div className="w-1/2 flex flex-col items-center ">
            <div className="w-1/2 flex flex-col items-start gap-4">
                <Image src={Logo} alt="logo" className="w-[50px] h-[50px]"/>
                <div>
                    <p className="font-bold text-mycolors-navy text-[20px]">
                        Sign In
                    </p>

                    <p className="font-medium text-mycolors-navy">
                        Masuk untuk melakukan proses top up
                    </p>
                </div>


                <div className="flex flex-col gap-4">
                    <InputComp title="Email Address" placeholder="Enter Your address"/>
                    <InputComp title="Email Address" placeholder="Enter Your address"/>


                    <ButtonComp color={1} text="Continue To SignIn"/>

                </div>
            </div>
        </div>


        <div className="w-1/2 flex flex-col justify-center items-center h-full bg-blue-950">



                <div className="flex flex-col items-start px-[100px] w-full ">
                    <Image src={Banner} alt="Banner" className="w-[450px] h-[290px]"/>
                    <p className="text-white font-bold text-[20px] mt-[20px]">
                        Win the battle.
                        Be the Champion.
                    </p>
                    <p className="text-white text-[15px] w-[400px] ">
                        Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati
                    </p>
                </div>


        </div>


    </div>
}

export default Signin