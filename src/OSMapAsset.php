<?php

namespace IsqPortal\Yii2Osmtileproxy;

use yii\web\AssetBundle;

/**
 * Asset bundle for OSMap Widget
 */
class OSMapAsset extends AssetBundle
{
    public $sourcePath = "@osmap";

    public $js = [];

    public $css = [];

    /**
     * @var array
     */
    public $publishOptions = [
        'forceCopy' => true // reloads on every request
    ];

    public function init()
    {
        parent::init();

        // set asset paths
        $this->js[] = 'js/ol.js';
        $this->js[] = 'js/osmap.js';
        $this->css[] = 'css/osmap.css';
    }
}