"use client";

import { ReactNode, useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <div suppressHydrationWarning>{children}</div>;
}
