"use client";

import React from "react";
import GradientCard from "./components/gradient-card/gradient-card";
import { Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box pt={"5"}>
      <GradientCard />
    </Box>
  );
}
