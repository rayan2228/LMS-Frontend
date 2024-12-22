import Flex from "./Flex";

// Define how many icons you want to render
const iconCount = 4;
const Title = ({ title, subtitle, className, subtitleClass }: { title: string, subtitle?: string, className?: string, subtitleClass?: string }) => {

    // Function to render the icons dynamically
    const renderIcons = () => {
        const icons = [];
        for (let i = 0; i < iconCount; i++) {
            icons.push(
                <svg
                    key={i}
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.84 6.58039L0 12.2604V8.65039L3.59 6.58039L0 4.51039V0.900391L9.84 6.58039Z"
                        fill="#F57005"
                    />
                </svg>
            );
        }
        return icons;
    };

    return (
        <Flex className={` gap-2 capitalize text-primary flex-col ${className}`}>
            <Flex className="items-center gap-4">
                <h3 className="font-bold text-2xl ">{title}</h3>
                <Flex className="items-center gap-1">{renderIcons()}</Flex>
            </Flex>
            <h2 className={`${subtitleClass}`}>{subtitle}</h2>
        </Flex>
    );
};

export default Title;
