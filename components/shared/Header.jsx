import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <section className="mx-auto my-5 px-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-semibold">Lando</h1>
          <div className="hidden md:flex items-center gap-4">
            <h1 className="px-3 py-2 hover:bg-neutral-500 rounded-sm">Pricig</h1>
            <h1 className="px-3 py-2 hover:bg-neutral-500 rounded-sm">Home</h1>
            <h1 className="px-3 py-2 hover:bg-neutral-500 rounded-sm">
              About us
            </h1>
            <h1 className="px-3 py-2 hover:bg-neutral-500 rounded-sm">Contact</h1>
          </div>
        </div>
          <h1 className="flex md:hidden text-2xl px-3 py-2">Dropdown</h1>
        <div className="hidden md:flex items-center gap-3">
          <Button text="log in" outline="outline" link="/account/login"/>
          <Button text="Sign up" link="/account/signup"/>
        </div>
      </div>
    </section>
  );
}
