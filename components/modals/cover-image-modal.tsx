"use client";

import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { Id } from "@/convex/_generated/dataModel";
import {
  Dialog,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";