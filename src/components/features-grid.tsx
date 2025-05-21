import {
  BarChart3,
  DollarSign,
  FileEdit,
  Film,
  Languages,
  List,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <DollarSign className="w-10 h-10 text-primary" />,
    title: "AI Budgeting",
    description:
      "Generate accurate film budgets with AI-powered analysis. VloomAi reviews your script to identify cost drivers, providing data-driven budget projections.",
    link: "/features/ai-film-budgeting",
  },
  {
    icon: <FileEdit className="w-10 h-10 text-primary" />,
    title: "AI Co-Pilot Editor",
    description:
      "Overcome writers block with AI-driven prompts and suggestions, ensuring a seamless writing flow.",
    link: "/features/the-industry-standard-editor",
  },
  {
    icon: <Film className="w-10 h-10 text-primary" />,
    title: "AI Pitch Deck",
    description:
      "Create compelling pitch decks effortlessly with ready-made templates. VloomAi extracts crucial details to suggest casts and visualize your story.",
    link: "/features/pitch-deck",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Analytics",
    description:
      "Instantly identify plot holes and receive thorough script coverage analysis. Perfect your screenplay with targeted insights and scores.",
    link: "/features/ai-script-coverage-reporting",
  },
  {
    icon: <Languages className="w-10 h-10 text-primary" />,
    title: "Multilingual",
    description:
      "Work seamlessly in Spanish, French, Portuguese, or Russian - no language barriers to hold back your projects.",
    link: "/",
  },
  {
    icon: <List className="w-10 h-10 text-primary" />,
    title: "Automated Breakdown",
    description:
      "Streamline pre-production with automatic breakdowns that quickly organize script elements for efficient planning.",
    link: "/features/automatic-script-breakdown",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link href={feature.link} key={feature.title} className="group">
              <div className="bg-secondary p-6 rounded-lg h-full hover:border hover:border-primary transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/login" className="btn-primary inline-block">
            Sign Up For Free
          </Link>
        </div>
      </div>
    </section>
  );
}
