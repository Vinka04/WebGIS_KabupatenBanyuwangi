var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Intersect_2_1 = new ol.format.GeoJSON();
var features_Intersect_2_1 = format_Intersect_2_1.readFeatures(json_Intersect_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersect_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersect_2_1.addFeatures(features_Intersect_2_1);
var lyr_Intersect_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intersect_2_1, 
                style: style_Intersect_2_1,
                interactive: true,
    title: 'Intersect_2<br />\
    <img src="styles/legend/Intersect_2_1_0.png" /> Hutan Lindung<br />\
    <img src="styles/legend/Intersect_2_1_1.png" /> Hutan Produksi<br />\
    <img src="styles/legend/Intersect_2_1_2.png" /> Kawasan industri besar<br />\
    <img src="styles/legend/Intersect_2_1_3.png" /> Kawasan industri menengah&kecil<br />\
    <img src="styles/legend/Intersect_2_1_4.png" /> Kawasan perkebunan<br />\
    <img src="styles/legend/Intersect_2_1_5.png" /> Kawasan pertanian beririgasi<br />\
    <img src="styles/legend/Intersect_2_1_6.png" /> Kawasan Suaka Alam / Kawasan Pelestarian Alam<br />\
    <img src="styles/legend/Intersect_2_1_7.png" /> Kawasan tambak<br />\
    <img src="styles/legend/Intersect_2_1_8.png" /> Permukiman pedesaan<br />\
    <img src="styles/legend/Intersect_2_1_9.png" /> Permukiman perkotaan<br />\
    <img src="styles/legend/Intersect_2_1_10.png" /> <br />'
        });
var format_Export_Batas_Administrasi_2 = new ol.format.GeoJSON();
var features_Export_Batas_Administrasi_2 = format_Export_Batas_Administrasi_2.readFeatures(json_Export_Batas_Administrasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Batas_Administrasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Batas_Administrasi_2.addFeatures(features_Export_Batas_Administrasi_2);
var lyr_Export_Batas_Administrasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Batas_Administrasi_2, 
                style: style_Export_Batas_Administrasi_2,
                interactive: true,
                title: '<img src="styles/legend/Export_Batas_Administrasi_2.png" /> Export_Batas_Administrasi'
            });
var format_FasilitasUmum_3 = new ol.format.GeoJSON();
var features_FasilitasUmum_3 = format_FasilitasUmum_3.readFeatures(json_FasilitasUmum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_3.addFeatures(features_FasilitasUmum_3);
var lyr_FasilitasUmum_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasilitasUmum_3, 
                style: style_FasilitasUmum_3,
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_3.png" /> Fasilitas Umum'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Intersect_2_1.setVisible(true);lyr_Export_Batas_Administrasi_2.setVisible(true);lyr_FasilitasUmum_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Intersect_2_1,lyr_Export_Batas_Administrasi_2,lyr_FasilitasUmum_3];
lyr_Intersect_2_1.set('fieldAliases', {'Layer': 'Layer', 'LSD': 'LSD', 'LUAS': 'LUAS', 'WADMKC': 'WADMKC', });
lyr_Export_Batas_Administrasi_2.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_FasilitasUmum_3.set('fieldAliases', {'id': 'id', 'Fasilitas': 'Fasilitas', 'Photo': 'Photo', });
lyr_Intersect_2_1.set('fieldImages', {'Layer': 'TextEdit', 'LSD': 'TextEdit', 'LUAS': 'TextEdit', 'WADMKC': 'TextEdit', });
lyr_Export_Batas_Administrasi_2.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_FasilitasUmum_3.set('fieldImages', {'id': 'TextEdit', 'Fasilitas': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Intersect_2_1.set('fieldLabels', {'Layer': 'no label', 'LSD': 'no label', 'LUAS': 'no label', 'WADMKC': 'no label', });
lyr_Export_Batas_Administrasi_2.set('fieldLabels', {'WADMKC': 'no label', });
lyr_FasilitasUmum_3.set('fieldLabels', {'id': 'no label', 'Fasilitas': 'no label', 'Photo': 'no label', });
lyr_FasilitasUmum_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});