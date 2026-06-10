import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function loading() {
  return (
    <div>
      <h1 className="mb-5 max-w-xl">
        <Skeleton />
      </h1>
      <div className="flex items-center space-x-4">
        <Skeleton width={"3rem"} />
        <p>
          <Skeleton width={"8rem"} />
        </p>
      </div>
      <div className="border-2 border-zinc-300 rounded-lg p-5 mt-10">
        <Skeleton count={5} />
      </div>
    </div>
  );
}
