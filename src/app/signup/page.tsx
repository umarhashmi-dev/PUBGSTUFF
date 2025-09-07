
"use client";
import React from "react";
import Header from "@/components/landing/header";
import { Card } from "@/components/ui/card";
import SignupFormDemo from "@/components/signup-form-demo";

export default function SignupPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 pt-24 sm:pt-12">
        <Card className="w-full max-w-md overflow-hidden">
            <SignupFormDemo />
        </Card>
      </div>
    </>
  );
}
