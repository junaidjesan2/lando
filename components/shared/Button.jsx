import Link from 'next/link'

export default function Button({text,link,outline}) {
  return (
    <div>
        {
            outline=="outline"?
            <Link href={`${link}`} className='text-sm md:text-xl px-3 py-2 border-2 hover:bg-amber-500 rounded-md'>{text}</Link>
            :
    <Link href={`${link}`} className='text-sm md:text-xl px-3 py-2 bg-amber-500 rounded-md'>{text}</Link>
        }
    </div>
  )
}
