import Image from "next/image"
import AboutUs from "../../assets/aboutus.png"
import Trip from "../../assets/droptrip.png"
import { SocialCard } from "@/components/Card/SocialCard/SocialCard"
import { Code, Github, Instagram, Linkedin } from "lucide-react"

export default function About() {
 return (
  <div>
    <div className="flex items-center justify-center mt-10">
    <h1 className="text-title text-3xl font-alt underline decoration-primary">
     About Us
    </h1>
    </div>

    <div className="flex min-h-screen py-10 md:flex-row flex-rol items-center justify-center">
     <div>
     <Image src={AboutUs} width="500" height="500" alt="About Image" />
     </div>
     <div className="flex flex-col gap-4">
      <h3 className="font-alt text-title text-2xl underline">
      About Ecommerce
      </h3>
      <span className="text-title font-alt">
        In March 2023, Rafael Canedo need devolpment any project for study.<br />
        After do a test for Ganja company, he's have an ideia for your development study.<br />
        Create an ecommerce with tecnologys what he used in project test.
      </span>
     </div>
    </div>

    <div className="flex min-h-screen py-10 md:flex-row flex-col items-center justify-center">
    <div className="flex flex-col gap-4">
     <h3 className="font-alt text-title text-2xl underline">
      Your Product
     </h3>
     <span className="text-title font-alt">
      Your product most better an important thing for us Ecommerce. So, we<br />
      create a all system thinking in how to protect your product and it has a<br />
      fatest trip in the world.
     </span>
    </div>
    <div>
     <Image src={Trip} width="500" height="500" alt="Delivery Image" />
    </div>
    </div>

    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
    <div className="w-full grid grid-cols-4 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
     <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
      <SocialCard
       icon={Instagram}
       text="Instagram"
       href="https://www.instagram.com/canedodev/"
      />
     </div>
     
     <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
      <SocialCard
       icon={Linkedin}
       text="Linkedin"
       href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
      />
     </div>

     <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
      <SocialCard
       icon={Github}
       text="Github"
       href="https://github.com/rafabcanedo"
      />
     </div>

     <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
      <SocialCard
       icon={Code}
       text="Our Blog"
       href="https://canedo.dev"
      />
     </div>
    </div>
    </div>

  </div>
 )
}