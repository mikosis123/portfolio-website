"use client";
import React, { Children } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ProviderProps {
  children: React.ReactNode;
}

// Create the Provider component
const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <div>
      <NextUIProvider>{children}</NextUIProvider>
    </div>
  );
};
export default Provider;
