import { Link } from "@remix-run/react"
import { FC } from "react"
import Flex from "~/components/Flex"
import Image from "~/components/Image"

const MentorCard: FC = () => {
    return (
        <div className="w-[31%] rounded-[200px] overflow-hidden relative after:absolute after:bg-heading from-primary after:w-full after:h-0 after-content-[''] after:opacity-50 after:top-0 after:left-0 after:transition-all hover:after:h-full after:duration-500 group">
            <Image sources={[{ srcSet: "/mentor/team1.jpg" }]} alt="mentor" />
            <Flex className="absolute bottom-14 left-1/2 -translate-x-1/2 w-9/12 h-9/12 p-6 bg-secondary z-10 rounded-b-[200px] flex-col justify-center items-center mentorShape pt-52 pb-16 text-white scale-0 transition-transform duration-700 group-hover:scale-100 origin-bottom">
                <Link className="font-bold text-[32px] hover:text-primary transition-colors" to="">Devon Lane</Link>
                <h5 className=" text-xl">UI/UX Designer</h5>
                <Flex className="mt-4 gap-2">
                    <Link to="" className="hover:bg-primary transition-colors w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.73984 9.08543C2.67984 9.08543 1.35984 9.08543 0.759844 9.08543C0.439844 9.08543 0.339844 8.96543 0.339844 8.66543C0.339844 7.86543 0.339844 7.04543 0.339844 6.24543C0.339844 5.92543 0.459844 5.82543 0.759844 5.82543H2.73984C2.73984 5.76543 2.73984 4.60543 2.73984 4.06543C2.73984 3.26543 2.87984 2.50543 3.27984 1.80543C3.69984 1.08543 4.29984 0.60543 5.05984 0.32543C5.55984 0.14543 6.05984 0.0654297 6.59984 0.0654297H8.55984C8.83984 0.0654297 8.95984 0.18543 8.95984 0.46543V2.74543C8.95984 3.02543 8.83984 3.14543 8.55984 3.14543C8.01984 3.14543 7.47984 3.14543 6.93984 3.16543C6.39984 3.16543 6.11984 3.42543 6.11984 3.98543C6.09984 4.58543 6.11984 5.16543 6.11984 5.78543H8.43984C8.75984 5.78543 8.87984 5.90543 8.87984 6.22543V8.64543C8.87984 8.96543 8.77984 9.06543 8.43984 9.06543C7.71984 9.06543 6.17984 9.06543 6.11984 9.06543V15.5854C6.11984 15.9254 6.01984 16.0454 5.65984 16.0454C4.81984 16.0454 3.99984 16.0454 3.15984 16.0454C2.85984 16.0454 2.73984 15.9254 2.73984 15.6254C2.73984 13.5254 2.73984 9.14543 2.73984 9.08543Z" fill="white" />
                        </svg>
                    </Link>
                    <Link to="" className="hover:bg-primary transition-colors w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1102_35649)">
                                <path d="M2.68348 0.757324C1.72105 0.757324 1.0918 1.3893 1.0918 2.21995C1.0918 3.03225 1.7023 3.68225 2.64655 3.68225H2.66481C3.64606 3.68225 4.25673 3.03225 4.25673 2.21995C4.23838 1.3893 3.64606 0.757324 2.68348 0.757324Z" fill="white" />
                                <path d="M1.25586 4.83789H4.06944V13.3027H1.25586V4.83789Z" fill="white" />
                                <path d="M10.9765 4.64041C9.45863 4.64041 8.44085 6.06667 8.44085 6.06667V4.83908H5.6272V13.3038H8.44069V8.57679C8.44069 8.32373 8.45904 8.07106 8.53338 7.8901C8.73677 7.38477 9.19964 6.86126 9.97694 6.86126C10.995 6.86126 11.4022 7.63752 11.4022 8.77546V13.3038H14.2156V8.4503C14.2156 5.85029 12.8274 4.64041 10.9765 4.64041Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1102_35649">
                                    <rect width={14} height={14} fill="white" transform="translate(0.660156 0.0463867)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link to="" className="hover:bg-primary transition-colors w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1102_35654)">
                                <path d="M17.7421 4.82877C17.5477 4.10584 16.9777 3.53596 16.2549 3.34129C14.9343 2.97998 9.65214 2.97998 9.65214 2.97998C9.65214 2.97998 4.37015 2.97998 3.04963 3.32759C2.3407 3.52205 1.75681 4.10594 1.56236 4.82877C1.21484 6.14919 1.21484 8.88757 1.21484 8.88757C1.21484 8.88757 1.21484 11.6397 1.56236 12.9464C1.75702 13.6692 2.3268 14.2391 3.04973 14.4337C4.38406 14.7952 9.65234 14.7952 9.65234 14.7952C9.65234 14.7952 14.9343 14.7952 16.2549 14.4475C16.9778 14.253 17.5477 13.6831 17.7423 12.9603C18.0897 11.6397 18.0897 8.90147 18.0897 8.90147C18.0897 8.90147 18.1036 6.14919 17.7421 4.82877ZM7.97041 11.4174V6.35776L12.3628 8.88757L7.97041 11.4174Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1102_35654">
                                    <rect width={18} height={18} fill="white" transform="translate(0.660156 0.0463867)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </Flex >
            </Flex >
        </div >
    )
}
export default MentorCard