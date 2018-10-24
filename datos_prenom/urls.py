from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('Trabajo_extraordinario/', login_required(views.gestionar_trabajo_extra), name='gestionarTrabajoExtra'),
    path('Adicionar_Trabajo_extraordinario/', login_required(views.adicionar_trabajo_extra),
         name='adicionarTrabajoExtra'),
    path('Editar_Trabajo_extraordinario/<int:pk>/', login_required(views.editar_trabajo_extra),
         name='editarTrabajoExtra'),
    path('Eliminar_Trabajo_extraordinario/<int:pk>/', login_required(views.EliminarTrabajoExtra.as_view()),
         name='eliminarTrabajoExtra'),
    path('Detalle_Trabajo_extraordinario/<int:pk>/', login_required(views.DetalleTrabajoExtra.as_view()),
         name='detalleTrabajoExtra'),

    path('Alimentacion/', login_required(views.gestionar_alimentacion), name='gestionarAlimentacion'),
    path('Adicionar_Alimentacion/', login_required(views.adicionar_alimentacion),
         name='adicionarAlimentacion'),
    path('Editar_Alimentacion/<int:pk>/', login_required(views.editar_alimentacion),
         name='editarAlimentacion'),
    path('Eliminar_Alimentacion/<int:pk>/', login_required(views.EliminarAlimentacion.as_view()),
         name='eliminarAlimentacion'),
    path('Detalle_Alimentacion/<int:pk>/', login_required(views.DetalleAlimentacion.as_view()),
         name='detalleAlimentacion'),

    path('Vacaciones/', login_required(views.gestionar_vacaciones), name='gestionarVacaciones'),
    path('Adicionar_Vacaciones/', login_required(views.adicionar_vacaciones),
         name='adicionarVacaciones'),
    path('Editar_Vacaciones/<int:pk>/', login_required(views.editar_vacaciones),
         name='editarVacaciones'),
    path('Eliminar_Vacaciones/<int:pk>/', login_required(views.EliminarVacaciones.as_view()),
         name='eliminarVacaciones'),
    path('Detalle_Vacaciones/<int:pk>/', login_required(views.DetalleVacaciones.as_view()),
         name='detalleVacaciones'),

    path('VistaReporteVacaciones/', login_required(views.reporte), name='visualizarReporteVacaciones'),
    path('ExportarVacaciones/', login_required(views.exportar), name='exportarReporteVacaciones'),
]
