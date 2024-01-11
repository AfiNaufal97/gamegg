import {IBoxComp} from "@/app/utils/IBoxComp";

const BoxComp = (boxComp:IBoxComp) => {
    return <div
        className="bg-[#F9FAFF] w-[200px] h-[130px] rounded-xl flex flex-col justify-center items-center">
        <p className="text-mycolors-navy text-[20px]">
            {boxComp.title}
        </p>
        <p className="text-mycolors-navy text-[12px]">
            {boxComp.value}
        </p>
    </div>
}

export default BoxComp