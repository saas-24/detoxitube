import GithubIcon from "@/components/icons/github-icon";
import MailIcon from "@/components/icons/mail-icon";
import XIcon from "@/components/icons/x-icon";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
interface TeamProps {
  firstName: string;
  lastName: string;
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      firstName: "Priyanshu",
      lastName: "Parikh",
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/peacexoom101",
        },
        {
          name: "Mail",
          url: "mailto:parikhpriyanshu7@gmail.com",
        },
        {
          name: "Github",
          url: "https://github.com/Peacexoom",
        },
      ],
    },
    {
      firstName: "Moon",
      lastName: "Patel",
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/moonpatel2003",
        },
        {
          name: "Mail",
          url: "mailto:moonpatel663@gmail.com",
        },
        {
          name: "Github",
          url: "https://github.com/moonpatel",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "Mail":
        return <MailIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {teamList.map(({ firstName, lastName, socialNetworks }, index) => (
          <Card
            key={index}
            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
          >
            <CardHeader className="p-0 gap-0">
              <CardTitle className="py-6 pb-4 px-6">
                {firstName}
                <span className="text-primary ml-2">{lastName}</span>
              </CardTitle>
            </CardHeader>
            <CardFooter className="space-x-4 mt-auto">
              {socialNetworks.map(({ name, url }, index) => (
                <Link
                  key={index}
                  href={url}
                  target="_blank"
                  className="hover:opacity-80 transition-all"
                >
                  {socialIcon(name)}
                </Link>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
