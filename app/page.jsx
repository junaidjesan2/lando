import Image from "next/image";
import Link from "next/link";

import Google from "../public/brandLogo/google.png";
import Facebook from "../public/brandLogo/facebook.png";
import Twitter from "../public/brandLogo/twitter.png";
import Snapchat from "../public/brandLogo/snapchat.png";
import Microsoft from "../public/brandLogo/windows.png";
import SafeWork from "../public/banner/safeWork.jpg";
import CostSaving from "../public/banner/costSaving.jpg";

import { FaStar } from "react-icons/fa";
import Button from "@/components/shared/Button";
import BannerSignup from "@/components/shared/BannerSignup";

export default function Home() {
  return (
    <section>
      <section className="my-10 md:my-28 px-3">
        <div className="md:w-1/2 my-16">
          <h1 className="text-xs text-slate-300">-FREE 30 DAYS TRIAL</h1>
          <h1 className="text-5xl my-4">
            The best way to showcase your project
          </h1>
          <h1 className="text-sm text-slate-300">
            Here you can put a short description about your project
          </h1>
        </div>
        <div className="flex gap-5">
          <Button text="Try for free" link="#"/>
          <Button text="see how it works" link="#" outline="outline"/>
        </div>
      </section>
      <section className="my-10">
        <div>
          <h1 className="w-2/3 md:w-1/4 mx-auto text-center my-3">
            Trusted by individuals and teams at the world's best companies
          </h1>
        </div>
        <div className="flex items-center justify-center gap-7 md:gap-16 my-12">
          <Image src={Google} className="md:h-16 md:w-16 h-8 w-8" />
          <Image src={Facebook} className="md:h-16 md:w-16 h-8 w-8" />
          <Image src={Microsoft} className="md:h-16 md:w-16 h-8 w-8" />
          <Image src={Snapchat} className="md:h-16 md:w-16 h-8 w-8" />
          <Image src={Twitter} className="md:h-16 md:w-16 h-8 w-8" />
        </div>
      </section>
      <section className="mx-3 my-32">
        <div className="bg-orange-50 text-black shadow-md rounded-lg px-12 py-10 shadow-slate-700">
          <div className="my-6">
            <h1 className="text-3xl font-semibold w-1/2 md:w-1/3 text-start">
              Introducing good solution
            </h1>
            <h1 className="text-xl w-3/4 md:w-1/3 text-start">
              Join our community and experience te benefits today
            </h1>
          </div>
          <Button text="Try for free" outline="outline" link="#"/>
        </div>
      </section>
      <section className="mx-3 my-52 md:flex md:gap-10 lg:gap-20">
        <div className="w-full md:w-1/2">
          <Image src={SafeWork} className="rounded-md" />
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-slate-500">SMART SAVE</h1>
            <h1 className="text-3xl font-semibold text-start my-6">
              All your work is safe with us
            </h1>
            <h1 className="text-xl text-start my-5">
              We take your data security seriously, which is why we use advanced
              encryption protocols to protect your files in the cloud. Your data
              is safe and secure with us
            </h1>
          </div>
          <Button text="Try now" outline="outline" link="#"/>
        </div>
      </section>
      <section className="mx-3 my-52 md:flex md:flex-row-reverse md:gap-10 lg:gap-20">
        <div className="w-full md:w-1/2">
          <Image src={CostSaving} className="rounded-md" />
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-slate-500">COST SAVER</h1>
            <h1 className="text-3xl font-semibold text-start my-6">
              Cost saving in a smart way
            </h1>
            <h1 className="text-xl text-start my-5">
              Powerful tool that helps you reduce costs and save money on your
              business operations. With advanced analytics and optimization
              algorithms, Costsaver analyzes your existing workflows and
              identifies areas for improvement.
            </h1>
          </div>
          <Button text="Try now" outline="outline" link="#"/>
        </div>
      </section>
      <section className="md:h-screen my-6 text-black">
        <div className=" md:flex items-end drop-shadow-xl my-20 bg-orange-50 px-10 py-8">
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl font-bold my-7">
              How to join our community
            </h1>
            <h1 className="text-xl my-3">
              Just 3 simple steps to optimize your company operations
            </h1>
            <Button text="Sign up now" outline="outline" link="/account/signup" />
          </div>
          <div className="w-full md:w-1/3">
            <div className="my-5">
              <h1 className="text-3xl font-bold my-3">Step 1</h1>
              <h1 className="text-xl my-4">
                Reach out to one of your specialists and have short introduction
                session.
              </h1>
              <hr className="h-2 border2" />
            </div>
            <div className="my-5">
              <h1 className="text-3xl font-bold my-3">Step 2</h1>
              <h1 className="text-xl my-4">
                Reach out to one of your specialists and have short introduction
                session.
              </h1>
              <hr className="h-2 border2" />
            </div>
            <div className="my-5">
              <h1 className="text-3xl font-bold my-3">Step 3</h1>
              <h1 className="text-xl my-4">
                Reach out to one of your specialists and have short introduction
                session.
              </h1>
              <hr className="h-2 border2" />
            </div>
          </div>
        </div>
      </section>
      <section className="md:my-60 my-32 text-black">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <h1 className="text-md">
            People love what we do and we want to let you know
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-10">
          <div className=" w-full mx-auto px-5 py-8 rounded-md drop-shadow-lg bg-slate-100">
            <h1>"Since implementing Lando our business has seen significant</h1>
            <div className="flex items-center justify-center my-3">
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
            </div>
            <h1 className="text-base text-center">Jack Sibire</h1>
            <h1 className="text-base text-slate-500 text-center">
              Lead Manager, Growfo
            </h1>
          </div>
          <div className=" w-full mx-auto px-5 py-8 rounded-md drop-shadow-lg bg-slate-100">
            <h1>"Since implementing Lando our business has seen significant</h1>
            <div className="flex items-center justify-center my-3">
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
            </div>
            <h1 className="text-base text-center">Jack Sibire</h1>
            <h1 className="text-base text-slate-500 text-center">
              Lead Manager, Growfo
            </h1>
          </div>
          <div className=" w-full mx-auto px-5 py-8 rounded-md drop-shadow-lg bg-slate-100">
            <h1>"Since implementing Lando our business has seen significant</h1>
            <div className="flex items-center justify-center my-3">
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
            </div>
            <h1 className="text-base text-center">Jack Sibire</h1>
            <h1 className="text-base text-slate-500 text-center">
              Lead Manager, Growfo
            </h1>
          </div>
        </div>
      </section>
      <div>
        <BannerSignup/>
      </div>
    </section>
  );
}
