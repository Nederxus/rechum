from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('Subsidios/', login_required(views.gestionar_subsidio), name='gestionarSubsidio'),
    path('Adicionar_Subsidio/', login_required(views.adicionar_subsidio), name='adicionarSubsidio'),
    path('Editar_Subsidio/<int:pk>/', login_required(views.editar_subsidio), name='editarSubsidio'),
    path('Eliminar_Sudsidio/<int:pk>/', login_required(views.EliminarSubsidio.as_view()),
         name='eliminarSubsidio'),
    path('Detalle_Subsidio/<int:pk>/', login_required(views.DetalleSubsidio.as_view()), name='detalleSubsidio'),
    path('VistaReporte/', login_required(views.reporte), name='visualizarReporte'),
    path('Exportar/', login_required(views.exportar), name='exportarReporte'),
]
