from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),  # Include the app's urls
    path('api/pred/', include('prediction.urls')),
    path('api/img/', include('image_processing.urls')),
    path('api/search/', include('imagesearch.urls')),  # Include the imagesearch app's URLs
]
