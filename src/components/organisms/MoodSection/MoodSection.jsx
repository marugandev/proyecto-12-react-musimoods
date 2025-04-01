import "./MoodSection.css";

import StepBar from "../../atoms/StepBar/StepBar";
import { moods } from "../../../data/moods";
import MoodCard from "../../molecules/MoodCard/MoodCard";

const MoodSection = () => {
  return (
    <>
      <StepBar>
        Elige tu mood → Disfruta → <strong>musimoOds</strong> → Elige tu mood →
        Disfruta → <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong>
      </StepBar>
      <section className="mood-section page-enter-animation">
        {moods?.map((mood) => (
          <MoodCard key={mood.id} mood={mood}></MoodCard>
        ))}
      </section>
    </>
  );
};

export default MoodSection;
