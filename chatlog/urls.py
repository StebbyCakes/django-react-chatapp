from django.urls import path

from .views import ChatListAPIView

app_name='chatlog'

urlpatterns = [
    path('', ChatListAPIView.as_view(), name ="chat")
]
