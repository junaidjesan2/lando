import Image from "next/image";
import BannerContact from '../../../public/banner/contact.svg'

export default function page() {
  return (
    <section className="md:flex items-center gap-8 min-h-screen">
        <div>
            <Image className="w-full md:w-1/2 mx-auto" src={BannerContact}/>
        </div>
      <div>
        <h1 className="text-3xl font-semibold">Contact with us</h1>
        <h1>Explore the future with us. Feel free to get in touch</h1>
      <form action="" className="mt-10">
        <div class="mb-3">
          <label
            for="name"
            class="text-sm text-navy-700 dark:text-white font-bold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="full name"
            class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
          />
        </div>
        <div class="mb-3">
          <label
            for="email"
            class="text-sm text-navy-700 dark:text-white font-bold"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="@horizon.ui"
            class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
          />
        </div>
        <div class="mb-3">
          <label
            for="message"
            class="text-sm text-navy-700 dark:text-white font-bold"
          >
            Mesage
          </label>
          <input
            type="text"
            id="message"
            placeholder="message"
            class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
          />
        </div>
        <button className="rounded-lg hover:bg-orange-500 w-full py-3 mx-auto border-2 ">Send message</button>
      </form>
      </div>
    </section>
  );
}
