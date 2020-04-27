from rest_framework import serializers

from api.models import Category , Book

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    image = serializers.CharField()
    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance

class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class BookModelSerializer(serializers.ModelSerializer):
    category = CategoryModelSerializer (read_only= True)
    category_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Book
        fields = ('id', 'name', 'description' , 'price' ,'image' , 'link', 'category', 'category_id')
class Book2ModelSerializer(serializers.ModelSerializer):
    # category = CategoryModelSerializer (read_only= True)
    # category_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Book
        fields = ('id', 'name', 'description' , 'price' , 'image' , 'link')

class CategoryWithBookModelSerializer(serializers.ModelSerializer):
    books = Book2ModelSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'books')

class BookSerializer(serializers.Serializer):
    # id = serializers.IntegerField(read_only=True)
    # name = serializers.CharField()
    # description = serializers.CharField()
    price = serializers.IntegerField()
    # category = CategoryModelSerializer(read_only=True)
    # category_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        book  = Book.objects.create(**validated_data)
        return book

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name' , instance.name)
        instance.description = validated_data.get('description' , instance.description)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance
