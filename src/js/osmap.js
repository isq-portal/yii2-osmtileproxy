
/** declare needed variables **/
var osmap_target = "osmap";

var osmap_x=osmap_longitude;
var osmap_y=osmap_latitude;
var osmap_initialZoom=osmap_initialZoom;

var osmap_relpath=osmap_path+'/'+osmap_proxy;

var osmap_markerred_src = "data:image/png;base64,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ZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6MTU5YmQ5MWItYTkwYS00MjIyLWEzZDAtYTZhYTY1ZmVmNGZjIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZmOGFmMGI1LTY4YWItNDMwZS1hYjYyLTBmMjk0Njk3ZDhmMyIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ3NjJkM2QzLTAyMjUtNDBiMi05MTcwLTEyMTJiMjYxZTljMCIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjUyOTU0MDQ3MDg4MzQ2IgogICBHSU1QOlZlcnNpb249IjIuMTAuMjQiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGU5OTY1ZDgtMDMyNi00YjU5LWEwNTUtMTRiY2FhMTJmOTA2IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA1LTE5VDExOjU0OjA3Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pk6X5vYAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBRMJNgeeLBpnAAACjklEQVRIx7XXS2hVVxQG4G+fxGgK8VGEkI6ERui4GnzBzU1aaKEzoThoO+rQYSelRRERHAVUCIjVScW3fUpF0N5EJ0UDlQ6K2GrAIKUoqOggCb3e4+AeNdp7Xt7rPzpn773+f+219/oPJ8jAJVbV+SiwFqtjVkDgbsyNiKmIXyrcTuMIrQYneDvwZYONCiDwa2BPlelcgYt8+pgv0KMc5rsYG+ZIqsAlttfZog10c6LCzqfv0YKyfNYuOdTZMsknL+xggsGY01ikM5gPfDzCzShR2dZBcliccAoXeecx3xUIquG35HkDRvMCutjc3eCDnHWz2DrK5QVjR2uswzh60wIbfBjFDOUI7HqJnGb6l7ErKzBmKAoMZqx5FHp7f0ptsObco4wGHIxi+jIEZkZmZ+O0yWRuJmMHfVFOeVYWOPzMNVHIMCr015pGl3at1qI/o0QzUcz1nAx31xhoQT6A3Tmxf3UHJmLey1j0Fk7WOISpZGwIn+PNHJedDJP0NriA5TqL+328H1WZDXyj8zgwxFyk2YrHA/92MnucembX65kL7OkUe8T4aNNinn8PqpwJXG2XPHC9yrH/fXAS99uO+TYFvn5pN89RYbqdAw8crHItVQCWNgVuvAL/rS72tziPF7GGesRXZdm72FFJDjZTIDnwPwOHS5Tm+2GupNyoVOzFvQL8D3sYy7iyKV7f7PCxAtmPb+JBaYFE5MfAzYwl08s4mtN0uRnuy5g78C6NtgSqXAj83Sr7Ec4UsI1CONQi8NuCvpSPJZxLHPLZzVlUIPvCAhv4L/DDgtqf3cRcxwSSTj27IOjnEtZdDBWuBf7BnWH+KPG/UArnA8tK/pCUsuOpmDdem0APv9dZWibmCe/5lLhp7/72AAAAAElFTkSuQmCC";
var osmap_markerblue_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=";

var osmap_markertext = osmap_markerText;
var osmap_markercolor= osmap_markerColor;

var osmap_center_x = null;
var osmap_center_y = null;
var osmap_center = null;
var osmap_layer = null;

var osmap_zoom = null;
var osmap_minzoom = 8;
var osmap_maxzoom = 18;

var osmap_zooms = osmap_maxzoom - osmap_minzoom;
var osmaps_attribution = new ol.control.Attribution({
    collapsible: false
});

var osmap_tileerror = 0;
var osmap_failover = 0;
var osmap_view;

var osmap_map;
var osmap_my_x;
var osmap_my_y;

var osmap_deltax = 2;
var osmap_deltay = 1;

var osmap_maxResolution;
var osmap_resolution = 0;


/** central map init function **/      
function osmap_initAll() {

    /** tile source initialisation **/
    var osmap_mysource = new ol.source.OSM({
        crossOrigin: null,
        url: osmap_relpath+'?z={z}&x={x}&y={y}&r=osm',
        minZoom: osmap_minzoom,
        maxZoom: osmap_maxzoom
    });

    /** tile server proxy with tile source **/
    var osmaps_tileserver = new ol.layer.Tile({
        source: osmap_mysource,
        declutter: true,
        maxZoom: osmap_maxzoom
    });

    /** tile loading error handling **/
    osmap_mysource.on('tileloadend', function () {
        osmap_tileerror = 0;
    });
    osmap_mysource.on('tileloaderror', function () {
        osmap_tileerror++;
        if (osmap_tileerror >0 && osmap_failover < 50) {
            osmap_failover++;
            osmap_mysource.setUrl(osmap_relpath+'?z={z}&x={x}&y={y}&r=osm');
        }
    });

    /** calculate map extent to limit scrollable map area **/
    var osmap_extent = ol.proj.transformExtent([
            osmap_x - osmap_deltax, osmap_y - osmap_deltay, osmap_x + osmap_deltax, osmap_y + osmap_deltay
        ], 'EPSG:4326', 'EPSG:3857'
    );

    /** get additional controlButtons **/
    var additionalControlButtons = getDrawCenterControl();

    /** init osmap_map object **/
    osmap_map = new ol.Map({
        target: osmap_target,
        layers: [osmaps_tileserver],
        view: new ol.View({
            center: ol.proj.fromLonLat([osmap_x, osmap_y]),
            zoom: osmap_initialZoom,
            minZoom: osmap_minzoom,
            maxZoom: osmap_maxzoom,
            extent: osmap_extent,
        }),
        /** add control buttons **/
        controls: ol.control.defaults().extend([additionalControlButtons]),
    });

    /** function calls to extend map with functions **/
    osmap_addMarker();
    /** add event listener for buttons **/
    osmap_addEventListener();


}

/** adds the osmap event listeners **/
function osmap_addEventListener() {

    /** get the center coordinates **/
    let controlCenter = osmap_map.getView().getCenter();

    /** add listener to center button **/
    var osmap_centerButton = document.getElementById('osmap_controlcenter');
    osmap_centerButton.addEventListener('click', function() {
        /** console.log(controlCenter); **/
        osmap_map.getView().setCenter(controlCenter);
        osmap_map.getView().setZoom(osmap_initialZoom);
    });
}

/** create center control button **/
function getDrawCenterControl() {

    var button = document.createElement('img');

    button.setAttribute("style","max-width:16px;cursor:pointer");
    button.setAttribute("src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTcwLjk1bW0iIGhlaWdodD0iMTcwLjk1bW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE3MC45NSAxNzAuOTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY0Ny4yOCAtNTkuMjYyKSI+CiAgPGNpcmNsZSBjeD0iNzMyLjc1IiBjeT0iMTQ0Ljc0IiByPSI2NS43NjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEwIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogIDxnPgogICA8Y2lyY2xlIGN4PSI3MzIuNzUiIGN5PSIxNDQuNzQiIHI9IjEwIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICA8cmVjdCB4PSI3NjguMjMiIHk9IjE0MC4zMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiByeT0iMS43NDAzIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICA8cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiIHg9IjE4MC4yMSIgeT0iLTczNy43NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiByeT0iMS43NDAzIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICA8cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiIHg9IjU5LjI2MiIgeT0iLTczNy43NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiByeT0iMS43NDAzIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICA8cmVjdCB4PSI2NDcuMjgiIHk9IjE0MC4zMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiByeT0iMS43NDAzIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==");

    var element = document.createElement('div');
    element.className = 'ol-draw ol-control';
    element.id = 'osmap_controlcenter';
    element.appendChild(button);

    return new ol.control.Control({element: element});
}


/** add marker function **/
function osmap_addMarker(center1) {
    
    if (!center1) {
        var center = ol.proj.transform(osmap_map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
        osmap_my_x = center[0];
        osmap_my_y = center[1];
    } else {
        var center = ol.proj.transform(center1, 'EPSG:3857', 'EPSG:4326');
        osmap_my_x = center[0];
        osmap_my_y = center[1];
    }

    var osmap_markerSrc = osmap_markerred_src;
    if (osmap_markercolor === 'blue') {
        osmap_markerSrc = osmap_markerblue_src;
    }

    /** create new layer for the marker **/
    osmap_layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([osmap_my_x, osmap_my_y]))
                })
            ]
        }),
        /** marker src & style **/
        style: new ol.style.Style({

            image: new ol.style.Icon({
                anchor: [0.5, 1],
                src: osmap_markerSrc,
            }),

            text: new ol.style.Text({
                text: osmap_markertext, 
                offsetY: -55,
                scale: 1.4,
                fill: new ol.style.Fill({
                    color: "#fff"
                }),
                stroke: new ol.style.Stroke({
                    color: "0",
                    width: 2
                })
            })
        })
    });
    /** add the layer to osmap_map object **/
    osmap_map.addLayer(osmap_layer);
}

/** enable document ready hook **/ 
function osmap_docReady(fn) {
    /** see if DOM is already available **/
    if (document.readyState === "complete" || document.readyState === "interactive") {
        /** call on next available tick **/
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
osmap_docReady(function() {
    /** init all layers if ready **/
        osmap_initAll();
});