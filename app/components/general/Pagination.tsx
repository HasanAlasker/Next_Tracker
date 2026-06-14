"use client";

import Button from "../form/Button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  pageNumber: number;
  pageSize: number;
  itemCount: number;
}
export default function Pagination({ pageNumber, pageSize, itemCount }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const totalPages = Math.ceil(itemCount / pageSize);
  if (totalPages <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="flex items-center space-x-2 self-end">
      <Button
        title={<ChevronsLeft size={17} />}
        disabled={pageNumber === 1}
        onClick={() => changePage(1)}
      />
      <Button
        title={<ChevronLeft size={17} />}
        disabled={pageNumber === 1}
        onClick={() => changePage(pageNumber - 1)}
      />
      <p>
        Page {pageNumber} of {totalPages}
      </p>
      <Button
        title={<ChevronRight size={17} />}
        disabled={pageNumber === totalPages}
        onClick={() => changePage(pageNumber + 1)}
      />
      <Button
        title={<ChevronsRight size={17} />}
        disabled={pageNumber === totalPages}
        onClick={() => changePage(totalPages)}
      />
    </div>
  );
}
