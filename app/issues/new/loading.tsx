import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function loading() {
  return (
    <div className="flex flex-col space-y-10">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
