import React from "react";
import Button from "../form/Button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface Props {
  pageNumber: number;
  pageSize: number;
  itemCount: number;
}
export default function Pagination({ pageNumber, pageSize, itemCount }: Props) {
  const totalPages = Math.ceil(itemCount / pageSize);
  if (totalPages <= 1) return null;

  const pageChange = () => {};

  return (
    <div className="flex items-center space-x-2 self-end">
      <Button title={<ChevronsLeft size={17} />} disabled={pageNumber === 1} />
      <Button title={<ChevronLeft size={17} />} disabled={pageNumber === 1} />
      <p>
        Page {pageNumber} of {totalPages}
      </p>
      <Button
        title={<ChevronRight size={17} />}
        disabled={pageNumber === totalPages}
      />
      <Button
        title={<ChevronsRight size={17} />}
        disabled={pageNumber === totalPages}
      />
    </div>
  );
}
