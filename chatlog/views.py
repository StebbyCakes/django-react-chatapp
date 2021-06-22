from rest_framework import generics

from .models import Chat

from .serializers import ChatSerializer

class ChatListAPIView(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

     def perform_create(self, serializer):
        serializer.save(author=self.request.user)