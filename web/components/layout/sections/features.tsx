import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "SlidersHorizontal",
    title: "Customizable Filters",
    description:
      "Set your own topics and interests. DetoxiTube filters your YouTube feed based on your personal preferences.",
  },
  {
    icon: "ShieldCheck",
    title: "Privacy Focused",
    description:
      "DetoxiTube respects your privacy. Your preferences are stored locally, ensuring your data stays with you.",
  },
  {
    icon: "Layers",
    title: "Seamless Integration",
    description:
      "Easily integrates into your existing YouTube experience. No complicated setup required.",
  },
  {
    icon: "EyeOff",
    title: "Blur Unrelated Content",
    description:
      "Automatically blurs out videos and content that do not match your specified topics, keeping distractions at bay.",
  },
  {
    icon: "Bell",
    title: "Real-Time Updates",
    description:
      "Stay updated with real-time filtering. DetoxiTube continuously monitors and updates your feed based on your chosen topics.",
  },
  {
    icon: "RefreshCcw",
    title: "Quick and Efficient",
    description:
      "Lightweight and fast. DetoxiTube doesn’t slow down your browsing experience, ensuring smooth and efficient operation.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
