import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";
import * as styles from '../styles/code.module.css';




const Code = (props) => {
    const className = props.children.props.className || "";
    const code = props.children.props.children.trim();
    const language = className.replace(/language-/, "");
    const file = props.children.props.file;
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipBoard = (str) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(str)
                .then(response => {
                    console.log("Copying to clipboard was successful")
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                    return;
                })
                .catch(error => console.error("could not copy text: " + error));
        } else if (window.clipboardData) {
            window.clipboardData.setData("Text", str);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    }

    return (
        <Highlight
            code={code}
            language={language}
            theme={themes.vs}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    <div className={styles.codeHeadingsContainer}>
                        <div>
                            <div className={styles.language}>{language}</div>
                            {file && <div>{`File: ${file}`}</div>}
                        </div>
                        <div className={styles.btnWrapper}>
                            <button
                                className={styles.btn}
                                onClick={() => copyToClipBoard(code)}
                                aria-label="Copy to clipboard">
                                Copy
                            </button>
                            {isCopied && <div className={styles.copied}>Copied!</div>}
                        </div>
                    </div>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}

export default Code;