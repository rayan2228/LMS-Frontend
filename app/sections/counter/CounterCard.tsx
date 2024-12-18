const CounterCard = ({ number, description }: { number: string, description: string }) => {
    return (
        <div className=" w-1/4 text-center  rounded-2xl py-8   relative">
            <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 -left-1 w-full h-full ">
                <rect x="1.5" y="2.00049" width={310} height={176} rx={7} stroke="#4F5DE4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="20 20" />
            </svg>
            <h5 className="font-bold text-secondary text-[50px]">{number}</h5>
            <h6 className="text-text font-semibold text-base">{description}</h6>
        </div>
    )
}
export default CounterCard