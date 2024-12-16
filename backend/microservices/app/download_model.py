from diffusers import StableDiffusionPipeline
import torch

# Use CPU for inference
device = "cpu"

# Load the model with default dtype (float32)
model = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4").to(device)

# Save the model locally
model.save_pretrained("./stable_diffusion_model")
