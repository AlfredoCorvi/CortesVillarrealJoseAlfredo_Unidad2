from django.shortcuts import render


def index(request):
    context = {
        'title' : 'Explorando el universo con django',
        'planets' : ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter']
    }

    return render(request, 'universe/index.html', context)
