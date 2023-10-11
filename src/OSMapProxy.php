<?php

namespace IsqPortal\Yii2Osmtileproxy;

/**
 * Proxy for OSMap Widget
 */

/** check $_GET, exit as invalid request if not set */
if (!isset($_GET) || (!isset($_GET['r'])) || (!isset($_GET['z'])) || (!isset($_GET['x'])) || (!isset($_GET['y']))) {
    echo "Invalid Request";
    exit;
    }

/** get parameter holen */
$parameter_z = intval($_GET['z']);
$parameter_x = intval($_GET['x']);
$parameter_y = intval($_GET['y']);
$parameter_r = strip_tags($_GET['r']);

/** configuration */
$osMapProxyUserAgent = 'Browser-Proxy/0.2';
$tileDirectoryConfig = "../osmaptileproxy_tiledata";

$tileUrl = array('osm' => 'https://{switch:a,b,c}.tile.openstreetmap.org/{z}/{x}/{y}.png');
$tileDuration = 1186400; // 2 weeks
$accessControlArray = array('Access-Control-Allow-Origin:' => '*',);

/**  referrer check: Schutz vor Aufruf durch Dritte -> $referer_protection = true
 *   Nur der Server selbst ($_SERVER["HTTP_HOST"])
 *   darf Anfragen via $_SERVER["HTTP_REFERER"] und Antwort erhalten
 */
$referer_protection = true;

$serverName = @$_SERVER["HTTP_HOST"];
$valid_domain = "://".$serverName;

if ($referer_protection) {
    $http_referrer = @$_SERVER["HTTP_REFERER"];
    if (!(strpos($http_referrer, $valid_domain) >= 1)) {
        echo "Unauthorized Request";
        exit();
    }
}

/** functions */

/** search and replace URL parameters
 * @param $tileStreamUrl
 * @return array|string|string[]|null
 */
function searchAndReplaceUrlParameters($tileStreamUrl)
{
    global $parameter_z, $parameter_x, $parameter_y;
    $matchUrlResults = preg_match('/{switch:(.*?)}/', $tileStreamUrl, $urlMatches);

    if (!$matchUrlResults) {
        $urlMatches = ['', ''];
    }
    $urlMatches = explode(',', $urlMatches[1]);
    $tileStreamUrl = preg_replace('/{switch:(.*?)}/', '{s}', $tileStreamUrl);
    $tileStreamUrl = preg_replace('/{s}/', $urlMatches[array_rand($urlMatches)], $tileStreamUrl);
    $tileStreamUrl = preg_replace('/{z}/', $parameter_z, $tileStreamUrl);
    $tileStreamUrl = preg_replace('/{x}/', $parameter_x, $tileStreamUrl);
    $tileStreamUrl = preg_replace('/{y}/', $parameter_y, $tileStreamUrl);
    return $tileStreamUrl;
}


/** check tiles in between
 * @param $tileNumber
 * @param $leftTileNumber
 * @param $rightTileNumber
 * @return bool
 */
function checkTilesinBetween($tileNumber, $leftTileNumber, $rightTileNumber)
{
    return $tileNumber >= $leftTileNumber && $tileNumber <= $rightTileNumber;
}

/** check File Modification Timestamp
 * @param $localTileFileName
 * @return bool
 */
function checkFileModificationTime($localTileFileName)
{
    global $tileDuration;
    return filemtime($localTileFileName) < time() - ($tileDuration * 30);
}

/** checks Tile local existence
 * @param $tileStreamUrl
 * @return bool
 */
function checkExistsTileLocal($tileStreamUrl)
{
    $tileCurlHandle = curl_init($tileStreamUrl);
    curl_setopt($tileCurlHandle, CURLOPT_NOBODY, true);
    curl_setopt($tileCurlHandle, CURLOPT_FOLLOWLOCATION, true);
    curl_exec($tileCurlHandle);
    $curlStatusInfo = curl_getinfo($tileCurlHandle, CURLINFO_HTTP_CODE);
    curl_close($tileCurlHandle);
    if ($curlStatusInfo == 200) {
        return true;
    }
    return false;
}

/** save curled tiles to local folder & file
 * @param $tileStreamUrl
 * @param $localTileDirectory
 * @param $localTileFileName
 * @return void
 */
function saveTileToLocal($tileStreamUrl, $localTileDirectory, $localTileFileName)
{
    global $osMapProxyUserAgent;
    if (!is_dir($localTileDirectory)) {
        @mkdir($localTileDirectory, 0755, true);
    }
    $tileFilePointer = fopen($localTileFileName, 'wb');
    $tileCurlHandle = curl_init($tileStreamUrl);
    curl_setopt($tileCurlHandle, CURLOPT_FILE, $tileFilePointer);
    curl_setopt($tileCurlHandle, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($tileCurlHandle, CURLOPT_HEADER, 0);
    curl_setopt($tileCurlHandle, CURLOPT_USERAGENT, $osMapProxyUserAgent);
    if (checkLocalhost()) {
        curl_setopt($tileCurlHandle, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($tileCurlHandle, CURLOPT_SSL_VERIFYPEER, false);
    }
    curl_exec($tileCurlHandle);
    curl_close($tileCurlHandle);
    fflush($tileFilePointer);
    fclose($tileFilePointer);
}

/** send tile stream from localTileFileName
 * @param $localTileFileName
 * @return void
 */
function sendTileStream($localTileFileName)
{
    prepareHeaderExpirationValues($localTileFileName);
    readfile($localTileFileName);
}

/** create stream from local tile file
 * @param $tileStreamUrl
 * @return void
 */
function createTileStream($tileStreamUrl)
{
    global $osMapProxyUserAgent;
    $streamContext = stream_context_create(array('http' => array('method' => 'GET', 'user_agent' => $osMapProxyUserAgent,),));
    $tileFilePointer = @fopen($tileStreamUrl, 'rb', false, $streamContext);
    if (!$tileFilePointer) {
        return;
    }
    streamTile($tileStreamUrl);
    fpassthru($tileFilePointer);
}

/** get new tile from os map tileserver
 * @param $tileStreamUrl
 * @return array
 */
function getFromTileserver($tileStreamUrl)
{
    global $osMapProxyUserAgent;
    $accessControlArray = [];
    $tileCurlHandle = curl_init();
    curl_setopt($tileCurlHandle, CURLOPT_URL, $tileStreamUrl);
    curl_setopt($tileCurlHandle, CURLOPT_HEADER, true);
    curl_setopt($tileCurlHandle, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($tileCurlHandle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($tileCurlHandle, CURLOPT_USERAGENT, $osMapProxyUserAgent);
    if (checkLocalhost()) {
        curl_setopt($tileCurlHandle, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($tileCurlHandle, CURLOPT_SSL_VERIFYPEER, false);
    }
    curl_setopt($tileCurlHandle, CURLOPT_HEADERFUNCTION, function ($curlOptCallback, $accessControlKey) use (&$accessControlArray) {
        $accessControlArray[] = $accessControlKey;
        return strlen($accessControlKey);
    });
    curl_exec($tileCurlHandle);
    curl_close($tileCurlHandle);
    return $accessControlArray;
}

/** check for localhost remote address
 * @return bool
 */
function checkLocalhost()
{
    $remoteAddress = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : null;
    return in_array($remoteAddress, ['127.0.0.1', '::1'], true);
}

/** stream the tile file with headers
 * @param $tileStreamUrl
 * @return void
 */
function streamTile($tileStreamUrl)
{
    $accessControlArray = getFromTileserver($tileStreamUrl);
    setHttpHeaderValues($accessControlArray);
}

/** prepare header expiration values
 * @param $localTileFileName
 * @return void
 */
function prepareHeaderExpirationValues($localTileFileName)
{
    global $tileDuration;
    $accessControlArray = array('Expires:' => gmdate('D, d M Y H:i:s', time() + $tileDuration * 60) . ' GMT', 'Last-Modified:' => gmdate('D, d M Y H:i:s', filemtime($localTileFileName)) . ' GMT', 'Cache-Control:' => 'public, max-age=' . ($tileDuration * 60), 'Content-Type:' => 'image/png',);
    setHttpHeaderValues($accessControlArray);
}

/** set http header values
 * @param $accessControlHeaders
 * @return void
 */
function setHttpHeaderValues(&$accessControlHeaders)
{
    global $accessControlArray;
    foreach ($accessControlHeaders as $accessControlKey => $accessControlValue) {
        if (is_string($accessControlKey)) {
            header($accessControlKey . ' ' . $accessControlValue);
        } else {
            header($accessControlValue);
        }
    }
    foreach ($accessControlArray as $accessControlKey => $accessControlValue) {
        header_remove(rtrim($accessControlKey, ':'));
        header($accessControlKey . ' ' . $accessControlValue);
    }
}

/** process tilestream XHR */
$tileStreamUrl = searchAndReplaceUrlParameters($tileUrl[$parameter_r]);
$localTileDirectory = $tileDirectoryConfig . "/" . $parameter_z . "/" . $parameter_x;
$localTileFileName = $localTileDirectory . "/" . $parameter_y . ".png";
if ($parameter_z >= 19) {
    createTileStream($tileStreamUrl);
    exit;
}
if (!is_file($localTileFileName) || (checkFileModificationTime($localTileFileName) && checkExistsTileLocal($tileStreamUrl))) {
    saveTileToLocal($tileStreamUrl, $localTileDirectory, $localTileFileName);
}
/** send the tileStream */
sendTileStream($localTileFileName);
exit;