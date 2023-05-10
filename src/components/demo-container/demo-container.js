/** @jsxImportSource @emotion/react */
import { SideBar } from "../side-bar/side-bar";
import { ExplosionContainer } from "../explosion-container/explosion-container";

import * as styles from "./styles";

export function DemoContainer() {
    return (
        <div css={styles.demoContainer}>
            <ExplosionContainer></ExplosionContainer>
            <SideBar></SideBar>
        </div>
    )
}
