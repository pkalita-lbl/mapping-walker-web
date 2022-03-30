from lib2to3.pytree import Base
from typing import List
from pydantic import BaseModel

class PipelineInputs(BaseModel):
    curies: List[str] = []
