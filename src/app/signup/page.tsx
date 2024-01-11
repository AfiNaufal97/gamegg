import Logo from "../../assets/icons/logo.png"
import Image from "next/image";
import InputComp from "@/app/component/input_comp";
import ButtonComp from "@/app/component/button";

const Signup = () =>{
    return <div className="flex items-center justify-center h-screen">

        <div className="flex flex-col items-start gap-1 ">
            <Image src={Logo} alt="Logo" className="w-[50px] h-[50px] mb-[20px]"/>

            <p className="text-mycolors-navy font-bold text-[20px]">
                Sign Up
            </p>

            <p className="text-mycolors-navy font-medium text-[12px]">
                Daftar dan bergabung dengan kami
            </p>

            <div className="flex flex-col gap-4 mt-[30px] w-[400px] mb-[20px]">
                <InputComp title="Full Name" placeholder="Write Your Name"/>
                <InputComp title="Email Address" placeholder="Write Your Mail"/>
                <InputComp title="Password" placeholder="Write Your Password"/>
            </div>


            <ButtonComp color={1} text="Continue" width={400} />
            <ButtonComp color={2} text="Sign In" width={400} />

        </div>

    </div>
}

export default Signup