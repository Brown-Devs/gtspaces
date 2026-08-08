import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Target, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section className="section-y bg-white">
      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <AnimatedSection direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-premium">
              <Image
                src="https://images.pexels.com/photos/8293744/pexels-photo-8293744.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="GT Spaces real estate consultant with clients"
                width={640}
                height={760}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden rounded-2xl bg-ink-900 p-6 text-white shadow-xl sm:block">
              <p className="font-serif text-3xl font-semibold text-gold-400">Sector 80</p>
              <p className="mt-1 text-xs text-white/70">Skynest Towers, Faridabad</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.1}>
          <span className="eyebrow">About GT Spaces</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            Your Trusted Real Estate Consultant in Faridabad
          </h2>
          <p className="mt-5 leading-relaxed text-ink-600">
            GT Spaces is a real estate consultancy based in Neharpar, Faridabad, helping
            homebuyers and investors find the right property across the NCR belt. We work closely
            with established developers to bring verified, well-documented opportunities to our
            clients, backed by honest guidance rather than sales pressure.
          </p>
          <p className="mt-4 leading-relaxed text-ink-600">
            From the first enquiry to final booking, our team stays with you, because making your
            dreams true starts with getting the details right.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { icon: Target, label: "Location-first Guidance" },
              { icon: Award, label: "Verified Developments" },
              { icon: Users, label: "Client-first Support" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-ink-900/8 p-4">
                <Icon className="text-gold-500" size={22} />
                <p className="mt-2 text-sm font-medium text-ink-800">{label}</p>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-outline-dark mt-9">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
