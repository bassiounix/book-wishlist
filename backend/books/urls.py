from django.urls import path

from . import views

app_name = 'books'
urlpatterns = [
    path('', views.BookListCreate.as_view(), name='book_list_create'),
    path('<int:pk>/', views.BookRetrieveUpdateDestroy.as_view(), name='book_detail_update_destroy'),
    path('<str:title>/', views.BookTitleRetrieveUpdateDestroy.as_view(), name='book_by_title_detail_update_destroy'),
]
