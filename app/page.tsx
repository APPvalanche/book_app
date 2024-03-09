import Container from "@/components/container";
import Books from "./components/BookList";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Books />
    </Container>
  );
}
