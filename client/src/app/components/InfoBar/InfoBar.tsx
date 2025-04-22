import Image from "next/image";
import onlineIcon from "@/app/icons/onlineIcon.png";
import closeIcon from "@/app/icons/closeIcon.png";

const InfoBar = ({ room }: { room: string }) => (
  <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-3 rounded-t-md">
    <div className="flex items-center space-x-2">
      <Image src={onlineIcon} alt="online icon" width={8} height={8} />
      <h3 className="text-lg font-semibold">{room}</h3>
    </div>
    <div>
      <a href="/">
        <Image
          src={closeIcon}
          alt="close icon"
          width={8}
          height={8}
          className="cursor-pointer"
        />
      </a>
    </div>
  </div>
);

export default InfoBar;
