# from django.views import View
# from django.http import JsonResponse
# import pandas as pd
# import pickle
# import os
# from rest_framework.views import APIView
# from rest_framework.parsers import JSONParser

# class PredictPersonalityView(APIView):
#     parser_classes = [JSONParser]

#     def __init__(self, **kwargs):
#         super().__init__(**kwargs)
#         # Adjust the path to where your model is located
#         model_file = 'D:\\research\\fashion-_frontend\\backend\\recommendation\\models\\random_forest_classifier.pkl'

#         # Load the model
#         with open(model_file, 'rb') as file:
#             self.model = pickle.load(file)

#     def post(self, request, *args, **kwargs):
#         # Extract the encoded array from the request data
#         encoded_array = request.data.get("encoded_array")

#         # Convert the encoded array into a DataFrame, which is what the model expects for making a prediction
#         # Assuming the array structure directly matches the model's expected input
#         df_sample = pd.DataFrame([encoded_array])

#         # Make the prediction
#         predictions = self.model.predict(df_sample)
#         predictions_list = predictions.tolist()  # Convert predictions to a list for JSON serialization

#         # Return the predictions as a JSON response
#         return JsonResponse({'predictions': predictions_list})
