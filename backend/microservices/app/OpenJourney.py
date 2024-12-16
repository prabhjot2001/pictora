from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel
from diffusers import StableDiffusionPipeline
import os
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ImageRequest(BaseModel):
    prompt: str
    censored: bool = True

# Model loading
model_path = "./stable_diffusion_model"
device = "cpu"
model = StableDiffusionPipeline.from_pretrained(model_path).to(device)
original_safety_checker = model.safety_checker

@app.post("/generate-image/")
async def generate_image(request: ImageRequest):
    # Toggle censoring
    model.safety_checker = None if not request.censored else original_safety_checker

    # Generate the image
    image = model(request.prompt).images[0]

    # Save and respond
    output_filename = f"output_{uuid4().hex}.png"
    image.save(output_filename)
    return FileResponse(path=output_filename, media_type="image/png", filename=output_filename)
