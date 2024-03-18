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
        
# class PredictFashionView(APIView):
#     parser_classes = [JSONParser]

#     def __init__(self, **kwargs):
#         super().__init__(**kwargs)
#         # Load the fashion model
#         model_file = os.path.join(os.path.dirname(__file__), 'models', 'recommendation.pkl')
#         with open(model_file, 'rb') as file:
#             self.model = pickle.load(file)

#     def post(self, request, *args, **kwargs):
#         # Directly use the request data if it's already a list
#         encoded_array = request.data if isinstance(request.data, list) else request.data.get("encoded_array", [])

#         # Ensure the encoded_array is not empty
#         if not encoded_array:
#             return JsonResponse({'error': 'No data provided'}, status=400)

#         # Convert the encoded array into a DataFrame
#         df_sample = pd.DataFrame([encoded_array])

#         try:
#             # Make the prediction
#             predictions = self.model.predict(df_sample)
#             predictions_list = predictions.tolist()  # Convert predictions to a list for JSON serialization
#             return JsonResponse({'predictions': predictions_list})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
        
# # Import necessary Django and Python libraries
# import numpy as np
# import os
# import pandas as pd
# import pickle
# from rest_framework.views import APIView
# from django.http import JsonResponse

# # Load the model at the start of your application
# model_path = os.path.join(os.path.dirname(__file__), 'models', 'my_trained_model (2).pkl')
# with open(model_path, 'rb') as file:
#     model = pickle.load(file)

# class PredictFashionView(APIView):

#     def post(self, request, *args, **kwargs):
#         # Extract features from the request
#         data_dict = request.data

#         # Create the input DataFrame
#         input_df = self.create_input_dataframe(data_dict)

#         # # Make the prediction
#         # prediction = model.predict(input_df)
#         # print(prediction)
#         return JsonResponse({'prediction': input_df })
#         # Decode the prediction into readable format
#         # prediction_result = self.decode_prediction(prediction)

#         # Return the prediction as JSON
#         # return JsonResponse({'prediction': prediction_result})


#     def create_input_dataframe(self, data_dict):
#         # Assuming `X_train_columns` is the list of column names used during training
#         X_train_columns = [
#             'Gender_Female', 'Gender_Male', 
#             'Favorite Color_Blue', 'Favorite Color_Green', 'Favorite Color_Other', 'Favorite Color_Purple', 'Favorite Color_Red', 'Favorite Color_White', 'Favorite Color_Yellow', 
#             'Openness Level_High', 'Openness Level_Low', 
#             'Conscientiousness Level_High', 'Conscientiousness Level_Low', 
#             'Extroversion Level_High', 'Extroversion Level_Low', 
#             'Agreeableness Level_High', 'Agreeableness Level_Low', 
#             'Neuroticism Level_High', 'Neuroticism Level_Low', 
#             'Personality Class_Profile 1', 'Personality Class_Profile 2', 'Personality Class_Profile 3', 'Personality Class_Profile 4', 
#             'Personality Class_Profile 5', 'Personality Class_Profile 6', 'Personality Class_Profile 7', 'Personality Class_Profile 8', 
#             'Personality Class_Profile 9', 'Personality Class_Profile 10', 'Personality Class_Profile 11', 'Personality Class_Profile 12', 
#             'Personality Class_Profile 13', 'Personality Class_Profile 14', 'Personality Class_Profile 15', 'Personality Class_Profile 16', 
#             'Personality Class_Profile 17', 'Personality Class_Profile 18', 'Personality Class_Profile 19', 'Personality Class_Profile 20', 
#             'Personality Class_Profile 21', 'Personality Class_Profile 22', 'Personality Class_Profile 23', 'Personality Class_Profile 24', 
#             'Personality Class_Profile 25', 'Personality Class_Profile 26', 'Personality Class_Profile 27',
#             'Age Category_0-19', 'Age Category_20-29', 'Age Category_30-39', 'Age Category_40-49', 'Age Category_50-59', 'Age Category_60+'
#         ]

#         # Initialize all columns to 0
#         sample_data_dict = {col: 0 for col in X_train_columns}

#         # Update the dictionary with the actual values from the request
#         for key in data_dict:
#             if key in sample_data_dict:
#                 sample_data_dict[key] = data_dict[key]

#         # Convert the dictionary to a DataFrame ensuring the columns are in the same order as X_train
#         sample_df = pd.DataFrame([sample_data_dict], columns=X_train_columns)
#         pred = model.predict(sample_df)

#         return pred

#     def decode_prediction(self, prediction):
#         # Manually decode the prediction into readable format
#         # Update this list based on your model's output features
#         prediction_columns = [  # This should match your model's output columns
#             'Fashion Style_Casual', 'Fashion Style_Formal', 'Fashion Style_Minimalist', 'Fashion Style_Other', 'Fashion Style_Sporty', 'Fashion Style_Vintage',
#             'Fashion Brand_Adidas', 'Fashion Brand_Gucci', 'Fashion Brand_H&M', 'Fashion Brand_Nike', 'Fashion Brand_No Brand', 'Fashion Brand_Other', 'Fashion Brand_Zara',
#             'Cloth Type_Bottoms', 'Cloth Type_Dresses', 'Cloth Type_Footwear', 'Cloth Type_Other', 'Cloth Type_Shirt', 'Cloth Type_Skirt', 'Cloth Type_T-shirt', 'Cloth Type_Tops', 'Cloth Type_Trouser',
#             'Garment Fitting_Baggy', 'Garment Fitting_Classic Fit', 'Garment Fitting_Other', 'Garment Fitting_Regular Fit', 'Garment Fitting_Slim Fit'
#         ]

#         result_indexes = np.argmax(prediction, axis=1)
#         result = [prediction_columns[idx] for idx in result_indexes]

#         return result
        

        

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
import pickle
import numpy as np

# Load your model and encoder
model_path = os.path.join(os.path.dirname(__file__), 'models', 'model.pkl')
with open(model_path, 'rb') as file:
    model = pickle.load(file)

# # Assuming the encoder is saved and loaded similarly
# encoder_path = 'path/to/your/saved_encoder.pkl'
# with open(encoder_path, 'rb') as file:
#     encoder = pickle.load(file)

class PredictFashionView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract data from request

        # feature data with all 0
        sample_data = {
            'Gender_Female': [0],
            'Gender_Male': [0],
            'Favorite Color_Blue': [0],
            'Favorite Color_Green': [0],
            'Favorite Color_Other': [0],
            'Favorite Color_Purple': [0],
            'Favorite Color_Red': [0],
            'Favorite Color_White': [0],
            'Favorite Color_Yellow': [0],
            'Openness Level_High': [0],
            'Openness Level_Low': [0],
            'Conscientiousness Level_High': [0],
            'Conscientiousness Level_Low': [0],
            'Extroversion Level_High': [0],
            'Extroversion Level_Low': [0],
            'Agreeableness Level_High': [0],
            'Agreeableness Level_Low': [0],
            'Neuroticism Level_High': [0],
            'Neuroticism Level_Low': [0],
            'Personality Class_Profile 1': [0],
            'Personality Class_Profile 10': [0],
            'Personality Class_Profile 11': [0],
            'Personality Class_Profile 12': [0],
            'Personality Class_Profile 13': [0],
            'Personality Class_Profile 14': [0],
            'Personality Class_Profile 15': [0],
            'Personality Class_Profile 16': [0],
            'Personality Class_Profile 17': [0],
            'Personality Class_Profile 18': [0],
            'Personality Class_Profile 19': [0],
            'Personality Class_Profile 2': [0],
            'Personality Class_Profile 20': [0],
            'Personality Class_Profile 21': [0],
            'Personality Class_Profile 22': [0],
            'Personality Class_Profile 23': [0],
            'Personality Class_Profile 24': [0],
            'Personality Class_Profile 25': [0],
            'Personality Class_Profile 26': [0],
            'Personality Class_Profile 27': [0],
            'Personality Class_Profile 3': [0],
            'Personality Class_Profile 4': [0],
            'Personality Class_Profile 5': [0],
            'Personality Class_Profile 6': [0],
            'Personality Class_Profile 7': [0],
            'Personality Class_Profile 8': [0],
            'Personality Class_Profile 9': [0],
            'Age Category_0-19': [0],
            'Age Category_20-29': [0],
            'Age Category_30-39': [0],
            'Age Category_40-49': [0],
            'Age Category_50-59': [0],
            'Age Category_60+': [0],
        }

        user_data = request.data

        # # using user_data create dataframe for X_train_columns
        # user_data = {col: 0 for col in X_train_columns}
        # for key in user_data:
        #     if key in user_data:
        #         user_data[key] = user_data[key]

        # # Create a DataFrame
        # sample_df = pd.DataFrame([user_data])

        # Define the sample data dictionary
        sample_data = {
            'Gender_Female': [0],
            'Gender_Male': [1],
            'Favorite Color_Blue': [1],
            'Favorite Color_Green': [0],
            'Favorite Color_Other': [0],
            'Favorite Color_Purple': [0],
            'Favorite Color_Red': [0],
            'Favorite Color_White': [0],
            'Favorite Color_Yellow': [0],
            'Openness Level_High': [1],
            'Openness Level_Low': [0],
            'Conscientiousness Level_High': [1],
            'Conscientiousness Level_Low': [0],
            'Extroversion Level_High': [1],
            'Extroversion Level_Low': [0],
            'Agreeableness Level_High': [1],
            'Agreeableness Level_Low': [0],
            'Neuroticism Level_High': [1],
            'Neuroticism Level_Low': [0],
            'Personality Class_Profile 1': [0],
            'Personality Class_Profile 10': [1],
            'Personality Class_Profile 11': [0],
            'Personality Class_Profile 12': [0],
            'Personality Class_Profile 13': [0],
            'Personality Class_Profile 14': [0],
            'Personality Class_Profile 15': [0],
            'Personality Class_Profile 16': [0],
            'Personality Class_Profile 17': [0],
            'Personality Class_Profile 18': [0],
            'Personality Class_Profile 19': [0],
            'Personality Class_Profile 2': [0],
            'Personality Class_Profile 20': [0],
            'Personality Class_Profile 21': [0],
            'Personality Class_Profile 22': [0],
            'Personality Class_Profile 23': [0],
            'Personality Class_Profile 24': [0],
            'Personality Class_Profile 25': [0],
            'Personality Class_Profile 26': [0],
            'Personality Class_Profile 27': [0],
            'Personality Class_Profile 3': [0],
            'Personality Class_Profile 4': [0],
            'Personality Class_Profile 5': [0],
            'Personality Class_Profile 6': [0],
            'Personality Class_Profile 7': [0],
            'Personality Class_Profile 8': [0],
            'Personality Class_Profile 9': [0],
            'Age Category_0-19': [0],
            'Age Category_20-29': [1],
            'Age Category_30-39': [0],
            'Age Category_40-49': [0],
            'Age Category_50-59': [0],
            'Age Category_60+': [0],
        }

        # Convert the dictionary to a DataFrame
        sample_df = pd.DataFrame(sample_data)

        # Print the sample DataFrame
        print(sample_df)

        # Predict
        predicted_values = model.predict(sample_df)
        # predicted_labels = encoder.inverse_transform(predicted_values)

        # Convert to readable format
        # prediction = pd.DataFrame(predicted_labels, columns=['Fashion Style', 'Fashion Brand', 'Cloth Type', 'Garment Fitting'])

        # return Response(prediction.to_dict(orient='records'), status=status.HTTP_200_OK)
        import numpy as np

        def decode_prediction(predicted_output, target_columns):
            # Get the indices where the predicted values are 1
            predicted_indices = np.where(predicted_output == 1)[1]

            # Decode the indices into class names based on the target variable columns
            predicted_classes = [target_columns[idx] for idx in predicted_indices]

            return predicted_classes

        # Sample predicted output array
        predicted_output = np.array([[0., 0., 0., 0., 1., 0., 0., 0., 0., 0., 1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 1.]])

        # Sample target variable columns
        target_columns = [
            'Fashion Style_Casual', 'Fashion Style_Formal', 'Fashion Style_Minimalist', 'Fashion Style_Other', 'Fashion Style_Sporty', 'Fashion Style_Vintage',
            'Fashion Brand_Adidas', 'Fashion Brand_Gucci', 'Fashion Brand_H&M', 'Fashion Brand_Nike', 'Fashion Brand_No Brand', 'Fashion Brand_Other', 'Fashion Brand_Zara',
            'Cloth Type_Bottoms', 'Cloth Type_Dresses', 'Cloth Type_Footwear', 'Cloth Type_Other', 'Cloth Type_Shirt', 'Cloth Type_Skirt', 'Cloth Type_T-shirt', 'Cloth Type_Tops', 'Cloth Type_Trouser',
            'Garment Fitting_Baggy', 'Garment Fitting_Classic Fit', 'Garment Fitting_Other', 'Garment Fitting_Regular Fit', 'Garment Fitting_Slim Fit'
        ]

        # Decode the prediction and print the predicted classes
        predicted_classes = decode_prediction(predicted_output, target_columns)
        print("Predicted Classes:", predicted_classes)
        return Response(predicted_classes, status=status.HTTP_200_OK)