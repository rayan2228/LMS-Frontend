const CounterCard = () => {
    return (
        <div className="bg-white w-1/4 text-center  rounded-2xl py-8  shadow-custom relative">

            <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full py-8 -translate-x-1/2">
                <rect x="1.5" y="2.00049" width={500} height={300} rx={7} stroke="#4F5DE4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="20 20" />
            </svg>






            <h5 className="font-bold text-secondary text-[50px]">30.3k</h5>
            <h6 className="text-text font-semibold text-base">Student Enrolled</h6>
        </div>
    )
}
export default CounterCard