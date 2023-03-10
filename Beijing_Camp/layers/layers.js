var wms_layers = [];


        var lyr_EsriShadedRelief_0 = new ol.layer.Tile({
            'title': 'Esri Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '北京市行政区'
            });
var format_2023_2 = new ol.format.GeoJSON();
var features_2023_2 = format_2023_2.readFeatures(json_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_2.addFeatures(features_2023_2);
var lyr_2023_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2023_2, 
                style: style_2023_2,
                interactive: true,
                title: '<img src="styles/legend/2023_2.png" /> 北京露营2023'
            });

lyr_EsriShadedRelief_0.setVisible(true);lyr__1.setVisible(true);lyr_2023_2.setVisible(true);
var layersList = [lyr_EsriShadedRelief_0,lyr__1,lyr_2023_2];
lyr__1.set('fieldAliases', {'adcode': 'adcode', 'name': 'name', 'center': 'center', 'centroid': 'centroid', 'childrenNum': 'childrenNum', 'level': 'level', 'parent': 'parent', 'subFeatureIndex': 'subFeatureIndex', 'acroutes': 'acroutes', });
lyr_2023_2.set('fieldAliases', {'name': 'name', 'address': 'address', 'name_min': 'name_min', 'Creator': 'Creator', });
lyr__1.set('fieldImages', {'adcode': '', 'name': '', 'center': '', 'centroid': '', 'childrenNum': '', 'level': '', 'parent': '', 'subFeatureIndex': '', 'acroutes': '', });
lyr_2023_2.set('fieldImages', {'name': '', 'address': '', 'name_min': '', 'Creator': '', });
lyr__1.set('fieldLabels', {'adcode': 'no label', 'name': 'no label', 'center': 'no label', 'centroid': 'no label', 'childrenNum': 'no label', 'level': 'no label', 'parent': 'no label', 'subFeatureIndex': 'no label', 'acroutes': 'no label', });
lyr_2023_2.set('fieldLabels', {'name': 'header label', 'address': 'header label', 'name_min': 'header label', 'Creator': 'header label', });
lyr_2023_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});