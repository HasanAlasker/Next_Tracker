import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingForm() {
  return (
    <div className="flex flex-col space-y-10">
      <Skeleton height={'3rem'}/>
      <Skeleton height={'20rem'}/>
      <Skeleton  height={'3rem'}/>
    </div>
  );
}
