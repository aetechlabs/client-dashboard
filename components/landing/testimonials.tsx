import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Maya L.",
    role: "Agency Owner",
    quote:
      "Setup took minutes and our team finally has a single place for client context.",
  },
  {
    name: "Chris P.",
    role: "Project Manager",
    quote:
      "The clarity on project status and owners reduced handoff time by 40%.",
  },
  {
    name: "Ari D.",
    role: "Operations",
    quote: "Simple, clean, and just the right features—no bloat.",
  },
];

function Stars() {
  return (
    <div className="flex text-yellow-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-yellow-300/90 text-yellow-300" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="w-full">
      <h2 id="testimonials-heading" className="sr-only">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:shadow-md hover:bg-white/10"
          >
            <Stars />
            <blockquote className="mt-3 text-white/90">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              <span className="font-medium text-white">{t.name}</span> · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
