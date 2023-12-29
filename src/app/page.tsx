import SigninButton from "../components/SigninButton";
import TypingEffect from "../components/typingEffect";

export default function Home() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" w-128 h-160 space-y-10 p-16 flex flex-col justify-center place-content-around rounded-md shadow-[10px_10px_50px_rgba(8,_112,_184,_0.5)] ">
        <TypingEffect />
        <SigninButton />
      </div>
    </div>
  )
}
