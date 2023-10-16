"use client";

import Image from "next/image";
import { useMutation } from "convex/react";
import { ImageIcon, X } from "lucide-react";
import { useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEdgeStore } from "@/lib/edgestore";
import { useCoverImage } from "@/hooks/use-cover-image";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
};

export const Cover = ({
  url,
  preview,
}: CoverImageProps) => {
  const { edgestore } = useEdgeStore();
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);
};