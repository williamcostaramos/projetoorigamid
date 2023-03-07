const addProductCart = ()=>{
    dataLayer.push({ecommerce:null});
    dataLayer.push({
        'event': 'productClick',
        'ecommerce':{
            'click':{
            'actionField':{'list': 'search result'},
            'products': [{
                'name': productObject.name,
                'id':productObject.id,
                'price':productObject.price,
                'brand':productObject.brand,
                'category':productObject.category.name,
                'variant':productObject.variant,
                'position':productObject.position,
            }]
            }
        },
        'eventCallback': ()=>{
            document.location = productObject.url;
        }
    });
}