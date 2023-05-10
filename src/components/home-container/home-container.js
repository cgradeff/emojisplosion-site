/** @jsxImportSource @emotion/react */

import { Anchor } from "../anchor/anchor";
import * as styles from "./styles";

export function HomeContainer() {
    return (
        <div css={styles.homeContainer}>
            <h1><code>emojisplosion</code></h1>
            <p>💥 Blasts 😄 emoji 😊 like 🎆 fireworks 🎇 all up in your 💻 HTML 📄 page. 😍</p>
            <div css={styles.links}>
                <Anchor href="https://github.com/JoshuaKGoldberg/emojisplosion">GitHub</Anchor>
                <Anchor href="https://github.com/JoshuaKGoldberg/astro-konamimojisplosion">Astro Plugin</Anchor>
                <Anchor href="https://github.com/JoshuaKGoldberg/typedoc-plugin-konamimojisplosion">TypeDoc Plugin</Anchor>
            </div>
        </div>
    )
}