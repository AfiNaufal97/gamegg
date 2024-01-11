interface InputClass {
    title:string,
    placeholder:string
}

const InputComp = (input:InputClass) =>{
return <div >
    <p className="text-[#0C145A] font-medium text-[12px]">
        {input.title}
    </p>
    <input placeholder= {input.placeholder} className="border-[1px] border-[#0C145A] rounded-xl px-2 py-1 w-[400px]"/>
</div>
}

export default InputComp