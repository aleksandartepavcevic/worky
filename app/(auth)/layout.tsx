import { Card } from "@/components/ui/card";
import Logo from "@/components/ui/logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto w-full max-w-md p-8 space-y-2 shadow-lg rounded-xl">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;
