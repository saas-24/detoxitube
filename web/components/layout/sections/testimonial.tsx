"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Thompson",
    userName: "Content Creator",
    comment:
      "DetoxiTube has transformed my YouTube experience. Now, I only see videos that are relevant to my interests. It's a game-changer!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Brown",
    userName: "Software Developer",
    comment:
      "I love how DetoxiTube helps me stay focused. It's so much easier to avoid distractions and get the most out of my time.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Olivia Johnson",
    userName: "Digital Marketer",
    comment:
      "With DetoxiTube, I can filter out the noise and focus on the content that matters. It's incredibly efficient!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lucas Smith",
    userName: "Freelance Designer",
    comment:
      "DetoxiTube is a must-have for anyone who spends a lot of time on YouTube. It really helps me manage my time better.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Martinez",
    userName: "Student",
    comment:
      "Thanks to DetoxiTube, I can now focus on educational content without getting distracted by unrelated videos. Highly recommended!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Wilson",
    userName: "Entrepreneur",
    comment:
      "DetoxiTube is perfect for professionals who need to stay focused. It filters out distractions and helps me stay productive.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What People Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
