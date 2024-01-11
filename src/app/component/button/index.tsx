
import {ButtonClass} from "@/app/utils/button_class";


const ButtonComp = (buttonClass:ButtonClass) => {
    if(buttonClass.color === 1){
        return <div
            className={`flex flex-col justify-center hover:cursor-pointer items-center bg-mycolors-purple w-[${buttonClass.width}px] h-[40px] rounded-2xl mb-[10px]`}>
            <p className="text-white">
                {buttonClass.text}
            </p>

        </div>
    }else{
        return <div
            className={`flex flex-col justify-center hover:cursor-pointer items-center bg-mycolors-gray w-[${buttonClass.width}px] h-[40px] rounded-2xl mb-[10px]`}>
            <p className="text-black">
                {buttonClass.text}
            </p>

        </div>
    }

}

export default ButtonComp