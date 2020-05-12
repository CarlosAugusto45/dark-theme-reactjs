import React, { useContext } from "react";
import Switch from "react-switch";
import { shade } from "polished";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";

export default function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <span>Logo</span>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}
