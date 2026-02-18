import { postRepository } from "@/src/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDate, formatRelativeDate } from "@/src/utils/format-date";

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/posts/${post.slug}`;
        return (
          <div key={post.id} className="flex flex-col gap-4 group">
            <PostCoverImage
              imageProps={{
                alt: "Alt da Image",
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                priority: true,
              }}
              linkProps={{
                href: postLink,
              }}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 block text-sm/tight"
                dateTime={formatDate(post.createdAt)}
                title={formatRelativeDate(post.createdAt)}
              >
                {formatDate(post.createdAt)} -{" "}
                {formatRelativeDate(post.createdAt)}
              </time>

              <PostHeading url={postLink} title={post.title} as="h2" />

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
