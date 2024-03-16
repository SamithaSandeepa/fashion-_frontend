from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ultralytics import YOLO
import torch
from PIL import Image
import io

# Load the YOLO model
def load_model():
    # Adjust the path to where you've stored your best performing model
    model_path = 'D:\\Work\\sliit\\Research application\\Project Frontend\\fashion_store\\backend\\imagesearch\\models\\bestv1.pt'
    model = YOLO(model_path)
    return model

class ObjectDetection(APIView):

    def post(self, request):
        model = load_model()

        # Load image from POST request
        uploaded_file = request.FILES.get('image')
        if not uploaded_file or not isinstance(uploaded_file, InMemoryUploadedFile):
            return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Preprocess the image
        image = Image.open(uploaded_file).convert('RGB')

        # Predict using the model
        results = model.predict(source=image, conf=0.25)
        print(results[0].boxes.xyxy.cpu().numpy().tolist()[0])

        # Extract bounding boxes, confidences, and class labels
        boxes = results[0].boxes.xyxy.cpu().numpy().tolist()  # Convert to list for JSON serialization
        confidences = results[0].boxes.conf.cpu().numpy().tolist()
        class_labels = results[0].boxes.cls.cpu().numpy().tolist()

        # Prepare the response data
        data = {
            'boxes': boxes,
            'confidences': confidences,
            'class_labels': class_labels
        }

        return Response(data, status=status.HTTP_200_OK)
