import Container from "@/components/container";
import BookList from "./components/BookList";
import Hero from "./components/Hero";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <Container>
      <Hero />
      <BookList />
      <Banner />
      <BookList />
    </Container>
  );
}
