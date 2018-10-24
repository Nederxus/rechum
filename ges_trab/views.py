from django.shortcuts import render, redirect
from django.forms import inlineformset_factory
from .forms import *
from .models import *
from datetime import datetime
from django.http import HttpResponse
import json
from decimal import Decimal
from io import BytesIO
from django.views.generic import View
from django.template.loader import get_template
from xhtml2pdf import pisa
from plantilla.models import Plantilla
from django.core.exceptions import ObjectDoesNotExist
from rechum import settings
import os

check = False
def gestionar_talla(request):
    list_talla = Talla.objects.all()
    context = {'list_talla': list_talla}
    return render(request, 'Gestionar_Talla.html', context)


def listar_movimiento(request):
    list_movimiento = Movimiento.objects.all()
    fecha_inicio = request.GET.get('fecha_inicio')
    fecha_fin = request.GET.get('fecha_fin')
    
    if (fecha_inicio  and fecha_fin ):
        fecha_inicio_convert = datetime.strptime(fecha_inicio, '%d/%m/%Y').strftime('%Y-%m-%d')
        fecha_fin_convert = datetime.strptime(fecha_fin, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_movimiento = Movimiento.objects.filter(fecha__range=[fecha_inicio_convert, fecha_fin_convert])
        
    elif (not fecha_fin  and fecha_inicio ):
        
        fecha_inicio_convert = datetime.strptime(fecha_inicio, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_movimiento = Movimiento.objects.filter(fecha__range=[fecha_inicio_convert, '2200-01-01'])
    elif( fecha_fin  and not fecha_inicio ):
        fecha_fin_convert = datetime.strptime(fecha_fin, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_movimiento = Movimiento.objects.filter(fecha__range=['1970-01-01', fecha_fin_convert])
    else:
        list_movimiento =  Movimiento.objects.all()
    return render(request, 'Listar_Movimiento.html', {'list_movimiento': list_movimiento})

def listar_disponible(request):
    list_disponible =  Disponible.objects.all()
    fecha_inicio = request.GET.get('fecha_inicio')
    fecha_fin = request.GET.get('fecha_fin')
    
    if (fecha_inicio  and fecha_fin ):
        
        fecha_inicio_convert = datetime.strptime(fecha_inicio, '%d/%m/%Y').strftime('%Y-%m-%d')
        fecha_fin_convert = datetime.strptime(fecha_fin, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_disponible = Disponible.objects.filter(fecha__range=[fecha_inicio_convert, fecha_fin_convert])
        
    elif (not fecha_fin  and fecha_inicio ):
        
        fecha_inicio_convert = datetime.strptime(fecha_inicio, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_disponible = Disponible.objects.filter(fecha__range=[fecha_inicio_convert, '2200-01-01'])
    elif( fecha_fin  and not fecha_inicio ):
        fecha_fin_convert = datetime.strptime(fecha_fin, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_disponible = Disponible.objects.filter(fecha__range=['1970-01-01', fecha_fin_convert])
    else:
        list_disponible =  Disponible.objects.all()
    
    return render(request, 'Listar_Disponibilidad.html',{'list_disponible': list_disponible}) 




def gestionar_cpl(request):
    list_cpl = Cpl.objects.all()
    context = {'list_cpl': list_cpl}
    return render(request, 'Gestionar_cpl.html', context)


def gestionar_nucleo_familiar(request):
    list_nucleo_fam = NucleoFamiliar.objects.all()
    context = {'list_nucleo_fam': list_nucleo_fam}
    return render(request, 'Gestionar_Nucleo_Familiar.html', context)


def gestionar_trabajador(request):
    list_trabajador = Trabajador.objects.all()
    context = {'list_trabajador': list_trabajador}
    return render(request, 'Gestionar_Trabajador.html', context)

def gestionar_bajatrabajador(request):
    list_baja = Baja.objects.all()
    fecha_inicio = request.GET.get('fecha_inicio')
    fecha_fin = request.GET.get('fecha_fin')
    
    if (fecha_inicio  and fecha_fin ):
        fecha_inicio_convert = datetime.strptime(fecha_inicio, '%d/%m/%Y').strftime('%Y-%m-%d')
        fecha_fin_convert = datetime.strptime(fecha_fin, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_baja = Baja.objects.filter(fecha_alta__range=[fecha_inicio_convert, fecha_fin_convert])
        
    elif (not fecha_fin  and fecha_inicio ):
        
        fecha_inicio_convert = datetime.strptime(fecha_inicio, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_baja = Baja.objects.filter(fecha_alta__range=[fecha_inicio_convert, '2200-01-01'])
    elif( fecha_fin  and not fecha_inicio ):
        fecha_fin_convert = datetime.strptime(fecha_fin, '%d/%m/%Y').strftime('%Y-%m-%d')
        list_baja = Baja.objects.filter(fecha_alta__range=['1970-01-01', fecha_fin_convert])
    else:
        list_baja =  Baja.objects.all()
    return render(request, 'Gestionar_Baja.html', {'list_baja': list_baja})


#NucleoFamiliarFormSet = inlineformset_factory(Trabajador, NucleoFamiliar, fields=('parentesco','fecha_nac','enfermedades','salario_dev','vinc_lab'),form=NucleoFamiliarForm, extra=3, can_delete=True)
def adicionar_trabajador_inline(request, trabajador_id=None):
    globals()['check']=False
    if trabajador_id:
        globals()['check']=True
        trabajador = Trabajador.objects.get(pk=trabajador_id)
        cargo_id2= trabajador.cargo_id
        departamento_id2= trabajador.departamento_id
        cargo_bd= trabajador.cargo.nombre
        departamento_bd=trabajador.departamento.nombre
        cies_bd = trabajador.cies
        antiguedad_bd= trabajador.antiguedad
        salario_total_bd = trabajador.salario_total
        sal_plus_bd= trabajador.sal_plus
    else:
        trabajador=Trabajador()
    
    NucleoFamiliarFormSet = inlineformset_factory(Trabajador, NucleoFamiliar, fields=('parentesco','fecha_nac','enfermedades','salario_dev','vinc_lab'),form=NucleoFamiliarForm, extra=3, can_delete=True)
    #NucleoFamiliarFormSet = inlineformset_factory(Trabajador, NucleoFamiliar, fields=('parentesco','fecha_nac','enfermedades','salario_dev','vinc_lab'), extra=3, can_delete=True)
    if request.method=='POST':
        inline = NucleoFamiliarFormSet(request.POST, instance=trabajador)  #, prefix='inline'
        form = TrabajadorForm(request.POST, request.FILES, instance=trabajador)
        
       # print ("Entra Post")
       # print (trabajador_id)
    
        if  form.is_valid() and inline.is_valid():
            
            #Esto es para decrementar la disponibilidad de un cargo
            if check== False:
                cargo_id = (form.cleaned_data['cargo'])
                departamento_id = (form.cleaned_data['departamento'])
                plantilla = Plantilla.objects.filter(cargo_id=cargo_id,departamento_id=departamento_id).get()
                plantilla.disponibles=plantilla.disponibles - 1
                plantilla.save()
            #Esto es para el salario por categoria cientifica
            if ((form.cleaned_data['cat_cient']) == '2'):
                trabajador.sal_cat_cient=80
            elif ((form.cleaned_data['cat_cient']) == '3'):
                trabajador.sal_cat_cient=150
            else:
                trabajador.sal_cat_cient=0
            #Esto es para el salario total
            salario_escala= (form.cleaned_data['salario_escala'])
            incre_res= (form.cleaned_data['incre_res'])
            cies= (form.cleaned_data['cies'])
            sal_plus= (form.cleaned_data['sal_plus'])
            sal_cond_anor= (form.cleaned_data['sal_cond_anor'])
            antiguedad= (form.cleaned_data['antiguedad'])
            j_laboral= (form.cleaned_data['j_laboral'])
            if j_laboral == False: 
                trabajador.salario_total= salario_escala + incre_res + cies + sal_plus + sal_cond_anor + antiguedad + trabajador.sal_cat_cient
            else:
                trabajador.salario_jornada_laboral= (salario_escala / 190.6) * 208
                trabajador.salario_total= ((salario_escala / 190.6) * 208) + incre_res + cies + sal_plus + sal_cond_anor + antiguedad + trabajador.sal_cat_cient
                
            # Esto es para registrar el movimiento
            #print("es valido")
            if trabajador_id:
                departamento= (form.cleaned_data['departamento'])
                cargo= (form.cleaned_data['cargo'])
                
                if (departamento != departamento_bd) or (cargo != cargo_bd):
                    
                    
                    #Aumentar disponibilidad
                    plantilla2 = Plantilla.objects.filter(cargo_id=cargo_id2,departamento_id=departamento_id2).get()
                    plantilla2.disponibles=plantilla2.disponibles + 1
                    plantilla2.save()
                    #Decrementar disponibilidad
                    plantilla = Plantilla.objects.filter(cargo_id=cargo,departamento_id=departamento).get()
                    plantilla.disponibles=plantilla.disponibles - 1
                    plantilla.save()
                    #Movimiento
                    movimiento= Movimiento()
                    movimiento.trabajador_id=trabajador_id
                    movimiento.area_act = departamento
                    movimiento.area_ant=  departamento_bd
                    movimiento.cargo_act=cargo
                    movimiento.cargo_ant=cargo_bd
                    movimiento.cies_ant = cies_bd
                    movimiento.cies_act= cies
                    movimiento.antiguedad_ant= antiguedad_bd
                    movimiento.antiguedad_act= antiguedad
                    movimiento.salario_total_ant = salario_total_bd
                    movimiento.salario_total_act= salario_escala + incre_res + cies + sal_plus + sal_cond_anor + antiguedad + trabajador.sal_cat_cient
                    movimiento.sal_plus_ant= sal_plus_bd
                    movimiento.sal_plus_act = sal_plus
                    movimiento.fecha=datetime.today()
                    movimiento.save()
            #Esto es si el contrato es disponible
            t_contrato= (form.cleaned_data['t_contrato'])
            if t_contrato == '8':
                disponible=Disponible()
                disponible.trabajador_id=trabajador.pk
                disponible.fecha=datetime.today()
               # print(trabajador_id)
                disponible.save()
            form.save()
            inline.save()
            
            
            
            if request.POST.get("guardar"):
                return redirect('GestionarTrabajador')
            elif request.POST.get("guardaradicionar"):
                return HttpResponse('AdicionarTrabajador')
                #return redirect('AdicionarTrabajador')
    else:
        inline=NucleoFamiliarFormSet(instance=trabajador)    
        form = TrabajadorForm(instance=trabajador)
        
    return render(request, 'Adicionar_Trabajador.html', {'inline':inline, 'form':form})


def bajaeliminar(request, pk):
    
    trabajador= Trabajador.objects.get(pk=pk)
    
    if request.method=='GET':
        
        return render(request, 'Baja_Trabajador.html', {'trabajador':trabajador})
    else:
        #Aumentar disponibilidad del cargo
        
        plantilla = Plantilla.objects.filter(cargo_id=trabajador.cargo_id,departamento_id=trabajador.departamento_id).get()
        plantilla.disponibles=plantilla.disponibles + 1
        plantilla.save()
        #------------------------
        baja = Baja()
        baja.primer_nombre=trabajador.primer_nombre
        baja.segundo_nombre=trabajador.segundo_nombre
        baja.apellidos=trabajador.apellidos
        baja.ci=trabajador.ci
        baja.foto=trabajador.foto
        baja.sexo=trabajador.sexo
        baja.etnia=trabajador.etnia
        baja.lugar_nacimiento=trabajador.lugar_nacimiento
        baja.telefono=trabajador.telefono
        baja.codigo_interno=trabajador.codigo_interno
        baja.usuario=trabajador.usuario
        baja.fecha_alta=trabajador.fecha_alta
        baja.fecha_disponible=trabajador.fecha_disponible
        baja.fecha_ingreso=trabajador.fecha_ingreso
        baja.especialidad=trabajador.especialidad
        baja.anno_graduado=trabajador.anno_graduado
        baja.escolaridad=trabajador.escolaridad
        baja.save()
        trabajador.delete()
        return redirect('GestionarTrabajador')
    #return render(request, 'Baja_Trabajador.html', {'trabajdor':trabajador})

# class DecimalEncoder(json.JSONEncoder):
#     def _iterencode(self, o, markers=None):
#         if isinstance(o, decimal.Decimal):
#             # wanted a simple yield str(o) in the next line,
#             # but that would mean a yield on the line with super(...),
#             # which wouldn't work (see my comment below), so...
#             return (str(o) for o in [o])
#         return super(DecimalEncoder, self)._iterencode(o, markers)

def eliminar_familiar(request,pk):
    nucleof = NucleoFamiliar.objects.filter(pk=pk)
    nucleof.delete()

def daralta(request,pk):
    baja= Baja.objects.get(pk=pk)
    if request.method == 'GET':
        return render(request, 'Alta_Trabajador.html', {'baja':baja})
    else:
        trabajador= Trabajador()
        #form = TrabajadorForm(request.POST, instance=trabajador)
        #trabajador.id=baja.id
        trabajador.primer_nombre = baja.primer_nombre
        trabajador.segundo_nombre = baja.segundo_nombre
        trabajador.apellidos = baja.apellidos
        trabajador.ci = baja.ci
        trabajador.sexo = baja.sexo
        trabajador.etnia = baja.etnia
        trabajador.lugar_nacimiento = baja.lugar_nacimiento
        trabajador.codigo_interno= baja.codigo_interno
        trabajador.fecha_alta = datetime.today()
        trabajador.fecha_ingreso= baja.fecha_ingreso
        trabajador.anno_graduado= baja.anno_graduado
        trabajador.escolaridad = baja.escolaridad
        trabajador.especialidad_id= baja.especialidad_id
        form = TrabajadorForm(instance=trabajador)
        
        #baja.delete()
        return render (request, 'Adicionar_Trabajador.html', {'form':form})


def salarioescala_por_escalasarial(request, pk):
    escalasalarial = EscalaSalarial.objects.filter(pk=pk)
    
    datos = [{'salario_escala': str(salarioescala.salario_escala), 'id': salarioescala.id} for salarioescala in escalasalarial]
    response = [{"success": 1, "result": datos}]
    return HttpResponse(json.dumps(response), content_type='application/json') 
   # return HttpResponse(json.dumps(response), content_type='application/json')

def cargos_disponibles(request, departamento_id):
    plantilla = Plantilla.objects.filter(departamento_id=departamento_id).exclude(disponibles=0)
    
    datos = [{  'id': cargo_disponible.cargo_id, 'nombre':cargo_disponible.cargo.nombre} for cargo_disponible in plantilla]
    response = [{"success": 1, "result": datos}]
    return HttpResponse(json.dumps(response), content_type='application/json') 
   # return HttpResponse(json.dumps(response), content_type='application/json')

def calificacion_especialidad(request, calificacion_id):
    especialidad = Especialidad.objects.filter(calificacion_id=calificacion_id)
    
    datos = [{'id': especialidades.id, 'nombre':especialidades.nombre} for especialidades in especialidad]
    response = [{"success": 1, "result": datos}]
    return HttpResponse(json.dumps(response), content_type='application/json') 
   # return HttpResponse(json.dumps(response), content_type='application/json')




def check_codigo(request):
    is_available = "false"
    if check == True:
        return HttpResponse("true")
        
    if request.is_ajax():
        
        codigo_interno = request.GET.get("codigo_interno") # Change post to get
        
        try: 
            #Trabajador.objects.get_by_natural_key(codigo_interno)
            Trabajador.objects.get(codigo_interno=codigo_interno)
            
        except ObjectDoesNotExist:
            
            
            is_available = "true"
    return HttpResponse(is_available)

def check_usuario(request):
    is_available = "false"
    if check == True:
        return HttpResponse("true")
        
    if request.is_ajax():
        
        usuario= request.GET.get("usuario") # Change post to get
        if  usuario == 'Ninguno':
            return HttpResponse("true")    
        
        try: 
            #Trabajador.objects.get_by_natural_key(codigo_interno)
            Trabajador.objects.get(usuario=usuario)
            
        except ObjectDoesNotExist:
            
            
            is_available = "true"
        
        
    return HttpResponse(is_available)



def check_ci(request):
    is_available = "false"
    if check == True:
        return HttpResponse("true")
    if request.is_ajax():
        
        ci = request.GET.get("ci") # Change post to get
        
        try: 
            #Trabajador.objects.get_by_natural_key(codigo_interno)
            Trabajador.objects.get(ci=ci)
            
        except ObjectDoesNotExist:
            is_available = "true"
    return HttpResponse(is_available)

def check_plantilla(request):
    is_available = "false"
    if check == True:
        return HttpResponse("true")
    if request.is_ajax():
        
        org_plantilla = request.GET.get("org_plantilla") # Change post to get
        
        try: 
            #Trabajador.objects.get_by_natural_key(codigo_interno)
            Trabajador.objects.get(org_plantilla=org_plantilla)
            
        except ObjectDoesNotExist:
            is_available = "true"
    return HttpResponse(is_available)


#PARA REPORTE PDF --- YANET

def link_callback(uri, rel):
    """
    Convert HTML URIs to absolute system paths so xhtml2pdf can access those
    resources
    """
    # use short variable names
    s_url = settings.STATIC_URL  # Typically /static/
    s_root = settings.STATIC_ROOT  # Typically /home/userX/project_static/
    m_url = settings.MEDIA_URL  # Typically /static/media/
    # Typically /home/userX/project_static/media/
    m_root = settings.MEDIA_ROOT

    # convert URIs to absolute system paths
    if uri.startswith(m_url):
        path = os.path.join(m_root, uri.replace(m_url, ""))
    elif uri.startswith(s_url):
        test = uri.replace(s_url, "")
        path = os.path.join(s_root, uri.replace(s_url, ""))
    else:
        return uri  # handle absolute uri (ie: http://some.tld/foo.png)

    # make sure that file exists
    if not os.path.isfile(path):
        raise Exception(
            'media URI must start with %s or %s' % (s_url, m_url)
        )
    return path


def exportar(request, pk):
    trabajador = Trabajador.objects.get(pk=pk)
    template_path = 'Contrato_Pdf.html'
    ci = trabajador.ci.__str__()
    fecha_nacimiento = ci[4: 6] + '/' + ci[2: 4]+'/' + ci[0: 2]
    dia = trabajador.fecha_contrato.__str__()[8:]
    diccionario = {'01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril', '05': 'Mayo', '06': 'Junio',
                   '07': 'Julio', '08': 'Agosto', '09': 'Septiembre', '10': 'Octubre', '11': 'Noviembre',
                   '12': 'Diciembre'}
    mes = diccionario[trabajador.fecha_contrato.__str__()[5:7]]
    anno = trabajador.fecha_contrato.__str__()[0:4]
    context = {'trabajador': trabajador, 'fecha_nac': fecha_nacimiento, 'dia': dia, 'mes': mes, 'anno': anno}
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Modelo_Contrato.pdf"'

    template = get_template(template_path)
    html = template.render(context)

    pisastatus = pisa.CreatePDF(html, dest=response, link_callback=link_callback)
    if pisastatus.err:
        return HttpResponse('We had some errors with code %s <pre>%s</pre>' % (pisastatus.err,
                                                                               html))
    return response


def exportar_acuerdo(request, pk):
    trabajador = Trabajador.objects.get(pk=pk)
    template_path = 'Acuerdo_Confidencialidad.html'
    ci = trabajador.ci.__str__()
    fecha_nacimiento = ci[4: 6] + '/' + ci[2: 4] + '/' + ci[0: 2]
    dia = trabajador.fecha_contrato.__str__()[8:]
    diccionario = {'01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril', '05': 'Mayo', '06': 'Junio',
                   '07': 'Julio', '08': 'Agosto', '09': 'Septiembre', '10': 'Octubre', '11': 'Noviembre',
                   '12': 'Diciembre'}
    mes = diccionario[trabajador.fecha_contrato.__str__()[5:7]]
    anno = trabajador.fecha_contrato.__str__()[0:4]
    context = {'trabajador': trabajador, 'fecha_nac': fecha_nacimiento, 'dia': dia, 'mes': mes, 'anno': anno}
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Modelo_Acuerdo_Confidencialidad.pdf"'

    template = get_template(template_path)
    html = template.render(context)

    pisastatus = pisa.CreatePDF(html, dest=response, link_callback=link_callback)
    if pisastatus.err:
        return HttpResponse('We had some errors with code %s <pre>%s</pre>' % (pisastatus.err,
                                                                               html))
    return response


def exportar_solic_cuenta_user(request, pk):
    trabajador = Trabajador.objects.get(pk=pk)
    template_path = 'Solicitud_Cuenta_Usuario.html'
    context = {'trabajador': trabajador}
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Modelo_Solicitud_Cuenta_Usuario.pdf"'

    template = get_template(template_path)
    html = template.render(context)

    pisastatus = pisa.CreatePDF(html, dest=response, link_callback=link_callback)
    if pisastatus.err:
        return HttpResponse('We had some errors with code %s <pre>%s</pre>' % (pisastatus.err, html))
    return response


def exportar_movimiento_nomina(request, pk):
    trabajador = Trabajador.objects.get(pk=pk)
    template_path = 'Movimiento_Nomina.html'
    context = {'trabajador': trabajador}
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Modelo_Movimiento_Nomina.pdf"'

    template = get_template(template_path)
    html = template.render(context)

    pisastatus = pisa.CreatePDF(html, dest=response, link_callback=link_callback)
    if pisastatus.err:
        return HttpResponse('We had some errors with code %s <pre>%s</pre>' % (pisastatus.err, html))
    return response