from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import load_your_model, load_your_encoder  # Assuming you have these functions
import json

# Load your model and encoder
model = load_your_model()
encoder = load_your_encoder()

@csrf_exempt
def predict_personality(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            
            # Extract features from the request
            features = [
                data.get('Gender'),
                data.get('Age Category'),
                data.get('Location'),
                data.get('Hobby'),
                data.get('Favorite Color'),
                data.get('Sport')
            ]
            
            # Encode your features here. Adjust according to your encoder.
            # For demonstration, let's assume 'encoder' transforms features properly.
            encoded_features = encoder.transform([features])
            
            # Predict
            prediction = model.predict(encoded_features)
            
            # Convert prediction to a proper format, if necessary
            prediction_response = {
                'Openness Level': prediction[0][0],
                'Conscientiousness Level': prediction[0][1],
                'Extroversion Level': prediction[0][2],
                'Agreeableness Level': prediction[0][3],
                'Neuroticism Level': prediction[0][4],
            }
            
            return JsonResponse({'status': 'success', 'prediction': prediction_response})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are accepted'})
