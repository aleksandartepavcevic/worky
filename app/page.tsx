import Navigation from "@/components/landing-page/navigation";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import placeholderImage from "@/public/svg/placeholder.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FolderGit2, ListTodo, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function Index() {
  const features = [
    {
      icon: <FolderGit2 />,
      title: "Project Tracking",
      description:
        "Track the progress of your projects with our visual and intuitive progress bars and charts.",
    },
    {
      icon: <Users />,
      title: "Team Collaboration",
      description:
        "Enhance team collaboration with features like a shared team calendar, comment threads, and file sharing.",
    },
    {
      icon: <ListTodo />,
      title: "Task Management",
      description:
        "Manage tasks effectively with features like task lists, due dates, and priority levels.",
    },
  ];

  return (
    <div className="container relative">
      <Navigation />
      <main
        id="get-started"
        className="relative h-[600px] flex flex-col justify-center items-center gap-4 text-center"
      >
        <Typography className="font-normal">
          The{" "}
          <span className="font-pacifico tracking-wider text-primary">
            Ultimate
          </span>{" "}
          Project Manager
        </Typography>
        <Typography
          variant="h4"
          className="max-w-lg text-accent-foreground font-light"
        >
          Manage your projects efficiently and effectively with our
          state-of-the-art project management tool.
        </Typography>
        <Button>
          <Link href="/register">Get Started</Link>
        </Button>
        <div className="absolute top-3/4 w-2/3 rounded-2xl overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image
              style={{ objectFit: "cover" }}
              src={placeholderImage}
              alt="Project dashboard view"
              fill
            />
          </AspectRatio>
        </div>
      </main>
      <section id="features" className="mt-[45%] scroll-mt-64">
        <div className="flex flex-col items-center gap-10">
          <Badge>Features</Badge>
          <div className="flex flex-col items-center gap-4 text-center">
            <Typography className="font-normal">
              Streamline Your{" "}
              <span className="font-pacifico tracking-wider text-primary">
                Workflow
              </span>
            </Typography>
            <Typography
              variant="h4"
              className="max-w-lg text-accent-foreground font-light"
            >
              Discover how our features can simplify your project management
              process and enhance team collaboration.
            </Typography>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <Typography variant="h4">{feature.title}</Typography>
                  </div>
                </CardHeader>
                <CardContent>
                  <Typography variant="p">{feature.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="careers" className="mt-64 scroll-mt-64">
        <div className="flex flex-col items-center gap-10">
          <Badge>Careers</Badge>
          <div className="flex flex-col items-center gap-4 text-center">
            <Typography className="font-normal">
              Join Our{" "}
              <span className="font-pacifico tracking-wider text-primary">
                Team
              </span>
            </Typography>
            <Typography
              variant="h4"
              className="max-w-lg text-accent-foreground font-light"
            >
              We're always looking for talented individuals to join our team.
              Check out our current job openings.
            </Typography>
          </div>
          <Button>View Openings</Button>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 mt-64 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © Worky Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
