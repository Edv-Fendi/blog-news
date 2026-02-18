import { PostsList } from "../components/PostsList";
import { Suspense } from "react";
import { SpinLoader } from "../components/SpinLoader";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { PostFeatured } from "../components/PostFeatured";

export default async function Home() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
