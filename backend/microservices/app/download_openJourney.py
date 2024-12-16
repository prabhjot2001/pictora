from diffusers import StableDiffusionPipeline
import torch

# Define your model path
model_path = "./openjourney_model"  # Path where you want to save the model

# Download and save the OpenJourney model locally
pipeline = StableDiffusionPipeline.from_pretrained("prompthero/openjourney-v4", torch_dtype=torch.float32)
pipeline.save_pretrained(model_path)
