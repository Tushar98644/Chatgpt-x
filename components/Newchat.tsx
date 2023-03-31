import { PlusIcon } from "@heroicons/react/24/outline";

const New_chat = () => {
    return ( 
<div className="flex flex-row justify-center m-3 p-3 items-center rounded-[0.3rem] border border-gray-700 hover:bg-gray-700/70 cursor-pointer text-gray-300 md:p-4 md:m-4">
    <PlusIcon className="h-6 w-6 mr-2"/>
    <p className="mr-0 md:mr-28">New chat</p>
</div>
        );
}
 
export default New_chat;