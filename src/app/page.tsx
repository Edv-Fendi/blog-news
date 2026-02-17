import { PostsList } from "../components/PostsList";
import { Suspense } from "react";
import { SpinLoader } from "../components/Header/SpinLoader";
import { Container } from "../components/Container";

export default async function Home() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Header</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et id
          consequatur ut eveniet maxime dicta sunt cumque rerum tempore, error
          quae illum eius impedit distinctio perferendis qui veritatis unde.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et id
          consequatur ut eveniet maxime dicta sunt cumque rerum tempore, error
          quae illum eius impedit distinctio perferendis qui veritatis unde.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et id
          consequatur ut eveniet maxime dicta sunt cumque rerum tempore, error
          quae illum eius impedit distinctio perferendis qui veritatis unde.
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
