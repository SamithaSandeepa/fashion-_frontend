import os
from django.conf import settings
from joblib import load

def load_your_model():
    model_path = os.path.join(settings.BASE_DIR, 'models', 'model.joblib')
    return load(model_path)

def load_your_encoder():
    encoder_path = os.path.join(settings.BASE_DIR, 'models', 'encoder.joblib')
    return load(encoder_path)
