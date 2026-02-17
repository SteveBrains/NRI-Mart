"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4 font-poppins">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 text-primary animate-pulse">
                <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">404 - Page Not Found</h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
                We couldn't find the page you're looking for. It might have moved or doesn't exist anymore.
            </p>
            <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                    Return to Home
                </Button>
            </Link>
        </div>
    );
}
