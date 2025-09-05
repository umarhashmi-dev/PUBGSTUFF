
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Logo } from "@/components/logo";
import Header from "@/components/landing/header";
import { cn } from "@/lib/utils";
import SignupFormDemo from "@/components/signup-form-demo";

export default function SignupPage() {

  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
        <SignupFormDemo />
      </div>
    </>
  );
}
