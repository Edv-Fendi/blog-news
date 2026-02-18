import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qualquer-lugar";
  const postLink = `/posts/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          alt: "Alt da Image",
          src: "/images/bryen_3.png",
          width: 1200,
          height: 720,
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
      />

      <div className="flex flex-col gap-4 sm: justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2026-04-25"
        >
          25/04/2026 11:00
        </time>

        <PostHeading url={postLink} title="Teste" as="h1" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          incidunt unde culpa ad tempora nihil quasi, quo architecto impedit
          mollitia. Possimus quae eligendi repellendus labore cumque nemo, ex
          consectetur nesciunt.
        </p>
      </div>
    </section>
  );
}
