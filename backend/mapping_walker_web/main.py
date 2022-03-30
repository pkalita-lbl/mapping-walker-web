import os
import re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from mapping_walker.pipeline.pipeline_config import PipelineConfiguration, EndpointConfiguration, EndpointEnum
from mapping_walker.pipeline.pipeline import Pipeline

from mapping_walker_web.models import PipelineInputs

root = Path(__file__).parent.parent

output = (root / 'output').resolve()
output.mkdir(parents=True, exist_ok=True)

stylesheet = root / 'conf/style.json'

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount('/output', StaticFiles(directory=output), name='output')

@app.post('/pipeline')
def run_pipeline(inputs: PipelineInputs):
    if len(inputs.curies) == 0:
        raise HTTPException(status_code=422, detail='At least one curie value is required')

    working_directory = output / '-'.join(inputs.curies)
    ec = EndpointConfiguration(type=EndpointEnum.OxO)
    conf = PipelineConfiguration(working_directory=working_directory,
                                 stylesheet=stylesheet,
                                 endpoint_configurations=[ec])
    pipeline = Pipeline(configuration=conf)
    result = pipeline.run(inputs.curies)
    result.pngs = [str(Path(png).relative_to(root)) for png in result.pngs]

    return {'result': result}
