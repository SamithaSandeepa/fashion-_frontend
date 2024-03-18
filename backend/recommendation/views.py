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

# [
#     1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0
# ]
# sample = [
#     1,  # Gender_Female
#     0,  # Gender_Male
#     0,  # Age Category_0-19
#     0,  # Age Category_20-29
#     1,  # Age Category_30-39
#     0,  # Age Category_40-49
#     0,  # Age Category_50-59
#     0,  # Age Category_60+
#     0,  # Location _Central
#     0,  # Location _Eastern
#     0,  # Location _North Central
#     0,  # Location _North Western
#     1,  # Location _Northern
#     0,  # Location _Sabaragamuwa
#     0,  # Location _Southern
#     0,  # Location _Uva
#     0,  # Location _Western
#     0,  # Hobby_Cooking
#     0,  # Hobby_Cricket
#     0,  # Hobby_Other
#     0,  # Hobby_Painting
#     1,  # Hobby_Reading
#     0,  # Hobby_Sports
#     0,  # Hobby_Travelling
#     0,  # Hobby_Watching Movies
#     0,  # Favorite Color_Black
#     1,  # Favorite Color_Blue
#     0,  # Favorite Color_Green
#     0,  # Favorite Color_Other
#     0,  # Favorite Color_Purple
#     0,  # Favorite Color_Red
#     0,  # Favorite Color_White
#     0,  # Favorite Color_Yellow
#     0,  # Sport_BallSports
#     1,  # Sport_Cricket
#     0,  # Sport_No Sport
#     0,  # Sport_Other
#     0,  # Sport_Running
#     0,  # Sport_Soccer
#     0,  # Sport_Swimming
#     0   # Sport_Tennis
# ]