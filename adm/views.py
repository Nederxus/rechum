from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.urls import reverse_lazy
from django.views import generic
from .form import *


# Create your views here.
def login_up(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        acceso = authenticate(username=username, password=password)
        if acceso is not None:
            if acceso.is_active:
                login(request, acceso)
                return redirect('home')
            else:
                context = {'info': "Usuario desactivado."}
                return render(request, 'login.html', context)
        else:
            context = {'info': "Usuario / Password incorrecto."}
            return render(request, 'login.html', context)
    else:
        return render(request, 'login.html')


def home(request):
    context = {'request': request}
    return render(request, 'home.html', context)


def logout_view(request):
    logout(request)


# Listar
def gestionar_unidad_org(request):
    list_unidad_org = UnidadOrg.objects.all()
    form = CalificacionForm(request.POST or None)
    context = {'list_unidad_org': list_unidad_org, 'form': form}
    return render(request, 'Gestionar_Unidad_Organizacional.html', context)


def gestionar_departamento(request):
    list_departamentos = Departamento.objects.all()
    form = DepartamentoForm(request.POST or None)
    context = {'list_departamentos': list_departamentos, 'form': form}
    return render(request, 'Gestionar_Departamento.html', context)


def gestionar_calificacion(request):
    list_calificacion = Calificacion.objects.all()
    form = CalificacionForm(request.POST or None)
    context = {'list_calificacion': list_calificacion, 'form': form}
    return render(request, 'Gestionar_Calificacion.html', context)


def gestionar_especialidad(request):
    list_especialidad = Especialidad.objects.all()
    form = EspecialidadForm(request.POST or None)
    context = {'list_especialidad': list_especialidad, 'form': form}
    return render(request, 'Gestionar_Especialidad.html', context)


def gestionar_seccion_sindical(request):
    list_ss = SeccionSindical.objects.all()
    form = SeccionSindicalForm(request.POST or None)
    context = {'list_ss': list_ss, 'form': form}
    return render(request, 'Gestionar_Seccion_Sindical.html', context)


def gestionar_cargo(request):
    list_cargo = Cargo.objects.all()
    form = CargoForm(request.POST or None)
    context = {'list_cargo': list_cargo, 'form': form}
    return render(request, 'Gestionar_Cargo.html', context)


# Adicionar
def adicionar_uo(request):
    form = UnidadOrgForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('/Unidad_Organizacional/')
    cal = UnidadOrg.objects.all()
    context = {'list_unidad_org': cal, 'form': form}
    return render(request, 'Gestionar_Unidad_Organizacional.html', context)


def adicionar_ss(request):
    form = SeccionSindicalForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('/Seccion_Sindical/')
    cal = SeccionSindical.objects.all()
    context = {'list_ss': cal, 'form': form}
    return render(request, 'Gestionar_Seccion_Sindical.html', context)


def adicionar_departamento(request):
    form = DepartamentoForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('/Departamento/')
    cal = Departamento.objects.all()
    context = {'list_departamentos': cal, 'form': form}
    return render(request, 'Gestionar_Departamento.html', context)


def adicionar_cargo(request):
    form = CargoForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('/Cargo/')
    cal = Cargo.objects.all()
    context = {'list_cargo': cal, 'form': form}
    return render(request, 'Gestionar_Cargo.html', context)


def adicionar_calificacion(request):
    form = CalificacionForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('/Calificacion/')
    cal = Calificacion.objects.all()
    context = {'list_calificacion': cal, 'form': form}
    return render(request, 'Gestionar_Calificacion.html', context)


def adicionar_especialidad(request):
    form = EspecialidadForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('/Especialidad/')
    cal = Especialidad.objects.all()
    context = {'list_especialidad': cal, 'form': form}
    return render(request, 'Gestionar_Especialidad.html', context)


# Editar
def editar_uo(request, pk):
    unidad = UnidadOrg.objects.get(id=pk)
    form = UnidadOrgForm(request.POST or None, instance=unidad)
    if form.is_valid():
        form.save()
        return redirect('/Unidad_Organizacional/')
    cal = UnidadOrg.objects.all()
    context = {'list_unidad_org': cal, 'form': form, 'edit': pk}
    return render(request, 'Gestionar_Unidad_Organizacional.html', context)


def editar_ss(request, pk):
    seccion = SeccionSindical.objects.get(id=pk)
    form = SeccionSindicalForm(request.POST or None, instance=seccion)
    if form.is_valid():
        form.save()
        return redirect('/Seccion_Sindical/')
    cal = SeccionSindical.objects.all()
    context = {'list_ss': cal, 'form': form, 'edit': pk}
    return render(request, 'Gestionar_Seccion_Sindical.html', context)


def editar_departamento(request, pk):
    departamento = Departamento.objects.get(id=pk)
    form = DepartamentoForm(request.POST or None, instance=departamento)
    if form.is_valid():
        form.save()
        return redirect('/Departamento/')
    cal = Departamento.objects.all()
    context = {'list_departamentos': cal, 'form': form, 'edit': pk}
    return render(request, 'Gestionar_Departamento.html', context)


def editar_cargo(request, pk):
    cargo = Cargo.objects.get(id=pk)
    form = CargoForm(request.POST or None, instance=cargo)
    if form.is_valid():
        form.save()
        return redirect('/Cargo/')
    cal = Cargo.objects.all()
    context = {'list_cargo': cal, 'form': form, 'edit': pk}
    return render(request, 'Gestionar_Cargo.html', context)


def editar_calificacion(request, pk):
    calificacion = Calificacion.objects.get(id=pk)
    form = CalificacionForm(request.POST or None, instance=calificacion)
    if form.is_valid():
        form.save()
        return redirect('/Calificacion/')
    cal = Calificacion.objects.all()
    context = {'list_calificacion': cal, 'form': form, 'edit': pk}
    return render(request, 'Gestionar_Calificacion.html', context)


def editar_especialidad(request, pk):
    especialidad = Especialidad.objects.get(id=pk)
    form = EspecialidadForm(request.POST or None, instance=especialidad)
    if form.is_valid():
        form.save()
        return redirect('/Especialidad/')
    cal = Especialidad.objects.all()
    context = {'list_especialidad': cal, 'form': form, 'edit': pk}
    return render(request, 'Gestionar_Especialidad.html', context)


# Visualizar detalle


class DetalleUo(generic.DetailView):
    model = UnidadOrg
    template_name = 'Detalle_Unidad_Organizacional.html'


class DetalleSs(generic.DetailView):
    model = SeccionSindical
    template_name = 'Detalle_Seccion_Sindical.html'


class DetalleDepartamento(generic.DetailView):
    model = Departamento
    template_name = 'Detalle_Departamento.html'


class DetalleCargo(generic.DetailView):
    model = Cargo
    template_name = 'Detalle_Cargo.html'


class DetalleCalificacion(generic.DetailView):
    model = Calificacion
    template_name = 'Detalle_Calificacion.html'


class DetalleEspecialidad(generic.DetailView):
    model = Especialidad
    template_name = 'Detalle_Especialidad.html'


# Eliminar
def eliminar_uo(request, pk):
    unidad = UnidadOrg.objects.get(id=pk)
    if request.method == 'GET':
        context = {'object': unidad}
        return render(request, 'Eliminar_Unidad_Organizacional.html', context)
    else:
        from django.db import IntegrityError
        try:
            unidad.delete()
            return redirect('/Unidad_Organizacional/')
        except IntegrityError:
            cal = UnidadOrg.objects.all()
            form = UnidadOrgForm(None)
            context = {'list_unidad_org': cal, 'form': form,
                       'errores': 'Imposible eliminar Unidad porque tiene al menos un Departamento asociado.'}
            return render(request, 'Gestionar_Unidad_Organizacional.html', context)


def eliminar_ss(request, pk):
    seccion = SeccionSindical.objects.get(id=pk)
    if request.method == 'GET':
        context = {'object': seccion}
        return render(request, 'Eliminar_Seccion_Sindical.html', context)
    else:
        from django.db import IntegrityError
        try:
            seccion.delete()
            return redirect('/Seccion_Sindical/')
        except IntegrityError:
            cal = SeccionSindical.objects.all()
            form = SeccionSindicalForm(None)
            context = {'list_ss': cal, 'form': form,
                       'errores': 'Imposible eliminar Sección porque tiene al menos un Departamento asociado.'}
            return render(request, 'Gestionar_Seccion_Sindical.html', context)


def eliminar_departamento(request, pk):
    departamento = Departamento.objects.get(id=pk)
    if request.method == 'GET':
        context = {'object': departamento}
        return render(request, 'Eliminar_Departamento.html', context)
    else:
        from django.db import IntegrityError
        try:
            departamento.delete()
            return redirect('/Departamento/')
        except IntegrityError:
            cal = Departamento.objects.all()
            form = DepartamentoForm(None)
            context = {'list_departamentos': cal, 'form': form,
                       'errores': 'Imposible eliminar Departamento porque está asociado a una plantilla.'}
            return render(request, 'Gestionar_Departamento.html', context)


def eliminar_cargo(request, pk):
    cargo = Cargo.objects.get(id=pk)
    if request.method == 'GET':
        context = {'object': cargo}
        return render(request, 'Eliminar_Cargo.html', context)
    else:
        from django.db import IntegrityError
        try:
            cargo.delete()
            return redirect('/Cargo/')
        except IntegrityError:
            cal = Cargo.objects.all()
            form = CargoForm(None)
            context = {'list_cargo': cal, 'form': form,
                       'errores': 'Imposible eliminar Cargo porque está asociado a una plantilla.'}
            return render(request, 'Gestionar_Cargo.html', context)


class EliminarCalificacion(generic.DeleteView):
    model = Calificacion
    template_name = 'Eliminar_Calificacion.html'
    success_url = reverse_lazy('gestionarCalificacion')


def eliminar_especialidad(request, pk):
    especialidad = Especialidad.objects.get(id=pk)
    if request.method == 'GET':
        context = {'object': especialidad}
        return render(request, 'Eliminar_Especialidad.html', context)
    else:
        from django.db import IntegrityError
        try:
            especialidad.delete()
            return redirect('/Especialidad/')
        except IntegrityError:
            cal = Especialidad.objects.all()
            form = EspecialidadForm(None)
            context = {'list_especialidad': cal, 'form': form,
                       'errores': 'Imposible eliminar Especialidad porque está asociada a un trabajador.'}
            return render(request, 'Gestionar_Especialidad.html', context)
