from django.db import models
from ges_trab.models import Trabajador

# Create your models here.


class TrabajoExtraordinario(models.Model):
    codigo_trab = models.ForeignKey(Trabajador, on_delete=models.CASCADE, default='')
    desde = models.DateField(verbose_name='Fecha de inicio', blank=False, null=False)
    hasta = models.DateField(verbose_name='Fecha de fin', blank=False, null=False)
    cant_horas = models.PositiveIntegerField(verbose_name='Cantidad de horas', blank=False, null=False)

    def __str__(self):
        return '{} => ({} / {})'.format(self.codigo_trab, self.desde, self.hasta)


class Vacaciones (models.Model):
    codigo_trab = models.ForeignKey(Trabajador, on_delete=models.CASCADE, default='')
    fecha = models.DateField(verbose_name='Fecha de inicio', blank=False, null=False)
    cant_dias = models.PositiveIntegerField(verbose_name='Cantidad de días', blank=False, null=False)

    def __str__(self):
        return '{} => {}'.format(self.codigo_trab, self.fecha)


class Alimentacion (models.Model):
    codigo_trab = models.ForeignKey(Trabajador, on_delete=models.CASCADE, default='')
    desde = models.DateField(verbose_name='Fecha de inicio', blank=False, null=False)
    hasta = models.DateField(verbose_name='Fecha de fin', blank=False, null=False)
    cant_dias = models.PositiveIntegerField(verbose_name='Días trabajados', blank=False, null=False)
    cant_dias_dieta = models.PositiveIntegerField(verbose_name='Días dieta', blank=True, null=True, default=0)

    def __str__(self):
        return '{} => {} => {}'.format(self.codigo_trab, self.desde, self.cant_dias)
