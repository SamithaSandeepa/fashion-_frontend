import os
import json
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
from concurrent.futures import ThreadPoolExecutor, as_completed
from lime.lime_text import LimeTextExplainer
import htmlmin
from django.conf import settings

from .sentiment_resources import get_model, get_tokenizer

def predict_sentiment(input_text,explainable_ai=False):
    tokenizer = get_tokenizer()
    model = get_model()
    input_sequence = tokenizer.texts_to_sequences([input_text])
    input_sequence = pad_sequences(input_sequence, maxlen=100)

    predictions = model.predict(input_sequence)
    predicted_index = np.argmax(predictions[0])
    index_to_label = {0: 'negative', 1: 'slightly-negative', 2: 'neutral', 3: 'slightly-positive', 4: 'positive'}

    # class_names = ['negative', 'slightly negative', 'neutral', 'slightly positive', 'positive']     
    explainer = LimeTextExplainer(class_names=index_to_label)
    def predict_proba(texts):
        seqs = tokenizer.texts_to_sequences(texts)
        padded_seqs = pad_sequences(seqs, maxlen=100)
        return model.predict(padded_seqs)

    # def generate_explanation(text):
    #     exp = explainer.explain_instance(text, predict_proba, num_features=10)
    #     # For non-notebook environments, you might return exp.as_list() or another format
    #     return exp

    # E xplain a specific prediction
    #idx = 107  # Example index
    explanations = ''
    if explainable_ai:
        exp = explainer.explain_instance(input_text , predict_proba, num_features=10)
        # explanations= htmlmin.minify(exp.as_html())
        annotated_file_name = "explanations.html"
        save_dir = os.path.join(settings.MEDIA_ROOT, annotated_file_name)
        # annotated_image_path = os.path.join(save_dir, annotated_file_name)
        exp.save_to_file(save_dir)
        explanations = annotated_file_name

    # exp.as_html()
    # Use ThreadPoolExecutor to parallelize explanation generation
    # with ThreadPoolExecutor(max_workers=5) as executor:
    #     # Submit all the tasks and get future objects
    #     futures = [executor.submit(generate_explanation, text) for text in input_text]

    #     # Wait for the futures to complete and get results
    #     for future in as_completed(futures):
    #         exp = future.result()
    #         # If using in a Jupyter Notebook
    #         expList.append(exp.as_html())

    return {
        "index_to_label": index_to_label[predicted_index],
        "explanations": explanations

    }

@method_decorator(csrf_exempt, name='dispatch')
class SentimentAnalysisView(View):
    # def post(self, request, *args, **kwargs):
        # input_text = request.POST.get("comment", "")
        # print(input_text)
        # predicted_sentiment = predict_sentiment(input_text)
        # return JsonResponse({"input": input_text, "predicted_sentiment": predicted_sentiment})
        def post(self, request, *args, **kwargs):
        # Load the JSON data from the request body
            data = json.loads(request.body.decode('utf-8'))
            # input_text = request.POST.get("comment", "")
            # print( decode(request.POST.get("comment")))
            # Extract the list of comments from the JSON data
            comments = data['comment']
            explainable_ai = data['explainable_ai'] if 'explainable_ai' in data else False
            print(comments)
            # comments = data.get("comments", [])
            # Initialize an empty list to store the results
            
            results = []
            # Iterate over each comment in the received list of comments
            for comment in comments:
                predicted_sentiment = predict_sentiment(comment,explainable_ai)
                results.append({
                    "comment": comment,
                    "predicted_sentiment": predicted_sentiment["index_to_label"],
                    "explanations": predicted_sentiment["explanations"]
                })
                
            
            # Return the list of comments with their predicted sentiments
            return JsonResponse({"results": results})
        
                

