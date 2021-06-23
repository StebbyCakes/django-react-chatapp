from rest_framework import generics
from .models import Chat
from .serializers import ChatSerializer
# from . permissions import IsAuthOrReadOnly

class ChatListAPIView(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    # .order_by('-updated-at')
    serializer_class = ChatSerializer
    # permission_classes = (IsAuthOrReadOnly,)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)
