import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PiVideoFill } from "react-icons/pi";

const WatchVideoSection = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="flex items-center gap-2 text-sm font-medium hover:underline">
          <PiVideoFill size={18} />
          Watch Demo
        </DialogTrigger>

        <DialogContent check={"video"} className=" w-[95vw] md:w-[60vw]  !max-w-none bg-transparent  outline-none border-none p-0 shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Watch Product Demo</DialogTitle>
          </DialogHeader>

          <div className="w-full rounded-xl overflow-hidden">
            <video
              src="./video/video2.mp4"
              autoPlay
              muted
              controls
              className="w-full h-auto object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WatchVideoSection;
