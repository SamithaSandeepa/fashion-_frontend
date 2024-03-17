# Generated by Django 4.2.6 on 2024-03-17 06:37

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("original_price", models.DecimalField(decimal_places=2, max_digits=6)),
                (
                    "discounted_price",
                    models.DecimalField(decimal_places=2, max_digits=6),
                ),
                ("category_name", models.CharField(max_length=255)),
                ("is_stock", models.BooleanField(default=True)),
                ("rating", models.FloatField()),
                ("reviews", models.IntegerField()),
                ("description", models.TextField()),
                ("trending", models.BooleanField(default=False)),
                ("size", models.IntegerField()),
                ("img", models.URLField()),
            ],
        ),
    ]