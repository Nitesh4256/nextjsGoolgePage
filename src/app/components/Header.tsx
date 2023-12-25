import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
const Header: React.FunctionComponent = () => {
  const url: string =
    "https://media.istockphoto.com/id/1176400518/photo/abstract-technical-surface.webp?b=1&s=170667a&w=0&k=20&c=a3pAGYHHJAhfYaZ21D9XFSzQw0NOJKzPx06iNHw4ilA=";

  return (
    <div className="flex justify-end pr-4 pt-3 space-x-4 items-center ">
      <Link
        href="https://mail.google.com"
        className="text-sm hover:underline cursor-pointer"
      >
        Gmail
      </Link>
      <Link
        href="https://images/google.com"
        className="text-sm hover:underline cursor-pointer"
      >
        Images
      </Link>
      <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />
      <Image
        src={url}
        alt="dp"
        width={30}
        height={30}
        className="rounded-full object-cover"
        style={{ height: "30px" }}
      />
    </div>
  );
};

export default Header;
