from lib2to3.pytree import Base
from typing import List, Literal
from pydantic import BaseModel

class PipelineInputs(BaseModel):
    provider: Literal["OxO", "BioPortal"]
    curies: List[str] = []
