
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from '@/hooks/use-currency';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CartAuthFormProps {
    total: number;
}

export function CartAuthForm({ total }: CartAuthFormProps) {
    const { formatPrice } = useCurrency();
    const { toast } = useToast();
    
    // Login State
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    // Signup State
    const [signupFullName, setSignupFullName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupLoading, setSignupLoading] = useState(false);
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: loginEmail,
            password: loginPassword,
        });
        setLoginLoading(false);
        if (error) {
            toast({ title: "Login Error", description: error.message, variant: "destructive" });
        } else {
            toast({ title: "Login Successful!", description: "You are now logged in." });
        }
    };

    const handleSignupAndCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setSignupLoading(true);
        const { error } = await supabase.auth.signUp({
            email: signupEmail,
            password: signupPassword,
            options: {
                data: {
                    full_name: signupFullName,
                },
            },
        });
        setSignupLoading(false);
        if (error) {
            toast({ title: "Signup Error", description: error.message, variant: "destructive" });
        } else {
            toast({ title: "Account Created!", description: "You are now logged in and can proceed." });
            // The onAuthStateChange listener in AuthProvider will handle the UI update
        }
    };


    return (
        <div>
            <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
            </div>
            <Separator className="my-4" />
            <Tabs defaultValue="signup" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Create Account</TabsTrigger>
                    <TabsTrigger value="login">Log In</TabsTrigger>
                </TabsList>
                
                {/* Signup Form */}
                <TabsContent value="signup">
                    <form onSubmit={handleSignupAndCheckout} className="space-y-4 mt-4">
                        <div>
                            <Label htmlFor="signup-fullname">Full Name</Label>
                            <Input id="signup-fullname" type="text" value={signupFullName} onChange={(e) => setSignupFullName(e.target.value)} required />
                        </div>
                        <div>
                            <Label htmlFor="signup-email">Email</Label>
                            <Input id="signup-email" type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
                        </div>
                        <div>
                            <Label htmlFor="signup-password">Password</Label>
                            <Input id="signup-password" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800 text-base" disabled={signupLoading}>
                            {signupLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Continue to checkout
                        </Button>
                    </form>
                </TabsContent>

                {/* Login Form */}
                <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4 mt-4">
                        <div>
                            <Label htmlFor="login-email">Email</Label>
                            <Input id="login-email" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                        </div>
                        <div>
                            <Label htmlFor="login-password">Password</Label>
                            <Input id="login-password" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800 text-base" disabled={loginLoading}>
                            {loginLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Log In & Continue
                        </Button>
                        <p className="text-xs text-center text-gray-500">
                            Don't have an account? Go to the <Link href="/signup" className="underline hover:text-primary">Sign Up page</Link>.
                        </p>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    );
}
