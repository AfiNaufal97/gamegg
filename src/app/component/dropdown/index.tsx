import {useState} from "react";
import Image from "next/image";
import IconDown from "../../../assets/icons/Icon_down.png"


interface Category {
    title:string,
    placeholder:string
}
const DropdownComp = (category:Category) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <p className="text-[#0C145A] font-medium text-[15px]">
                {category.title}
            </p>
            <button
                className="border-[1px] px-4 py-2 rounded focus:outline-none focus:shadow-outline w-[400px] rounded-[50px]"
                onClick={toggleDropdown}
            >
                <div className="flex flex-row justify-between items-center ">
                   <p className="text-black">{category.placeholder}</p>
                    <Image src={IconDown} alt="drop down"  className="w-[20px] h-[20px]"/>
                </div>

            </button>

            {isOpen && (
                <div className="absolute mt-2 bg-white border rounded shadow-md">
                    <ul>
                        <li className="p-2">Option 1</li>
                        <li className="p-2">Option 2</li>
                        <li className="p-2">Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownComp