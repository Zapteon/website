"use client"
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

type ButtonSize = "2xl" | "default" | "sm" | "lg" | "xl" | "icon" | null | undefined;
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;

interface ButtonProps {
  text: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
}

export default function HeroButton({ text, href, variant, className }: ButtonProps) {
  const [buttonSize, setButtonSize] = useState<ButtonSize>('2xl');

  useEffect(() => {
    const calculateButtonSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setButtonSize('xl');
      } else {
        setButtonSize('2xl');
      }
    };

    calculateButtonSize();
    window.addEventListener('resize', calculateButtonSize);

    return () => {
      window.removeEventListener('resize', calculateButtonSize);
    };
  }, []);

  return (
    <Link
      href={href}
      className={cn(className, buttonVariants({ variant, size: buttonSize }))}
    >
      {text}
    </Link>
  );
}
