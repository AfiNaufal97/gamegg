import Logo from "../../assets/icons/logo.png"
import Image from "next/image";
import InputComp from "@/app/component/input_comp";

const Signup = () =>{
    return <div className="flex items-center justify-center h-screen">

        <div className="flex flex-col items-start gap-1 ">
            <Image src={Logo} alt="Logo" className="w-[50px] h-[50px] mb-[20px]"/>

            <p className="text-[#0C145A] font-bold text-[20px]">
                Sign Up
            </p>

            <p className="text-[#0C145A] font-medium text-[12px]">
                Daftar dan bergabung dengan kami
            </p>

            <div className="flex flex-col gap-4 mt-[30px] w-[400px]">
                <InputComp title="Full Name" placeholder="Write Your Name"/>
                <InputComp title="Email Address" placeholder="Write Your Mail"/>
                <InputComp title="Password" placeholder="Write Your Password"/>
            </div>

            <div className="flex flex-col justify-center items-center bg-[#4D17E2] w-[400px] h-[40px] rounded-2xl mt-[20px]">
                <p className="text-white">
                    Continue
                </p>

            </div>

            <div className="flex flex-col justify-center items-center bg-[#E7EAF5] w-[400px] h-[40px] rounded-2xl mt-[8px]">
                <p className="text-black">
                    Sign In
                </p>

            </div>

        </div>

    </div>
}

export default Signup