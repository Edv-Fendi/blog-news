import { PostsList } from "../components/PostsList";
import { Suspense } from "react";
import { SpinLoader } from "../components/SpinLoader";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { PostHeading } from "../components/PostHeading";
import { PostCoverImage } from "../components/PostCoverImage";

export default async function Home() {
  return (
    <Container>
      <Header />

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
            href: '/qualquer-lugar'
          }}
        />

        <div className="flex flex-col gap-4 sm: justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2026-04-25"
          >
            25/04/2026 11:00
          </time>

          <PostHeading url="#" title="Teste" as="h1" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            incidunt unde culpa ad tempora nihil quasi, quo architecto impedit
            mollitia. Possimus quae eligendi repellendus labore cumque nemo, ex
            consectetur nesciunt.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
