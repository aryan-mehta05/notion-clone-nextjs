"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { useMutation, useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
};

const DocumentIdPage = ({
  params
}: DocumentIdPageProps) => {
  // const Editor = useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }), []);
  
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content
    });
  };

  if (document === undefined) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>
  }

  return ( 
    <div>
      Document ID
    </div>
  );
}

export default DocumentIdPage;