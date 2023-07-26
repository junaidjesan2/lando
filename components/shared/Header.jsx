"use client";
import Button from "./Button";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileMenuModal from "./MobileMenu";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="mx-auto my-5 px-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-semibold">Lando</h1>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="px-3 py-2 hover:bg-neutral-500 rounded-sm"
            >
              Home
            </Link>
            <Link
              href="/pages/pricing"
              className="px-3 py-2 hover:bg-neutral-500 rounded-sm"
            >
              Pricing
            </Link>
            <Link
              href="/pages/about"
              className="px-3 py-2 hover:bg-neutral-500 rounded-sm"
            >
              About us
            </Link>
            <Link
              href="/pages/contact"
              className="px-3 py-2 hover:bg-neutral-500 rounded-sm"
            >
              Contact
            </Link>
          </div>
        </div>
        <h1
          onClick={() => setOpenModal(true)}
          className="flex md:hidden text-2xl px-3 py-2"
        >
          <CgMenuRightAlt />
        </h1>
        <div className="hidden md:flex items-center gap-3">
          <Button text="log in" outline="outline" link="/account/login" />
          <Button text="Sign up" link="/account/signup" />
        </div>
      </div>
      <MobileMenuModal setOpenModal={setOpenModal} openModal={openModal} />
    </section>
  );
}
