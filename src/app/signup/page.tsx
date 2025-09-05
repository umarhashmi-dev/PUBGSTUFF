
"use client";
import Header from "@/components/landing/header";
import SignupFormDemo from "@/components/signup-form-demo";
import { Card } from "@/components/ui/card";

export default function SignupPage() {

  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
        <Card className="max-w-md mx-auto">
          <SignupFormDemo />
        </Card>
      </div>
    </>
  );
}
