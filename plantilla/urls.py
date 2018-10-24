from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('Plantilla/', login_required(views.gestionar_plantilla), name='gestionarPlantilla'),
    path('Adicionar_Plantilla/', login_required(views.adicionar_plantilla), name='adicionarPlantilla'),
    path('Editar_Plantilla/<int:pk>/', login_required(views.editar_plantilla), name='editarPlantilla'),
    path('Editar_Plantilla_Plazas/<int:pk>/', login_required(views.editar_plantilla_plazas),
         name='editarPlantillaPlazas'),
    path('Eliminar_Plantilla/<int:pk>/', login_required(views.eliminar_plantilla), name='eliminarPlantilla'),
    path('Dpto_por_unidad/<int:pk>/', login_required(views.dpto_por_unidad), name='DepartamentoPorUnidad'),
    path('VistaReportePlantilla/', login_required(views.reporte), name='visualizarReportePlantilla'),
    path('ExportarPlantilla/', login_required(views.exportar), name='exportarReportePlantilla'),
]
