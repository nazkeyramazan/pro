from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=250)
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    def __str__(self):
        return f'Category id={self.id}, name={self.name}'
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,

        }

class Book (models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=10000,default="No data")
    price = models.IntegerField( default='No data')
    image = models.CharField(max_length=10000,default='no image, text to owner to update info')
    link = models.CharField(max_length=10000,default='No inforamtion, text to owner to update info')
    category = models.ForeignKey(Category ,on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'
    def __str__(self):
        return f'Book id={self.id}, name={self.name}'
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.description,
            'price' : self.price,
            'image' : self.price,
            'link' : self.link,
            'category': self.category_id,
        }
