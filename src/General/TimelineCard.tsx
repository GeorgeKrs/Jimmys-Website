interface Props {
  title: string;
  text: string;
}

const TimelineCard = (props: Props) => {
  return (
    <div className="timeline-card">
      <div className="info">
        <h3 className="title">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
