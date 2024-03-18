from django.views import View
from django.http import JsonResponse
import pandas as pd
import pickle
import os
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

class PredictPersonalityView(APIView):
    parser_classes = [JSONParser]

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        model_file = os.path.join(os.path.dirname(__file__), 'models', 'personality_model.pkl') 
        with open(model_file, 'rb') as file:
            self.model = pickle.load(file)

    def post(self, request, *args, **kwargs):
        # Directly use the request data if it's already a list
        encoded_array = request.data if isinstance(request.data, list) else request.data.get("encoded_array", [])

        # Ensure the encoded_array is not empty
        if not encoded_array:
            return JsonResponse({'error': 'No data provided'}, status=400)

        # Convert the encoded array into a DataFrame
        df_sample = pd.DataFrame([encoded_array])

        try:
            # Make the prediction
            predictions = self.model.predict(df_sample)
            predictions_list = predictions.tolist()  # Convert predictions to a list for JSON serialization
            return JsonResponse({'predictions': predictions_list})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
