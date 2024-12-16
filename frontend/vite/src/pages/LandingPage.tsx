import { Button } from "@/components/ui/button";
import img1 from "@/assets/heroimg1.png";
import img2 from "@/assets/heroimg2.png";
import img3 from "@/assets/heroimg3.jpg";
import HeroBG from "@/assets/herobg";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const LandingPage = () => {
  return (
    <section>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <Badge variant={"secondary"}>New Release</Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                Pictora
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Bring your imagination to life with Pictora. Transform your
              creative ideas into stunning images.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild size={"lg"}>
                <Link to="/main">
                  Get started <ChevronRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[3/4]">
            <div className="absolute inset-0 flex items-center justify-center">
              <HeroBG />
            </div>
            <div className="absolute left-[8%] top-[10%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent">
              <img src={img1} alt="" />
            </div>
            <div className="absolute right-[12%] top-[20%] flex aspect-square w-1/3 justify-center rounded-lg border border-border bg-accent">
              <img src={img2} alt="" />
            </div>
            <div className="absolute bottom-[24%] right-[24%] flex aspect-[5/6] w-[48%] justify-center rounded-lg border border-border bg-accent">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
