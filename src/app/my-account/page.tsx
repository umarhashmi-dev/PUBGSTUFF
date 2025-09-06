
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import { ShoppingCart, Download, User, ArrowRight } from "lucide-react";

const dashboardCards = [
    {
        title: "Orders",
        description: "Check your order history and status.",
        href: "/my-account/orders",
        icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    },
    {
        title: "Downloads",
        description: "Access your purchased digital products.",
        href: "/my-account/downloads",
        icon: <Download className="h-6 w-6 text-primary" />,
    },
    {
        title: "Account Details",
        description: "Update your personal information.",
        href: "/my-account/account-details",
        icon: <User className="h-6 w-6 text-primary" />,
    }
]

export default function MyAccountPage() {
  const { user } = useAuth();

  return (
    <div>
        <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                Dashboard
            </h1>
            <p className="mt-2 text-muted-foreground">
                Welcome back, {user?.user_metadata.full_name || user?.email}! Here's an overview of your account.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardCards.map((card) => (
                <Link href={card.href} key={card.title} className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="font-headline">{card.title}</CardTitle>
                                {card.icon}
                            </div>
                            <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                                View {card.title}
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
  );
}
