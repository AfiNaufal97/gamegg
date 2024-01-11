import NavbarComp from "@/app/component/navbar";
import Image from "next/image";
import Banner from "../assets/images/banner_image.png";
import Icon1 from "../assets/icons/icon1.png"
import Icon2 from "../assets/icons/icon2.png"
import Icon3 from "../assets/icons/icon3.png"
import Item from "../assets/images/item.png"
import Item2 from "../assets/images/item2.png"
import Item3 from "../assets/images/item3.png"
import Item4 from "../assets/images/item4.png"
import Item5 from "../assets/images/item5.png"
import Banner2 from "../assets/images/cover.png"
import Logo from "../assets/icons/logo.png"
import FooterComp from "@/app/component/footer";

export default function Home() {
    return (
        <main>
            <div className="max-w-full max-h-full">
                <section>

                    <NavbarComp/>
                </section>

                <section>
                    <div className='flex flex-row justify-between items-center mx-[120px]'>
                        <div>
                            <p className='text-[#7E8CAC]'>
                                Halo gamers,
                            </p>
                            <p className='text-[40px] font-bold text-blue-950'>
                                Topup & Get a New
                                Experience in Gaming</p>

                            <p className='font-normal text-[18px] text-gray-400'>
                                Kami menyediakan jutaan cara untuk membantu
                                players menjadi pemenang sejati
                            </p>

                            <div className='flex flex-row items-start mt-[20px]'>
                                <div
                                    className='bg-[#0C145A] text-white rounded-xl px-[20px] py-[5px] mr-[20px] hover:cursor-pointer'>
                                    Get Started
                                </div>

                                <p className='underline text-[#0C145A] hover:font-bold hover:cursor-pointer'>
                                    Learn More
                                </p>
                            </div>
                        </div>
                        <Image src={Banner} alt='image banner' className='w-[589px] h-[484px]'/>
                    </div>
                </section>

                <section>
                    <div className='flex flex-col max-w-full items-center mt-[50px] mx-[120px]'>
                        <p className='font-bold text-[#0C145A] text-[18px] '>
                            It’s Really That
                        </p>
                        <p className='font-bold text-[#0C145A] text-[20px]'>
                            Easy to Win the Game
                        </p>

                        <div className='flex flex-row grid-rows max-w-full mt-[30px] justify-evenly'>
                            <div
                                className='flex flex-col rounded-xl bg-[#F9FAFF] w-[360px] h-[274px] mx-[10px] justify-between'>
                                <Image src={Icon1} alt="icon 1" className='w-[80px] h-[80px] m-[10px]'/>
                                <div className='mx-[20px]'>
                                    <p className='font-semibold text-[18px] text-[#0C145A]'>
                                        1. Start
                                    </p>
                                    <p>
                                        Pilih salah satu game
                                        yang ingin kamu top up
                                    </p>
                                </div>
                                <div className="h-[20px] w-[20px]">

                                </div>

                            </div>
                            <div
                                className='flex flex-col rounded-xl bg-[#F9FAFF] w-[360px] h-[274px] mx-[10px] justify-between'>
                                <Image src={Icon2} alt="icon 2" className='w-[80px] h-[80px] m-[10px]'/>
                                <div className='mx-[20px]'>
                                    <p className='font-semibold text-[18px] text-[#0C145A]'>
                                        2. Fill Up
                                    </p>
                                    <p>
                                        Top up sesuai dengan
                                        nominal yang sudah tersedia
                                    </p>
                                </div>
                                <div className="h-[20px] w-[20px]">

                                </div>

                            </div>
                            <div
                                className='flex flex-col rounded-xl bg-[#F9FAFF] w-[360px] h-[274px] mx-[10px] justify-between'>
                                <Image src={Icon3} alt="icon 3" className='w-[80px] h-[80px] m-[10px]'/>
                                <div className='mx-[20px]'>
                                    <p className='font-semibold text-[18px] text-[#0C145A]'>
                                        3. Be a Winner
                                    </p>
                                    <p>
                                        Siap digunakan untuk
                                        improve permainan kamu
                                    </p>
                                </div>
                                <div className="h-[20px] w-[20px]">

                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className='flex flex-col mt-[50px] mx-[120px]'>
                        <p className='text-[#0C145A] text-[20px] font-bold'>
                            Our Featured
                        </p>
                        <p className='text-[#0C145A] text-[20px] font-bold'>
                            Games This Year
                        </p>

                        <div className="flex flex-row gap-4 justify-around my-[20px]">
                            <Image src={Item} alt="item 1"
                                   className="w-[180px] h-[220px] hover:border-4 hover:cursor-pointer hover:rounded-[30px] hover:border-[#0C145A]"/>
                            <Image src={Item2} alt="item 1"
                                   className="w-[180px] h-[220px] hover:border-4 hover:cursor-pointer hover:rounded-[30px] hover:border-[#0C145A]"/>
                            <Image src={Item3} alt="item 1"
                                   className="w-[180px] h-[220px] hover:border-4 hover:cursor-pointer hover:rounded-[30px] hover:border-[#0C145A]"/>
                            <Image src={Item4} alt="item 1"
                                   className="w-[180px] h-[220px] hover:border-4 hover:cursor-pointer hover:rounded-[30px] hover:border-[#0C145A]"/>
                            <Image src={Item5} alt="item 1"
                                   className="w-[180px] h-[220px] hover:border-4 hover:cursor-pointer hover:rounded-[30px] hover:border-[#0C145A]"/>
                        </div>

                    </div>

                </section>

                <section>
                    <div className="flex flex-row gap-[50px] max-w-full justify-center my-[50px] mx-[120px]">
                        <div>
                            <p className="font-bold text-[18px] text-[#0C145A]">290M+</p>
                            <p className="font-normal text-[#7E8CAC] text-[15px]">Players Top Up</p>
                        </div>
                        <div>
                            <p className="font-bold text-[18px] text-[#0C145A]">12.500</p>
                            <p className="font-normal text-[#7E8CAC] text-[15px]">Games Available</p>
                        </div>
                        <div>
                            <p className="font-bold text-[18px] text-[#0C145A]">99,9%</p>
                            <p className="font-normal text-[#7E8CAC] text-[15px]">Happy Players</p>
                        </div>
                        <div>
                            <p className="font-bold text-[18px] text-[#0C145A]">4.7</p>
                            <p className="font-normal text-[#7E8CAC] text-[15px]">Rating Worldwide</p>
                        </div>


                    </div>
                </section>

                <section>
                    <div className="flex flex-row max-w-full justify-around my-[50px] mx-[120px]">
                        <Image src={Banner2} alt="banner 2" className="w-[500px] h-[400px]"/>
                        <div className="flex flex-col w-[300px] justify-center gap-[10px] ">
                            <div>
                                <p className="text-[20px] font-bold text-blue-950">Win the battle.
                                </p>
                                <p className="text-[20px] font-bold text-blue-950">
                                    Be the Champion.</p>
                            </div>


                            <p>
                                Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati
                            </p>
                            <div className="bg-gray-300 text-white p-2 w-[100px] rounded-xl">
                                Read Story
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <FooterComp/>
                </section>


            </div>
        </main>
    )
}
