import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import ProfilePic from "@/public/safdar.jpeg"

export function Services() {
  const services = [
    {
      title: "Syed Safdar Ali Shah",
      image:"@/public/safdar.jpeg",
    },
    {
      title: "Cocktail Hour",
      description: "Set the perfect ambiance",
    },
    {
      title: "Dinner Music",
      description: "Elegant background melodies",
    },
    {
      title: "After Party",
      description: "Keep the dance floor alive",
    },
  ]

  return (
    <section id="weddings" className="grid gap-4 mt-4">
      {services.map((service) => (
        <div
          key={service.title}
          className="group relative rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] transition-colors"
        >
          {service.image ? (
            <Image
              src={ProfilePic}
              alt={service.title}
              width={400}
              height={300}
              className="rounded-2xl mb-4 object-cover"
            />
          ) : null}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-serif text-white/90">{service.title}</h3>
              {service.description && <p className="text-sm text-white/60 mt-1">{service.description}</p>}
            </div>
            <ArrowUpRight className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ))}
    </section>
  )
}

