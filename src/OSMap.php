<?php
/** namespace */
namespace IsqPortal\Yii2Osmtileproxy;

/** class imports */
use Yii;
use yii\base\Widget;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\web\View;
use yii\helpers\Json;

/**
 * main OSMap class definition
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

    /** bundle property */
    private $bundle;

    /** baseUrl property */
    private $baseUrl;

    /** osmap proxy */
    private $osmap_proxy = 'OSMapProxy.php';

    /** widget init
     * @return void
     */
    public function init()
    {
        /** parent init call */
        parent::init();

        /** set alias for routing **/
        Yii::setAlias('@osmap', dirname(__FILE__));

        /** get the asset bundle instance */
        $this->bundle = Yii::$app->getAssetManager()->getBundle('IsqPortal\Yii2Osmtileproxy\OSMapAsset');

        /** get asset baseUrl */
        $this->baseUrl = $this->bundle->baseUrl;

        /** get asset basePath */
        $this->basePath = $this->bundle->basePath;


        /** begin js config  *******************************************************/

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

        // add path to js
        $this->configJs.= "var osmap_path='".$this->baseUrl."';";

        // add proxy file to js
        $this->configJs.= "var osmap_proxy='".$this->osmap_proxy."';";

        /** end js config  *******************************************************/

        /** begin css config  ****************************************************/
        if (isset($this->options['height'])) {
            $this->height = $this->options['height'];
        }
        if (isset($this->options['width'])) {
            $this->width = $this->options['width'];
        }

        $this->configCss = ".osmap { height : ".$this->height
            ."; width : ".$this->width."; }";
        /** end css config  ****************************************************/

        /** call register Assets function */
        $this->registerAssets();
    }

    /** run the widget
     * @return mixed
     */
    public function run()
    {
        // generate the div tag with osmap id
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
