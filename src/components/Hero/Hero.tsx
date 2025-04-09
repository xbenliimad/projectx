import { MoveRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["smart", "fast", "easy"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col justify-start items-start">
            <div className="w-full flex justify-start items-start">
            <div className="container mx-auto">
                <div className="flex gap-8 items-start justify-center flex-col">
                  <div>
                    <Button variant="secondary" size="sm" className="gap-4">
                      Read our launch article <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex gap-4 flex-col">
                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-start font-regular">
                      <span className="text-spektr-cyan-50">
                      Product discovery made 
                      </span>
                      <span className="relative flex w-full overflow-hidden text-start md:pb-4 md:pt-4">
                        &nbsp;
                        {titles.map((title, index) => (
                          <motion.span
                            key={index}
                            className="absolute font-semibold ml-2"
                            initial={{ opacity: 0, y: "-100" }}
                            transition={{ type: "spring", stiffness: 50 }}
                            animate={
                              titleNumber === index
                                ? {
                                    y: 0,
                                    opacity: 1,
                                  }
                                : {
                                    y: titleNumber > index ? -150 : 150,
                                    opacity: 0,
                                  }
                            }
                          >
                            {title}
                          </motion.span>
                        ))}
                      </span>
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-start">
                    Empower your store with AI that understands your customers.
                    Our prompt-based search connects directly to your product database, delivering tailored results in real time — Let your customers write what they’re looking for, and we’ll list it.
                    </p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <Button size="lg" className="gap-4" variant="outline">
                    Contact us <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="lg" className="gap-4">
                      Sign up here <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square"></div>
            <div className="bg-muted rounded-md row-span-2"></div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
