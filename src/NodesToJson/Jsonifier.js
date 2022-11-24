import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Jsonifier = ({ outputJson }) => {

    return (
        <>
            <SyntaxHighlighter language="javascript" style={docco}>
                {JSON.stringify(outputJson, null, 2)}
            </SyntaxHighlighter>
        </>
    );
}

export default Jsonifier;