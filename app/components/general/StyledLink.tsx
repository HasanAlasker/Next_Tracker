import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
  icon?: IconName;
}
export default function StyledLink({ text, href, icon }: Props) {
  return (
    <Link href={href}>
      <div className="flex space-x-4 text-pri items-end transition-all hover:underline ">
        {text}
        {icon && <DynamicIcon name={icon} size={20} className="pb-1" />}
      </div>
    </Link>
  );
}
