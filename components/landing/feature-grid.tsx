import { Users, FolderKanban, ShieldCheck } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:shadow-md hover:bg-white/10">
      <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-white">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  );
}

export function FeatureGrid() {
  const features = [
    {
      title: "Clients",
      description: "Keep an address book of clients and quick contact details.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Projects",
      description: "Track project status, owners, and deadlines in one place.",
      icon: <FolderKanban className="size-5" />,
    },
    {
      title: "Permissions",
      description: "Invite teammates and manage roles with confidence.",
      icon: <ShieldCheck className="size-5" />,
    },
  ];

  return (
    <section className="mt-2 md:mt-4">
      <h2 className="mb-4 text-lg font-semibold text-white/90">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
