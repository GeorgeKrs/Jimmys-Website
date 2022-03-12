import "./Tournaments.css";

import SectionTitle from "../General/SectionTitle";
import TimelineCard from "../General/TimelineCard";

interface Props {
  viewRef: any;
}

const Tournaments = (props: Props) => {
  return (
    <div ref={props.viewRef} className="tournaments-div p-5">
      <div className="container mt-5 mb-5">
        <SectionTitle title="Διακρίσεις" />
        <div className="timeline d-flex justify-content-center">
          <div className="outer">
            <TimelineCard
              title={"1989"}
              text={"3η Θέση στο Mr Hellas - Βαριά Κατηγορία - Wabba"}
            />
            <TimelineCard
              title={"1990"}
              text={
                "2η Θέση στο Mr Οδύσσεια NABBA, στην κατηγορία επαγγελματιών"
              }
            />
            <TimelineCard
              title={"2015"}
              text={
                "3η Θέση στο Natural Mr Hellas, στην κατηγορία Super Master INBA στα 50+"
              }
            />
            <TimelineCard
              title={"2016"}
              text={
                "2η Θέση στο Natural Mr Hellas, στην κατηγορία Super Master INBA στα 50+ και 3η θέση στο Natural Mr Hellas στα 40+"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
