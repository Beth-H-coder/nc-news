import { useParams } from "react-router-dom";
import { capitaliseString } from "../utils";
import Articles from "./Articles";

function Topic() {
  const { topic } = useParams();

  return (
    <section>
      <h1>{capitaliseString(topic)}</h1>
      <Articles subject={topic} />
    </section>
  );
}

export default Topic;
