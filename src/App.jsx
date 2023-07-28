import { Toaster } from 'react-hot-toast';
import PasswordOptions from "./components/PasswordOptions";
import ClipboardButton from "./components/ClipboardButton";
import GenerateButton from './components/GenerateButton';
import PasswordText from './components/PasswordText';

export default function App() {
  return (
    <main className="w-full h-fit md:w-9/12 xl:w-4/12">
      <h1 className='font-bold text-2xl text-center mb-5'>Password generator</h1>
      <section className='border rounded-lg w-full'>
        <section className="w-full h-[10%] border-b-2 flex justify-between items-center gap-3 p-4">
          <PasswordText />
          <ClipboardButton />
          <Toaster />
        </section>
        <form className="p-4 flex flex-col justify-evenly gap-6 w-full h-fit">
          <PasswordOptions />
          <GenerateButton />
        </form>
      </section>
    </main>
  )
}