import Image from 'next/image'
import Construction from "../../../public/banner/construction.svg"

export default function page() {
  return (
    <div>
        <Image alt='' className='w-1/2 mx-auto h-fit' src={Construction}/>
    </div>
  )
}
