import { Link } from "@remix-run/react";

const ServiceCard = ({ heading, decryption, link = "/read", src }: { heading: string; decryption: string, link?: string, src: string }) => {
  return (
    <div className="shadow-custom py-10 pl-[30px] pr-6 rounded-xl border border-[#E0E3FD]  relative group capitalize bg-white overflow-hidden  " >
      <div className="p-4 bg-secondary group-hover:bg-primary inline-block rounded-3xl transition-colors">
        <img src={src} alt="service" className="w-10 h-10" />
      </div>
      <h3 className="font-bold text-lg text-heading mt-2">{heading}</h3>
      <p className="text-text my-2 leading-6 text-sm">
        {decryption}
      </p>
      <Link
        to={link}
        className="text-secondary font-bold text-lg inline-flex items-center gap-2"
      >
        Read More{" "}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.96335 4.99789L2.22238 8.73902C2.11937 8.84179 2.0627 8.97919 2.0627 9.12569C2.0627 9.27228 2.11937 9.40959 2.22238 9.51252L2.55018 9.84016C2.65303 9.94325 2.79051 10 2.93701 10C3.08351 10 3.22083 9.94325 3.32376 9.84016L7.77799 5.38602C7.88132 5.28276 7.9379 5.1448 7.9375 4.99813C7.9379 4.85081 7.8814 4.71301 7.77799 4.60967L3.3279 0.159838C3.22498 0.0567488 3.08766 4.23986e-07 2.94107 4.36801e-07C2.79457 4.49609e-07 2.65725 0.0567489 2.55425 0.159838L2.22652 0.487481C2.01327 0.700733 2.01327 1.04789 2.22652 1.26106L5.96335 4.99789Z"
            fill="#4F5DE4"
          />
        </svg>
      </Link>
      <div className="absolute bottom-0 right-0">
        <svg
          className="transition-colors duration-300 fill-[#F1F2FD] group-hover:fill-primary"
          width="118"
          height="129"
          viewBox="0 0 118 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.58193 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.581932 322.604 0.58193 143.759Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;
