import Container from "@/components/container";
import BookList from "./components/BookList";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Container>
      <Hero />
      <BookList />
    </Container>
  );
}
