interface Props {
  title: string;
  quote?: string;
  lightMode?: boolean;
}

const SectionTitle = (props: Props) => {
  return (
    <div className="">
      <div className="mt-4">
        <h2 className={props.lightMode === true ? "text-light" : "text-dark"}>
          <b>
            <u>{props.title}</u>
          </b>
        </h2>
      </div>
      <div className="mt-5">
        <h5
          className={props.lightMode === true ? "text-light" : "text-secondary"}
        >
          {props.quote}
        </h5>
      </div>
    </div>
  );
};

export default SectionTitle;
