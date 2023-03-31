import { BoltIcon, ExclamationTriangleIcon, SunIcon, } from "@heroicons/react/24/outline";
import {  auth } from "../firebaseApp";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

const Home_page = () => {

    const [user,laoding] = useAuthState(auth);
    const router = useRouter();

    if(laoding) return <div className="text-white text-3xl">loading...</div>
    if(!user) router.push("/about");

    return (
        <div className="h-screen flex flex-col items-center justify-center overflow-scroll">
            <h1 className="text-white text-3xl mb-20 font-bold pt-96 mt-[95vw] sm:pt-0 sm:mt-0 sm:text-5xl md:mt-24 md:pt-24">Chat Gpt</h1>
            <div className="flex flex-col sm:flex-row text-center space-x-4 mb-20">
                <div className="flex flex-col text-white  space-y-4">
                    <div className="flex flex-col justify-center items-center">
                        <SunIcon className="w-8 h-8" />
                        <div className="mt-6">Examples</div>
                    </div>
                    <p className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"Explain something to me"</p>
                    <p className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"What is the difference between a cat a dog?"</p>
                    <p className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"What is the colour of the sun?"</p>
                </div>
                <div className="flex flex-col text-white  space-y-4">
                    <div className="flex flex-col justify-center items-center">
                        <BoltIcon className="w-8 h-8" />
                        <div className="mt-6">Capabilities</div>
                    </div>
                    <div className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"Change the ChatGpt model to use"</div>
                    <div className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"Messages are stored in Firebase's Firestore"</div>
                    <div className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"HostToast notifications when chatgpt is thinking!"</div>
                </div>
                <div className="flex flex-col  text-white space-y-4 ">
                    <div className="flex flex-col justify-center items-center">
                        <ExclamationTriangleIcon className="w-8 h-8" />
                        <div className="mt-6">Limitations</div>
                    </div>
                    <div className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"May occassionaly generate incorrect information"</div>
                    <div className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"May occassionaly produce harmful instcutions or biased content"</div>
                    <div className="mt-2 p-4 bg-gray-700/50 rounded-lg max-w-[300px]">"Limited knowledge of world and events after 2021"</div>
                </div>
            </div>
            <div>
                <button onClick={()=>auth.signOut()}>singout</button>
            </div>
        </div>
        
    );
}

export default Home_page;