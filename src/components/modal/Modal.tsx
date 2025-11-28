import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function RequirementsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" apply-btn">Learn More</button>
      </DialogTrigger>

      <DialogContent className="w-full   bg-neutral-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center mb-4">
            <span className="text-blue-500 font-bold">HydroFinance</span>–
            Universal Hiring Requirements
          </DialogTitle>
          <DialogDescription className="text-base ">
            These requirements apply to all roles in our early-stage team.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 text-sm mt-4">
          <p>
            •{" "}
            <span className="text-blue-500 font-bold">
              Open to all backgrounds{" "}
            </span>
            — any degree, any stream, any education level.
          </p>
          <p>• Skill matters more than certificates or past titles.</p>
          <p>
            • <span className="text-blue-500 font-bold">Flexible hours</span> —
            contribute whenever you can.
          </p>
          <p>
            • Must be active daily for at least a few hours to keep the pace
            fast.
          </p>
          <p>
            •{" "}
            <span className="text-blue-500 font-bold">
              Strong startup mindset
            </span>{" "}
            — independent, proactive, and comfortable with chaos.
          </p>
          <p>
            • <span className="text-blue-500 font-bold">Fast learner</span> —
            willing to experiment and iterate quickly.
          </p>
          <p>
            •{" "}
            <span className="text-blue-500 font-bold">Good communication </span>
            — async-friendly, transparent, and collaborative.
          </p>
          <p>
            • Compensation is{" "}
            <span className="text-blue-500 font-bold">equity-based </span>
            (percentage ownership), not salary.
          </p>
          <p>
            • Curiosity for crypto, blockchain, security, or AI (no expertise
            required).
          </p>
          <p>
            •{" "}
            <span className="text-blue-500 font-bold">Ownership attitude </span>{" "}
            — treat the product like it’s yours.
          </p>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-neutral-500 rounded-md">
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
