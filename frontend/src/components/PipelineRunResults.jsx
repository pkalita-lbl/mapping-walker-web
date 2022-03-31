import { API_URL } from "../config"
import Markdown from "./Markdown"

function PipelineRunResults({ result }) {
    if (!result) {
        return null
    }

    // infer it based on the first PNG path. should this come from the service?
    const markdownPath = '/' + result.pngs[0].split('/', 2).join('/') + '/output.md'

    return (
        <>
            {result.pngs.map(png => (
                <img key={png} src={`${API_URL}/${png}`} />
            ))}

            <hr />

            <Markdown path={markdownPath} />
        </>
    )
}

export default PipelineRunResults
