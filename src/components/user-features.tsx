import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlignCenter,
  Brain,
  Edit,
  FileText,
  Lightbulb,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const featuresByType = {
  screenwriters: [
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Write and experiment",
      description: "for a free script editor with affordable Premium plans.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Avoid writers blocks",
      description: "with AI-powered suggestions.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Brainstorm with AI",
      description:
        "to develop story beats and test out scene and character concepts.",
    },
  ],
  producers: [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Create scripts",
      description:
        "that look and feel professional without stressing out about the technicalities.",
    },
  ],
  directors: [
    {
      icon: <AlignCenter className="w-6 h-6" />,
      title: "Cut down on tedious tasks",
      description:
        "such as formatting with Built-in automated script formatting.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborate with your team",
      description:
        "get suggestions and feedback from your peers and colleagues.",
    },
  ],
};

export function UserFeatures() {
  return (
    <section className="py-16">
      <div className="container">
        <Tabs defaultValue="screenwriters" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="screenwriters">Screenwriters</TabsTrigger>
              <TabsTrigger value="producers">Producers</TabsTrigger>
              <TabsTrigger value="directors">Directors</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="screenwriters" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuresByType.screenwriters.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-secondary rounded-lg"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="producers" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuresByType.producers.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-secondary rounded-lg"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="directors" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuresByType.directors.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-secondary rounded-lg"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <div className="mt-8 text-center">
            <Button asChild className="btn-primary">
              <Link href="/features">All Features</Link>
            </Button>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
