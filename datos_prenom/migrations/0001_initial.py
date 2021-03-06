# Generated by Django 2.0.2 on 2018-10-24 15:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ges_trab', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Alimentacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desde', models.DateField(verbose_name='Fecha de inicio')),
                ('hasta', models.DateField(verbose_name='Fecha de fin')),
                ('cant_dias', models.PositiveIntegerField(verbose_name='Días trabajados')),
                ('cant_dias_dieta', models.PositiveIntegerField(blank=True, default=0, null=True, verbose_name='Días dieta')),
                ('codigo_trab', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='ges_trab.Trabajador')),
            ],
        ),
        migrations.CreateModel(
            name='TrabajoExtraordinario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desde', models.DateField(verbose_name='Fecha de inicio')),
                ('hasta', models.DateField(verbose_name='Fecha de fin')),
                ('cant_horas', models.PositiveIntegerField(verbose_name='Cantidad de horas')),
                ('codigo_trab', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='ges_trab.Trabajador')),
            ],
        ),
        migrations.CreateModel(
            name='Vacaciones',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(verbose_name='Fecha de inicio')),
                ('cant_dias', models.PositiveIntegerField(verbose_name='Cantidad de días')),
                ('codigo_trab', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='ges_trab.Trabajador')),
            ],
        ),
    ]
