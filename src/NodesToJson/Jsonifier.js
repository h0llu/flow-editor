import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Jsonifier = ({ outputJson }) => {
    const outputJsonConst = { ...outputJson };
    outputJsonConst.scenarioConfig = {
        "jobName": "Test scenario",
        "description": "Test scenario description",
        "parallelism": 1
    };

    return (
        <>
            <SyntaxHighlighter language="javascript" style={docco}>
                {JSON.stringify(outputJsonConst, null, 2)}
            </SyntaxHighlighter>
        </>
    );
}

export default Jsonifier;