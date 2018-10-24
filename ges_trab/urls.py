from django.urls import path, re_path
from . import views
from django.contrib.auth.decorators import login_required


urlpatterns = [
    path('movimiento_nomina/<int:pk>/', login_required(views.exportar_movimiento_nomina), name='MovimientoNomina'),
    path('acuerdo_conf/<int:pk>/', login_required(views.exportar_acuerdo), name='AcuerdoConfidencialidad'),
    path('solic_cuenta_usuario/<int:pk>/', login_required(views.exportar_solic_cuenta_user), name='SolicCuentaUser'),
    path('contrato_pdf/<int:pk>/', login_required(views.exportar), name='ReporteContrato'),
    path('movimiento/', login_required(views.listar_movimiento), name='ListarMovimiento'),
    path('disponibles/', login_required(views.listar_disponible), name='TrabajadoresDisponibles'),
    path('trabajador/', login_required(views.gestionar_trabajador), name='GestionarTrabajador'),
    path('bajas/', login_required(views.gestionar_bajatrabajador), name='GestionarBaja'),
    path('ad_trabajador/', login_required(views.adicionar_trabajador_inline), name='AdicionarTrabajador'),
    #path('ed_trabajador/<int:trabajador_id>', login_required(views.adicionar_trabajador_inline), name='EditarTrabajador'),
    path('baja/<int:pk>/', login_required(views.bajaeliminar), name='bajaeliminar'),
    path('eliminar_familiar/<int:id>/', login_required(views.eliminar_familiar), name='EliminarFamiliar'),
    path('alta/<int:pk>/', login_required(views.daralta), name='altabaja'),
    path('select_salarioescala/<int:pk>/', login_required(views.salarioescala_por_escalasarial), name='SelectEscalasalarial'),
    path('select_especialidad/<int:calificacion_id>/', login_required(views.calificacion_especialidad), name='CalificacionEspecialidad'),
    path('select_cargos/<int:departamento_id>/', login_required(views.cargos_disponibles), name='CargosDisponibles'),
    re_path(r'^ed_trabajador/(?P<trabajador_id>\d+)/$', login_required(views.adicionar_trabajador_inline), name='EditarTrabajador'),
    path('ver_codigo_interno/', login_required(views.check_codigo), name='ver_codigo_interno'),
    path('ver_ci/', login_required(views.check_ci), name='ver_ci'),
    path('ver_plantilla/', login_required(views.check_plantilla), name='ver_plantilla'),
    path('ver_usuario/', login_required(views.check_usuario), name='ver_usuario'),
]
