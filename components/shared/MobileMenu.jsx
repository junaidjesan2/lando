import Link from "next/link";
import { GrFormClose } from "react-icons/gr"

export default function MobileMenuModal({ openModal, setOpenModal }) {
  return <div className="md:hidden grid place-content-end">{openModal && <div className="w-full mx-4 rounded-md shadow-md ">
  <h1 onClick={()=>setOpenModal(false)} className="flex items-center px-2 py-2 rounded-full shadow shadow-gray-400 w-fit"><GrFormClose className="h-4 w-4"/></h1>
  <div className="px-4 py-3 w-full grid grid-cols-1">
    <Link href="/" className="shadow w-full rounded py-1 px-2 my-2">Home</Link>
    <Link href="/pages/pricing" className="shadow w-full rounded py-1 px-2 my-2">Pricing</Link>
    <Link href="/pages/about" className="shadow w-full rounded py-1 px-2 my-2">About Us</Link>
    <Link href="/pages/contact" className="shadow w-full rounded py-1 px-2 my-2">Contact</Link>
  </div>
  </div>}</div>;
}
