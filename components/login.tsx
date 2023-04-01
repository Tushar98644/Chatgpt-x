import { initFirebase } from "@/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
// import { signIn } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

const Login_Page = () => {
    const app = initFirebase();
    console.log(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
    }

    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (loading) return <div className="text-white text-3xl">loading...</div>
    if (user) router.push("/");

    return (
        <>
            <div className="bg-[#11A37F] h-screen w-screen flex flex-col items-center justify-center">
                <Image 
                    src='https://links.papareact.com/2i6'
                    width={300}
                    height={300}
                    alt=""
                />
                <button onClick={signIn} className="text-white text-3xl font-bold animate-pulse mt-6" >Sign In to use Chat gpt-x</button>
            </div>
        </>
    );
}

export default Login_Page;