export default function TClientsProjects() {
    return (
        <div className="py-10 px-28 bg-white">
            <div className="text-white px-10 py-10 ">
                <h1 className=" text-center text-4xl text-black  font-bold">Long Time Project, with Our<br/> <span className="text-[#0125ca]">Best Partner</span> </h1>
                <p className="text-center text-black py-3">We’ve been lucky to collaborate with a long list of customers, <br/>located in and out of the country. Thanks to them we have grown as professionals.</p>
            </div>
            <div className='grid grid-cols-3 gap-20'>
                <div className=" py-6 rounded-md w-full px-10  flex flex-col justify-center items-center h-full shadow-lg">
                    <div className="w-6  h-6 rounded-full bg-[#2730ed24] flex justify-center items-center">
                        <div className="w-[10px]  h-[10px] rounded-full bg-[#0125ca]">

                        </div>
                    </div>
                    <div>
                        <h1 className=" font-bold text-[#0125ca] text-center text-[35px] py-3">10+</h1>
                        <p className="text-black pr-5 text-center text-[16px]">Total Clients</p>
                    </div>
                </div>
                <div className=" py-6 rounded-md w-full px-10  flex flex-col justify-center items-center h-full shadow-lg">
                    <div className="w-6  h-6 rounded-full bg-[#2730ed24] flex justify-center items-center">
                        <div className="w-[10px]  h-[10px] rounded-full bg-[#0125ca]">

                        </div>
                    </div>
                    <h1 className=" font-bold text-[#0125ca] text-[35px] py-3">12+</h1>
                    <p className="text-black pr-5 text-[16px]">Project Done</p>
                </div>
                <div className=" py-6 rounded-md w-full px-10  flex flex-col justify-center items-center h-full shadow-lg">
                    <div className="w-6  h-6 rounded-full bg-[#2730ed24] flex justify-center items-center">
                        <div className="w-[10px]  h-[10px] rounded-full bg-[#0125ca]">

                        </div>
                    </div>
                    <h1 className=" font-bold text-[#0125ca] text-[35px] py-3">1.5 <span className="text-base font-popins">Years</span></h1>
                    <p className="text-black pr-5 text-[16px]">In Development</p>
                </div>
            </div>
        </div>
    )
}

