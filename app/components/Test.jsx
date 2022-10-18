import { Main, GU } from "@1hive/1hive-ui";

const Test = () => {
  return (
    <Main>
      <p
        className="text-3xl"
        css={`
          width: ${10 * GU}px;
          padding: ${4 * GU}px ${2 * GU}px;
          border: 3px solid #f4f4f4;
        `}
      />
      Hello
    </Main>
  );
};

export default Test;
