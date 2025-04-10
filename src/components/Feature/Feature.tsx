import { Button } from "@/components/ui/button";
import { Zap, BotMessageSquare } from "lucide-react";

interface Featuring {
  icon?: React.ReactNode;
  heading: string;
  description: string;
  button: {
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const data: Featuring = {
  icon: <BotMessageSquare className="size-6" />,
  heading: "Meet Our AI Shopping Assistant",
  description:
    "Our AI shopping assistant helps customers find exactly what they need using natural language queries. Instead of navigating complex menus or scrolling through endless products, customers simply ask for what they want—just like they would in a physical store with a helpful sales associate.",
  button: {
    text: "Discover Our Solution",
    icon: <Zap className="ml-2 size-4" />,
    url: "/",
  },
  trustText: "Trusted by 25.000+ Businesses Worldwide",
  imageSrc: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  imageAlt: "placeholder",
};

const Feature = () => {
  return (
    <section className="overflow-hidden py-16">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5 p-8">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
              {data.icon}
            </span>
            <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-medium text-balance md:text-6xl">
              {data.heading}
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
              {data.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
              <Button size="lg" asChild>
                <a href={data.button.url}>
                  {data.button.text} {data.button.icon}
                </a>
              </Button>
              {data.trustText && (
                <div className="text-xs text-muted-foreground">
                  {data.trustText}
                </div>
              )}
            </div>
          </div>
          <img
            src={data.imageSrc}
            alt={data.imageAlt}
            className="mx-auto h-full max-h-[524px] w-full max-w-screen-lg rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
