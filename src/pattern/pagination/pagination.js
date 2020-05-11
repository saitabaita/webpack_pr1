//import '../../libs/flexible-paginator/paginator.min';

function myFunc(numP) {
    //alert('Page ' + numP);
}

paginator.initPaginator({
    'totalPage': 40,
    'triggerFunc': myFunc,
    'previousPage':'<',
    'nextPage':'>',
    'allPages': 5
});
    