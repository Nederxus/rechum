# Generated by Django 2.0.2 on 2018-10-24 15:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('adm', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Baja',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primer_nombre', models.CharField(max_length=20, verbose_name='Primer nombre')),
                ('segundo_nombre', models.CharField(blank=True, max_length=20, verbose_name='Segundo nombre')),
                ('apellidos', models.CharField(max_length=60, verbose_name='Apellidos')),
                ('ci', models.CharField(max_length=11, unique=True, verbose_name='Carnet de Identidad')),
                ('foto', models.ImageField(blank=True, upload_to='fotos', verbose_name='Foto')),
                ('sexo', models.CharField(choices=[('M', 'Masculino'), ('F', 'Femenino')], default=('M', 'Masculino'), max_length=1, verbose_name='Sexo')),
                ('etnia', models.CharField(choices=[('B', 'Blanca'), ('M', 'Mestiza'), ('N', 'Negra')], default=('B', 'Blanca'), max_length=10, verbose_name='Etnia')),
                ('lugar_nacimiento', models.CharField(blank=True, max_length=30, verbose_name='Lugar de nacimiento')),
                ('telefono', models.CharField(blank=True, max_length=8, verbose_name='Teléfono')),
                ('codigo_interno', models.CharField(max_length=3, unique=True, verbose_name='Código Interno')),
                ('usuario', models.CharField(blank=True, max_length=20, null=True, verbose_name='Usuario')),
                ('fecha_alta', models.DateField(verbose_name='Fecha de alta al cargo')),
                ('fecha_disponible', models.DateField(blank=True, null=True, verbose_name='Fecha de inicio disponibilidad')),
                ('fecha_ingreso', models.DateField(verbose_name='Fecha de ingreso al organismo')),
                ('anno_graduado', models.PositiveIntegerField(verbose_name='Año de graduado')),
                ('escolaridad', models.CharField(choices=[('6to', '6to Grado'), ('9no', '9no Grado'), ('12mo', '12mo Grado'), ('TM', 'Técnico Medio'), ('OC', 'Obrero Calificado'), ('Univ', 'Universitario')], max_length=20, verbose_name='Escolaridad')),
                ('especialidad', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='adm.Especialidad', verbose_name='Especialidad')),
            ],
        ),
        migrations.CreateModel(
            name='Cpl',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('valor', models.DecimalField(decimal_places=2, max_digits=3)),
            ],
        ),
        migrations.CreateModel(
            name='Disponible',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(verbose_name='Fecha de disponibilidad')),
            ],
        ),
        migrations.CreateModel(
            name='Movimiento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(blank=True, max_length=20, null=True, verbose_name='Fecha del movimiento')),
                ('tipo', models.CharField(blank=True, default='No definido', max_length=20, null=True, verbose_name='Tipo de movimiento')),
                ('cargo_ant', models.CharField(blank=True, max_length=60, null=True, verbose_name='Cargo anterior')),
                ('cargo_act', models.CharField(blank=True, max_length=60, null=True, verbose_name='Cargo actual')),
                ('area_ant', models.CharField(blank=True, max_length=60, null=True, verbose_name='Departamento anterior')),
                ('area_act', models.CharField(blank=True, max_length=60, null=True, verbose_name='Departamento actual')),
                ('cies_ant', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='CIES')),
                ('cies_act', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='CIES')),
                ('antiguedad_ant', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('antiguedad_act', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('salario_total_ant', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True, verbose_name='Salario Total')),
                ('salario_total_act', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True, verbose_name='Salario Total')),
                ('sal_plus_ant', models.DecimalField(decimal_places=2, default=0.0, max_digits=5, verbose_name='Salario plus')),
                ('sal_plus_act', models.DecimalField(decimal_places=2, default=0.0, max_digits=5, verbose_name='Salario plus')),
            ],
        ),
        migrations.CreateModel(
            name='NucleoFamiliar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parentesco', models.CharField(blank=True, choices=[('0', 'Padre'), ('1', 'Madre'), ('2', 'Hermano(a)'), ('3', 'Abuelo(a)'), ('4', 'Tio(a)'), ('5', 'Primo(a)'), ('6', 'Pareja'), ('7', 'Esposo(a)'), ('8', 'Hijastro(a)'), ('9', 'Madrasta'), ('10', 'Padrastro'), ('11', 'Otro')], max_length=10, null=True)),
                ('fecha_nac', models.DateField(blank=True, null=True, verbose_name='Fecha de nacimiento')),
                ('enfermedades', models.CharField(default='Ninguna', max_length=100, verbose_name='Enfermedades que padece')),
                ('vinc_lab', models.BooleanField(verbose_name='Vinculo laboral')),
                ('salario_dev', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True, verbose_name='Salario que devenga')),
            ],
        ),
        migrations.CreateModel(
            name='Trabajador',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primer_nombre', models.CharField(max_length=20, verbose_name='Primer nombre')),
                ('segundo_nombre', models.CharField(blank=True, max_length=20, verbose_name='Segundo nombre')),
                ('apellidos', models.CharField(max_length=60, verbose_name='Apellidos')),
                ('ci', models.CharField(max_length=11, unique=True, verbose_name='Carnet de Identidad')),
                ('foto', models.ImageField(blank=True, upload_to='fotos', verbose_name='Foto')),
                ('sexo', models.CharField(choices=[('M', 'Masculino'), ('F', 'Femenino')], default=('M', 'Masculino'), max_length=1, verbose_name='Sexo')),
                ('etnia', models.CharField(choices=[('B', 'Blanca'), ('M', 'Mestiza'), ('N', 'Negra')], default=('B', 'Blanca'), max_length=10, verbose_name='Etnia')),
                ('lugar_nacimiento', models.CharField(blank=True, max_length=30, verbose_name='Lugar de nacimiento')),
                ('estatura', models.FloatField(blank=True, max_length=3, null=True, verbose_name='Estatura (M)')),
                ('peso', models.FloatField(blank=True, max_length=3, null=True, verbose_name='Peso (K)')),
                ('nombre_madre', models.CharField(blank=True, max_length=40, verbose_name='Nombre de la madre')),
                ('nombre_padre', models.CharField(blank=True, max_length=40, verbose_name='Nombre del padre')),
                ('estado_civil', models.CharField(choices=[('Soltero', 'Soltero(a)'), ('Casado', 'Casado(a)'), ('Divorciado', 'Divorciado(a)'), ('Viudo', 'Viudo(a)')], default=('Soltero', 'Soltero(a)'), max_length=10, verbose_name='Estado civil')),
                ('hijos', models.PositiveIntegerField(default=0, verbose_name='Cantidad de hijos')),
                ('licencia', models.CharField(blank=True, choices=[('0', 'Primera'), ('1', 'Segunda'), ('2', 'Tercera'), ('3', 'Cuarta'), ('4', 'Quinta')], default='No procede', max_length=20, verbose_name='Licencia de conducción')),
                ('enfermedades', models.CharField(blank=True, default='Ninguna', max_length=100, verbose_name='Enfermedades que padece')),
                ('direccion', models.CharField(max_length=500, verbose_name='Dirección')),
                ('telefono', models.CharField(blank=True, max_length=8, verbose_name='Teléfono')),
                ('org_plantilla', models.PositiveIntegerField(unique=True, verbose_name='Organización en la plantilla')),
                ('codigo_interno', models.CharField(max_length=3, unique=True, verbose_name='Código Interno')),
                ('usuario', models.CharField(blank=True, default='Ninguno', max_length=20, null=True, verbose_name='Usuario')),
                ('residencia', models.CharField(max_length=20, verbose_name='Municipio de residencia')),
                ('categoria', models.CharField(choices=[('A', 'Administrativo'), ('C', 'Cuadro '), ('O', 'Operario'), ('S', 'Servicio'), ('T', 'Técnico ')], max_length=15, verbose_name='Categoría ocupacional')),
                ('t_plantilla', models.CharField(blank=True, choices=[('A', 'Administrativo'), ('P', 'Productivo')], max_length=15, verbose_name='Tipo de plantilla')),
                ('t_contrato', models.CharField(choices=[('1', 'Nombramiento'), ('2', 'Indeterminado'), ('3', 'Determinado'), ('4', 'Adiestramiento'), ('5', 'Prestado otra Emp'), ('6', 'A prueba'), ('7', 'Reserva'), ('8', 'Disponible')], max_length=20, verbose_name='Tipo de contrato')),
                ('fuerza_i', models.CharField(blank=True, choices=[('1', 'Otras Empresas'), ('2', 'Reclusos'), ('3', 'Microbrigrada'), ('4', 'Otros')], max_length=20, verbose_name='Fuerza irregular')),
                ('t_pago', models.CharField(choices=[('S', 'Sueldista'), ('V', 'Vinculado')], max_length=20, verbose_name='Tipo de pago')),
                ('s_pago', models.CharField(choices=[('1', 'Res. 6 2016'), ('2', 'Res.1 2017'), ('3', 'Res.15 2016')], max_length=20, verbose_name='Sistema de pago')),
                ('j_laboral', models.BooleanField(default=False, verbose_name='Jornada Laboral de 208 horas')),
                ('salario_escala', models.DecimalField(decimal_places=2, default=0.0, max_digits=5, verbose_name='Salario escala')),
                ('incre_res', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Pago por perfeccionamiento')),
                ('sal_bas', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Salario básico')),
                ('por_cies', models.CharField(choices=[('0', '0%'), ('1', '30%'), ('2', '50%')], default=('0', '0%'), max_length=3, verbose_name='% CIES')),
                ('cies', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='CIES')),
                ('sal_plus', models.DecimalField(decimal_places=2, default=0.0, max_digits=5, verbose_name='Salario plus')),
                ('sal_cond_anor', models.DecimalField(decimal_places=2, default=0.0, max_digits=5, verbose_name='Salario condiciones anormales')),
                ('por_anti', models.CharField(choices=[('0', '0%'), ('1', '5%'), ('2', '10%')], default=('0', '0%'), max_length=3, verbose_name='% Antiguedad')),
                ('antiguedad', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('fecha_contrato', models.DateField(verbose_name='Fecha de contrato')),
                ('fecha_alta', models.DateField(verbose_name='Fecha de alta al cargo')),
                ('fecha_disponible', models.DateField(blank=True, null=True, verbose_name='Fecha de inicio disponibilidad')),
                ('fecha_ingreso', models.DateField(verbose_name='Fecha de ingreso al organismo')),
                ('albergado', models.BooleanField()),
                ('sancionado', models.BooleanField()),
                ('cat_cient', models.CharField(choices=[('1', 'Ninguna'), ('2', 'Máster'), ('3', 'Doctor')], max_length=10)),
                ('sal_cat_cient', models.PositiveIntegerField(blank=True, null=True, verbose_name='Salario x cat. científica')),
                ('salario_total', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True, verbose_name='Salario Total')),
                ('salario_jornada_laboral', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=5, null=True, verbose_name='Salario por Jornada Laboral')),
                ('actividad', models.CharField(blank=True, default='Ninguna', max_length=30, verbose_name='Actividad')),
                ('anno_graduado', models.PositiveIntegerField(blank=True, null=True, verbose_name='Año de graduado')),
                ('centro_graduacion', models.CharField(default='Ninguno', max_length=40, verbose_name='Centro de graduación')),
                ('pais_graduacion', models.CharField(default='Ninguno', max_length=20, verbose_name='País de graduación')),
                ('escolaridad', models.CharField(choices=[('6to', '6to Grado'), ('9no ', '9no Grado'), ('12mo ', '12mo Grado'), ('TM', 'Técnico Medio'), ('OC', 'Obrero Calificado'), ('Univ', 'Universitario')], max_length=20, verbose_name='Escolaridad')),
                ('idioma', models.CharField(blank=True, default='Ninguno', max_length=20, null=True, verbose_name='Idioma')),
                ('tipo_tecnico', models.CharField(choices=[('TA', 'Tec. Administrativo'), ('TD ', 'Tec.Dirigente'), ('TP ', 'Tec. Plaza Profesional'), ('TN', 'Tec. No Titulado'), ('TU', 'Tec. Universitario'), ('TM', 'Tec. Medio'), ('Nin', 'Ninguno')], max_length=20, verbose_name='Tipo de tecnico')),
                ('tec_tac', models.BooleanField(verbose_name='Tec. TAC')),
                ('orga_defensa', models.CharField(choices=[('MTT', 'MTT'), ('FEI', 'FEI'), ('BPD-LR ', 'BPD-LR'), ('BPD-PTG ', 'BPD-PTG'), ('U/R', 'U/R'), ('Imp', 'Imprescindible')], max_length=20, verbose_name='Organización de defensa')),
                ('unidad_militar', models.CharField(blank=True, max_length=20, verbose_name='Unidad Militar')),
                ('estado_mayor', models.CharField(blank=True, max_length=20, verbose_name='Estado Mayor')),
                ('a_mision', models.CharField(blank=True, max_length=15, verbose_name='Año de misión')),
                ('militancia', models.CharField(blank=True, choices=[('1', 'UJC'), ('2', 'PCC')], max_length=5, verbose_name='Militancia')),
                ('org_masas', models.CharField(max_length=20, verbose_name='Organizaciones de masas')),
                ('org_prof', models.CharField(blank=True, max_length=20, verbose_name='Organizaciones profesionales')),
                ('org_cult', models.CharField(blank=True, max_length=20, verbose_name='Organizaciones culturales')),
                ('zapato', models.CharField(max_length=4)),
                ('saya', models.CharField(blank=True, max_length=4)),
                ('blusa', models.CharField(blank=True, max_length=4)),
                ('pullover', models.CharField(max_length=4)),
                ('pitusa', models.CharField(blank=True, max_length=5)),
                ('camisa', models.CharField(blank=True, max_length=5)),
                ('derecho', models.BooleanField(verbose_name='Con derecho')),
                ('calificacion', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='adm.Calificacion', verbose_name='Calificación')),
                ('cargo', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='adm.Cargo', verbose_name='Cargo')),
                ('departamento', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='adm.Departamento', verbose_name='Departamento')),
                ('escala_salarial', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='adm.EscalaSalarial')),
                ('especialidad', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='adm.Especialidad', verbose_name='Especialidad')),
                ('unidad_org', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='adm.UnidadOrg', verbose_name='Unidad organizacional')),
            ],
        ),
        migrations.AddField(
            model_name='nucleofamiliar',
            name='trabajador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ges_trab.Trabajador'),
        ),
        migrations.AddField(
            model_name='movimiento',
            name='trabajador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ges_trab.Trabajador'),
        ),
        migrations.AddField(
            model_name='disponible',
            name='trabajador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ges_trab.Trabajador'),
        ),
        migrations.AddField(
            model_name='cpl',
            name='trabajador',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ges_trab.Trabajador'),
        ),
    ]