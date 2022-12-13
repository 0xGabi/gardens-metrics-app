import { GU, useViewport, textStyle } from "@1hive/1hive-ui";
import { a } from "@react-spring/web";
import styled from "styled-components";
import { useAppReady } from "~/providers/AppReady";
import { AccountModule } from "~/components/AccountModule";
import { NavSection } from "./NavSection";

export const TopBar = () => {
  const { appReadyTransition } = useAppReady();
  const { below } = useViewport();
  const compactMode = below("large");
  const mobileMode = below("medium");

  return (
    <NavContainer>
      {appReadyTransition(
        ({ progress, topBarTransform }, ready) =>
          ready && (
            <AnimatedContainer
              style={{
                opacity: progress,
                transform: topBarTransform,
              }}
              $compactMode={compactMode}
            >
              {/* <NavSection compact={compactMode} /> */}
              <Title>Gardens-Metrics</Title>

              {/* <AccountModule compact={mobileMode} /> */}
            </AnimatedContainer>
          )
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: relative;
  margin: 0 auto;
  height: ${8 * GU}px;
  background-color: ${(props) => props.theme.background};
  border: 3px solid red;
`;

const AnimatedContainer = styled(a.div)<{ $compactMode: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 1;
  border-bottom: ${({ $compactMode, theme }) =>
    $compactMode ? `1px solid ${theme.border}` : ""};
  ${({ $compactMode }) =>
    $compactMode
      ? `
    padding-right: ${1 * GU}px;
  `
      : `
    padding-right: ${6 * GU}px;
    padding-left: ${6 * GU}px;
  `};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;
