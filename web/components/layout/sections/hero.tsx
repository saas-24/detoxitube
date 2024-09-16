"use client";
import { LoginButton } from "@/components/auth/login-button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span> Product is still in </span>
            <span className="mx-2 text-primary">
              <Badge>Testing</Badge>
            </span>
            <span>phase.</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Have distraction free Youtube with
              <span className="px-2 bg-gradient-to-r bg-clip-text text-primary">
                DetoxiTube
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`DetoxiTube will detoxify your Youtube and will manage your feed by making it distraction free.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <LoginButton />
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={"/hero-image-dark.png"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
