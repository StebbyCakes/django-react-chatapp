from django.urls import path
from .views import ChatListAPIView, ChatListDetailAPIView


app_name='chatlog'

urlpatterns = [
    path('<int:pk>/', ChatListDetailAPIView.as_view(), name = 'chat_detail'),
    path('', ChatListAPIView.as_view(), name ="chat")
]
