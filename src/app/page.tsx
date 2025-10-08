import Container from "@/component/container";
import Posts from "@/component/post";

export default function Home() {
  return (
    <Container>
      <div className="pt-5">
        <Posts />
      </div>
    </Container>
  );
}
