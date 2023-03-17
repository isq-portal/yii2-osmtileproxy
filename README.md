# Yii2 OSMTileProxy

OSMTileProxy is a Yii2 Extension for displaying an OpenStreetMap Map-Widget with marker and map tile storage via a local tile proxy server to reach GDPR/DSGVO compliance.

## Installation

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

```bash
php composer.phar require --prefer-dist isq-portal/yii2-osmtileproxy "dev-master"
```

or add

```bash
"isq-portal/yii2-osmtileproxy": "dev-master"
```

to the require section of your `composer.json` file.

## Usage

```php
# add to composer.json
"require-dev" : {
		...,
		"isq-portal/yii2-osmtileproxy": "@dev"
	}

# temporary dev local path (../) solution:
"repositories": [
		...,
		{
			"type": "path",
			"url": "../yii2-osmtileproxy"
		}
	],

# composer update

# import class to view
use IsqPortal\Yii2Osmtileproxy\OSMap;

# integrate widget to view with options., e.g.:

<?= OSMap::widget(['options' => [
                        'height' => '400px',
                        'initialZoom' => '16',
                        'markerText' => 'Schwendenerstr. 31, 14195 Berlin',
                        'markerColor' => 'blue',
                        'width' => '100%',
                        'longitude' => '52.45202093',
                        'latitude' => '13.29243064',
                    ]
                ]); ?> 
```

## License
[MIT](https://choosealicense.com/licenses/mit/)