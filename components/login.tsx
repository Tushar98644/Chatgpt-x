import { initFirebase } from "@/firebaseApp";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useRouter } from "next/router";
// import { signIn } from "next-auth/react";
import {useAuthState} from "react-firebase-hooks/auth";

const Login_Page = () => {
    const app = initFirebase();
    console.log(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signIn =async () => {
        const result = await signInWithPopup(auth ,provider);
        console.log(result.user);
    }

    const [user,loading] = useAuthState(auth);
    const router = useRouter();

    if(loading) return <div className="text-white text-3xl">loading...</div>
    if(user) router.push("/");

    return ( 
        <>
        <div className="text-white text-3xl">plese log in to continue</div>
        <button onClick={signIn} className="text-white text-xl border rounded-[3vw] bg-blue-700 w-24 h-12 mt-12 ml-12" >log in</button>
        </>
     );
}
 
export default Login_Page;