from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel
from diffusers import StableDiffusionPipeline
import os
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use specific URL(s) in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ImageRequest(BaseModel):
    prompt: str
    censored: bool = True

# Define the model path and load the Stable Diffusion model
model_path = "./stable_diffusion_model"
device = "cpu"  # Use CPU for inference

model = StableDiffusionPipeline.from_pretrained(model_path).to(device)

# Save the original safety checker
original_safety_checker = model.safety_checker

@app.post("/generate-image/")
async def generate_image(request: ImageRequest):
    prompt = request.prompt

    # Toggle the safety checker based on the `censored` flag
    model.safety_checker = None if not request.censored else original_safety_checker

    # Generate the image
    image = model(prompt).images[0]

    # Generate unique filename and save
    output_filename = f"output_{uuid4().hex}.png"
    image.save(output_filename)

    # Return the image file as a response
    return FileResponse(path=output_filename, media_type="image/png", filename=output_filename)
