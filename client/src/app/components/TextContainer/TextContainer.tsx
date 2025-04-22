// import onlineIcon from "@/app/icons/onlineIcon.png";
// import Image from "next/image";

// interface User {
//   name: string;
// }

// const TextContainer = ({ users }: { users: User[] }) => (
//   <div className="flex flex-col items-center gap-4 p-4 text-center text-white bg-gray-900 min-h-screen">
//     <div className="space-y-1">
//       <h1 className="text-2xl font-bold">
//         Realtime Chat Application{" "}
//         <span role="img" aria-label="emoji">
//           💬
//         </span>
//       </h1>
//       <h2 className="text-lg">
//         Created with React, Express, Node and Socket.IO{" "}
//         <span role="img" aria-label="emoji">
//           ❤️
//         </span>
//       </h2>
//       <h2 className="text-base">
//         Try it out right now!{" "}
//         <span role="img" aria-label="emoji">
//           ⬅️
//         </span>
//       </h2>
//     </div>

//     {users && users.length > 0 && (
//       <div className="w-full max-w-md">
//         <h1 className="text-xl font-semibold mb-3">
//           People currently chatting:
//         </h1>
//         <div className="flex flex-col items-start gap-2 bg-gray-800 p-3 rounded-lg shadow-lg">
//           {users.map(({ name }) => (
//             <div
//               key={name}
//               className="flex items-center gap-2 text-white text-base"
//             >
//               <Image alt="Online Icon" src={onlineIcon} width={8} height={8} />
//               {name}
//             </div>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );

// export default TextContainer;
import onlineIcon from "@/app/icons/onlineIcon.png";
import Image from "next/image";

interface User {
  name: string;
}

const TextContainer = ({ users }: { users: User[] }) => (
  <div className="flex flex-col items-center gap-3 p-3 text-center text-white bg-gray-800 min-h-[400px] rounded-[20px]">
    <div className="space-y-0.5">
      <h1 className="text-xl font-bold">
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2 className="text-base">
        Created with React, Express, Node, and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2 className="text-sm">
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>

    {users && users.length > 0 && (
      <div className="w-full max-w-md">
        <h1 className="text-lg font-semibold mb-2">
          People currently chatting:
        </h1>
        <div className="flex flex-col items-start gap-1 bg-gray-800 p-2 rounded-lg shadow-lg">
          {users.map(({ name }) => (
            <div
              key={name}
              className="flex items-center gap-1 text-white text-sm"
            >
              <Image alt="Online Icon" src={onlineIcon} width={8} height={8} />
              {name}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;
