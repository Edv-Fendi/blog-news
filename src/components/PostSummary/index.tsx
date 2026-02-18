import { formatDate, formatRelativeDate } from "@/src/utils/format-date";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postHeading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  excerpt,
  title,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 block text-sm/tight"
        dateTime={formatDate(createdAt)}
        title={formatRelativeDate(createdAt)}
      >
        {formatDate(createdAt)} - {formatRelativeDate(createdAt)}
      </time>

      <PostHeading url={postLink} title={title} as={postHeading} />

      <p>{excerpt}</p>
    </div>
  );
}
