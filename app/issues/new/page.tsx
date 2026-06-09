"use client";

import dynamic from "next/dynamic";
import LoadingForm from "./loading";

const IssuesForm = dynamic(() => import("@/app/components/form/IssueForm"), {
  ssr: false,
  loading: () => <LoadingForm />,
});

export default function IssuesPage() {
  return <IssuesForm />;
}
