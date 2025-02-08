import HeroGeometric from "@/components/hero-geometric"
import { Navigation } from "@/components/navigation"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { About } from "@/components/about"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <Navigation />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <HeroGeometric badge="GENERATIVE AI DEVELOPER" title1="Let's create dance" title2="floor magic" />
        </div>
        <div className="col-span-1 mt-14">
          <About />
          <Services />
          <Contact />
        </div>
      </div>
    </main>
  )
}

