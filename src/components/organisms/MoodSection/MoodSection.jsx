import "./MoodSection.css";

import StepBar from "../../atoms/StepBar/StepBar";
import { moods } from "../../../data/moods";
import MoodCard from "../../molecules/MoodCard/MoodCard";

const MoodSection = () => {
  console.log("Render MoodSection");

  return (
    <>
      <StepBar>
        Elige tu mood → Disfruta → <strong>musimoOds</strong> → Elige tu mood →
        Disfruta → <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> → Elige tu mood → Disfruta →{" "}
        <strong>musimoOds</strong> →
      </StepBar>
      <section className="mood-section page-enter-animation">
        {moods?.map((mood) => (
          <MoodCard mood={mood} key={mood.id}></MoodCard>
        ))}
      </section>
    </>
  );
};

export default MoodSection;
