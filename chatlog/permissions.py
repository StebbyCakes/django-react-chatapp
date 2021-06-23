# from rest_framework import permissions
#
# class IsAuthOrReadOnly(permissions.BasePermission):
#
#     def has_object_permission(self, request, view, obj):
#         if request.method in permissions.SAFE_METHOD:
#             return True
#
#         return obj.author == request.author



        # if the person logged in is the person that created the message they can create delete etc
        # staff can delete the message but not edit
        # the owner can edit
        # if it isnt the person that created the message they only get the SAFE_METHOD which is just a GET method (they can only read)
