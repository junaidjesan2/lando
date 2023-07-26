import Image from "next/image";
import About from "../../../public/banner/aboutPage.png";
import BannerSignup from "@/components/shared/BannerSignup";

export default function page() {
  return (
    <section className="my-14">
      <div className="md:w-2/4 md:mx-auto mx-3">
        <h1 className="text-3xl font-bold text-center">About us</h1>
        <h1 className="text-lg text-center">
          We offer revolutionary solution to industry problems. Join Lando
          community and experience the benefits of company optimization today!
        </h1>
      </div>
      <div>
        <Image className="w-full md:w-3/5 my-3 h-fit mx-auto" src={About} />
      </div>
      <div className="w-full md:w-2/4 mx-3 md:mx-auto my-24 border-b-2">
        <h1 className="text-3xl font-bold text-center">Our mission</h1>
        <h1 className="text-lg text-center">
          At Lando, we are committed to providing excellent services to our
          customers and clients and to help them achieve the best outcomes. We
          believe that we can make a positive impact on out community, industry
          and the world. Our Lando team is dedicated to providing the best
          possible service and support, and we are always looking for ways to
          improve and innovate.
        </h1>
      </div>
      <div className=" mx-8">
        <h1 className="text-3xl font-bold text-center">Team</h1>
        <h1 className="text-lg text-center">
          Meet the people behind our magicl product
        </h1>
      </div>
      <div>
        <BannerSignup />
      </div>
    </section>
  );
}
