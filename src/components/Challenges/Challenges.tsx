import { Zap } from "lucide-react";

const data = [
  {
    id: 1,
    icon: <Zap className="size-6" />,
    title: "Customer Frustration",
    description:
      "70% of shoppers leave sites when they can't quickly find what they're looking for",
  },
  {
    id: 2,
    icon: <Zap className="size-6" />,
    title: "Lost Sales",
    description:
      "The average store loses 30% of potential sales due to poor product discovery",
  },
  {
    id: 3,
    icon: <Zap className="size-6" />,
    title: "Resource Drain",
    description:
      "Hours spent manually assisting customers with product questions",
  },
];

const Challenges = () => {
  return (
    <section className="p-16">
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base uppercase">
          What Drives Us
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">
          Online Store Challenges
        </h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {data.map((data) => (
            <div key={data.id} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {data.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{data.title}</h3>
              <p className="text-muted-foreground">{data.description}</p>
            </div>
            // <div className="rounded-lg bg-accent p-5">
            //   <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
            //     {data.icon}
            //   </span>
            //   <h3 className="mb-2 text-xl font-medium">{data.title}</h3>
            //   <p className="leading-7 text-muted-foreground">{data.body}</p>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
