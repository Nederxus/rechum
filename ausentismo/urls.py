from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('Ausentismo/', login_required(views.gestionar_ausentismo), name='gestionarAusentismo'),
    path('Listar_Ausentismo/<int:pk>/', login_required(views.listar_ausentismo), name='listarAusentismo'),
    path('Adicionar_Ausentismo/', login_required(views.adicionar_ausentismo), name='adicionarAusentismo'),
    path('Editar_Ausentismo/<int:idtrab>/<int:pk>/', login_required(views.editar_ausentismo), name='editarAusentismo'),
    path('Eliminar_Ausentismo/<int:idtrab>/<int:pk>/', login_required(views.eliminar_ausentismo),
         name='eliminarAusentismo'),

    path('VistaReporteAusentismo/', login_required(views.reporte), name='visualizarReporteAusentismo'),
    path('ExportarAusentismo/', login_required(views.exportar), name='exportarReporteAusentismo'),

    path('RegistroTarjetaCNC/', login_required(views.gestionar_tarjeta_cnc), name='gestionarRegistroTarjetaCNC'),
    path('Listar_RegistroTarjetaCNC/<int:pk>/', login_required(views.listar_tarjeta_cnc),
         name='listarRegistroTarjetaCNC'),
    path('Adicionar_RegistroTarjetaCNC/', login_required(views.adicionar_tarjeta_cnc),
         name='adicionarRegistroTarjetaCNC'),
    path('Editar_RegistroTarjetaCNC/<int:idtrab>/<int:pk>/', login_required(views.editar_tarjeta_cnc),
         name='editarRegistroTarjetaCNC'),
    path('Eliminar_RegistroTarjetaCNC/<int:idtrab>/<int:pk>/', login_required(views.eliminar_tarjeta_cnc),
         name='eliminarRegistroTarjetaCNC'),
]
