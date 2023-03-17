<?php

namespace IsqPortal\Yii2Osmtileproxy;

use Yii;
use yii\base\Widget;
use yii\helpers\Html;
use yii\web\View;
use yii\helpers\Json;

/**
 *
 */
class OSMap extends Widget
{
    /**
     * @var array An array of options that are supported
     */
    public $options = [];

    /** map height */
    public $height = '400px';

    /** map width */
    public $width = '100%';

    /** initial zoom property */
    public $initialZoom = 16;

    /** @var float latitude X */
    public $latitude = 13.292430649149545;

    /** @var float longitude Y */
    public $longitude = 52.45202093175121;

    /** @var string markerText */
    public $markerText = "Schwendenerstr. 31, 14195 Berlin";

    /** @var string markerColor */
    public $markerColor = "red";


    /** basePath property */
    public $basePath;

    /** configJs property */
    public $configJs;

    /** configCss property */
    public $configCss;

    /** view Property */
    public $view;



    /** widget init
     * @return void
     */
    public function init()
    {
        /** parent init call */
        parent::init();

        /** get basePath */
        $this->basePath = Yii::getAlias('@webroot');

        Yii::setAlias('@osmap', dirname(__FILE__));


        /** js config  */
        // zoom intial
        if (isset($this->options['initialZoom'])) {
            $this->initialZoom = $this->options['initialZoom'];
        }
        $this->configJs = "var osmap_initialZoom=".$this->initialZoom.";";

        // longitude
        if (isset($this->options['longitude'])) {
            $this->longitude = $this->options['longitude'];
        }
        $this->configJs .= "var osmap_longitude=".$this->longitude.";";

        // latitude
        if (isset($this->options['latitude'])) {
            $this->latitude = $this->options['latitude'];
        }
        $this->configJs.= "var osmap_latitude=".$this->latitude.";";

        // markertext
        if (isset($this->options['markerText'])) {
            $this->markerText = $this->options['markerText'];
        }
        $this->configJs.= "var osmap_markerText='".$this->markerText."';";

        // markercolor
        if (isset($this->options['markerColor'])) {
            $this->markerColor = $this->options['markerColor'];
        }
        $this->configJs.= "var osmap_markerColor='".$this->markerColor."';";


        /** css config  */
        if (isset($this->options['height'])) {
            $this->height = $this->options['height'];
        }
        if (isset($this->options['width'])) {
            $this->width = $this->options['width'];
        }

        $this->configCss = ".osmap { height : ".$this->height
            ."; width : ".$this->width."; }";




        $this->registerAssets();
    }

    /** run the widget
     * @return mixed
     */
    public function run()
    {
        // return Html::encode($this->basePath);
        return Html::tag('div', '', ['id' => 'osmap', 'class' => 'osmap']);
    }


    /**
     * Registers the needed assets
     */
    public function registerAssets()
    {
        $this->view = $this->getView();
        $this->view->registerJS($this->configJs, View::POS_HEAD);
        $this->view->registerCss($this->configCss);
        OSMapAsset::register($this->view);

    }
}
