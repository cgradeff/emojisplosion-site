/** @jsxImportSource @emotion/react */
import * as styles from "./styles";

export function Anchor({ children, ...rest }) {
    return (
        <a {...rest} css={styles.anchor} target="_blank">{children}</a>
    )
}
