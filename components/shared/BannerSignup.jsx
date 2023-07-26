import React from 'react'
import Button from './Button'
import Image from 'next/image'
import BannerSignUp from "../../public/banner/bannerSignup.svg"

export default function BannerSignup() {
  return (
    <section className="my-7">
        <div className="px-10 py-20 rounded-md md:flex items-center bg-orange-50 text-black">
          <div>
          <h1 className="text-5xl w-full my-3 font-bold">
            Get started with Lando today
          </h1>
          <h1 className="text-base my-6">
            Start optimizing your processes today
          </h1>
          <Button text="Sign up now" outline="outline" link="/account/signup"/>
          </div>
        <div>
            <Image alt='' className='w-full md:w-1/2 h-fit mx-auto' src={BannerSignUp}/>
        </div>
        </div>
      </section>
  )
}
