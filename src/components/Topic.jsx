import { useParams } from "react-router-dom";
import Articles from "./Articles";

function Topic() {
  const { topic } = useParams();

  return (
    <section>
      <Articles subject={topic} />
    </section>
  );
}

export default Topic;
