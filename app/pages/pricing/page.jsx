import Button from "@/components/shared/Button";
import Image from "next/image";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Faq from "../../../public/banner/faq.svg";
import BannerSignup from "@/components/shared/BannerSignup";

export default function page() {
  return (
    <section className="mt-28">
      <div>
        <h1 className="text-3xl font-bold text-center my-4">Pricing</h1>
        <h1 className="text-lg text-center mx-3 md:w-1/3 md:mx-auto">
          Our pricing is not expensive, but it's not cheap either, it' exactly
          what it should be
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10">
        <div className="px-5 min-h-fit py-9 shadow hover:shadow-2xl rounded-md">
          <h1 className="font-semibold">Basic</h1>
          <h1 className="text-4xl font-bold my-4">
            <sup>$</sup>9<sub>/month</sub>
          </h1>
          <h1 className="mt-7 mb-7">For individuals and small teams</h1>
          <Button text="Get starter with basic" outline="outline" />
        </div>
        <div className="px-5 min-h-fit py-9 shadow hover:shadow-2xl rounded-md">
          <div className="flex justify-between">
            <h1 className="font-semibold">Pro</h1>
            <h1 className="px-2 py-1 text-sm bg-orange-300 rounded-lg w-fit">
              Most Popular
            </h1>
          </div>
          <h1 className="text-4xl font-bold my-4">
            <sup>$</sup>19<sub>/month</sub>
          </h1>
          <h1 className="mt-7 mb-7">For startups and growing businesses</h1>
          <Button text="Get starter with Pro" />
        </div>
        <div className="px-5 min-h-fit py-9 shadow hover:shadow-2xl rounded-md">
          <h1 className="font-semibold">Basic</h1>
          <h1 className="text-4xl font-bold my-4">
            <sup>$</sup>99<sub>/month</sub>
          </h1>
          <h1 className="mt-7 mb-7">For organizations with advanced needs</h1>
          <Button text="Get starter with Business" outline="outline" />
        </div>
      </div>
      <div className="my-16">
        <h1 className="text-2xl font-semibold">Compare Features</h1>
        <div className="grid my-5 grid-cols-1 md:grid-cols-3">
          <div>
            <h1 className="text-2xl font-semibold my-6 text-start">Basic</h1>
            <hr />
            <div className="my-10 mx-auto text-2xl">
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Process
                Analysis
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Task
                Management
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Time Tracking
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Performance
                Metrics
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Customizable
                Reports
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Email
                Integration
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-6 text-start">Pro</h1>
            <hr />
            <div className="my-10 mx-auto text-2xl">
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Process
                Analysis
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Task
                Management
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Time Tracking
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Performance
                Metrics
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Customizable
                Reports
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Email
                Integration
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Real-time
                Collaboration
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Automated
                Workflows
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-6 text-start">Business</h1>
            <hr />
            <div className="my-10 mx-auto text-2xl">
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Process
                Analysis
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Task
                Management
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Time Tracking
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Performance
                Metrics
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Customizable
                Reports
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Email
                Integration
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Real-time
                Collaboration
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Automated
                Workflows
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> Analytics
                Dashboard
              </h1>
              <h1 className="flex items-center justify-start my-2 gap-2">
                <BsCheckCircleFill className="text-orange-400" /> SLA Management
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 mt-10">
        <Image alt="" className="w-1/2 md:w-1/3 h-fit mx-auto" src={Faq} />
        <div>
          <section class="text-gray-700">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-20 text-white">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
                  Frequently Asked Question
                </h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  The most common questions about how our business works and
                  what can do for you.
                </p>
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="w-full lg:w-1/2 px-4 py-2">
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How Long is this site live?
                    </summary>

                    <span className="text-white">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                      Can I install/upload anything I want on there?
                    </summary>

                    <span className="text-white">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How can I migrate to another site?
                    </summary>

                    <span className="text-white">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                </div>
                <div class="w-full lg:w-1/2 px-4 py-2">
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Can I change the domain you give me?
                    </summary>

                    <span class="px-4 py-2 text-white">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How many sites I can create at once?
                    </summary>

                    <span class="px-4 py-2 text-white">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      How can I communicate with you?
                    </summary>

                    <span class="px-4 py-2 text-white">
                      Laboris qui labore cillum culpa in sunt quis sint veniam.
                      Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                      minim velit nostrud pariatur culpa magna in aute.
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <dir>
        <BannerSignup />
      </dir>
    </section>
  );
}
