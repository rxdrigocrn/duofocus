import React from "react";
import Header from "@/components/shared/Header";
import Button from "@/components/shared/Button";

const home = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#061131,#091843)]">
      <Header />

      <div className="flex min-h-[calc(100vh-82px)]">
        <section className="w-1/2 flex justify-center items-center" style={{borderRight: '3px solid #1B284E'}}>
            
        </section>

        <section className="w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-10">
            <Button text="Body" icon="/bodyWhite.svg" bgColor="bg-[#FF6B6B]" />

            <Button
              text="Mind"
              icon="/mindWhite.svg"
              bgColor="bg-[#4D96FF]"
              iconSize="w-6 h-6"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
