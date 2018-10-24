from django import forms
from .models import *


class TrabajoExtraordinarioForm(forms.ModelForm):
    class Meta:
        model = TrabajoExtraordinario
        fields = ['codigo_trab', 'desde', 'hasta', 'cant_horas']

    def __init__(self, *args, **kwargs):
        super(TrabajoExtraordinarioForm, self).__init__(*args, **kwargs)

        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({'class': 'form-control'})


class AlimentacionForm(forms.ModelForm):
    class Meta:
        model = Alimentacion
        fields = ['codigo_trab', 'desde', 'hasta', 'cant_dias', 'cant_dias_dieta']

    def __init__(self, *args, **kwargs):
        super(AlimentacionForm, self).__init__(*args, **kwargs)

        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({'class': 'form-control'})


class VacacionesForm(forms.ModelForm):
    class Meta:
        model = Vacaciones
        fields = ['codigo_trab', 'fecha', 'cant_dias']

    def __init__(self, *args, **kwargs):
        super(VacacionesForm, self).__init__(*args, **kwargs)

        for field in iter(self.fields):
            self.fields[field].widget.attrs.update({'class': 'form-control'})
