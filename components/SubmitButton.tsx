import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface SubmitProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SubmitButton = ({isLoading,className,children }: SubmitProps) => {
  
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {
      isLoading ? (
        <div className="flex items-center justify-center gap-4 w-full">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={20}
            height={20}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )
      }
    </Button>
  );
};

export default SubmitButton;
