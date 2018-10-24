"""rechum URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import logout
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('logout/', login_required(logout), name='logout'),
    path('', include('adm.urls')),
    path('', include('ges_trab.urls')),
    path('', include('plantilla.urls')),
    path('', include('subsidio.urls')),
    path('', include('datos_prenom.urls')),
    path('', include('ausentismo.urls')),
]
