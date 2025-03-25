import "./MoodSection.css";
import React from "react";

import StepBar from "../../atoms/StepBar/StepBar";
import MoodCard from "../../molecules/MoodCard/MoodCard";
import { moods } from "../../../data/moods";

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
